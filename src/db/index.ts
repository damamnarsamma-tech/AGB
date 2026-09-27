import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema';

// Add global connection pool caching to persist across hot-reloads
declare global {
  var _postgresPool: Pool | undefined;
  var _drizzleDb: any | undefined;
}

export const isSqlConfigured = (): boolean => {
  return Boolean(process.env.SQL_HOST && process.env.SQL_DB_NAME);
};

// Function to create or retrieve the connection pool safely.
export const createPool = (): Pool | null => {
  if (!isSqlConfigured()) {
    return null;
  }

  if (!global._postgresPool) {
    try {
      global._postgresPool = new Pool({
        host: process.env.SQL_HOST,
        user: process.env.SQL_USER || process.env.SQL_ADMIN_USER,
        password: process.env.SQL_PASSWORD || process.env.SQL_ADMIN_PASSWORD,
        database: process.env.SQL_DB_NAME,
        max: 10,
        connectionTimeoutMillis: 15000,
      });

      // Prevent unhandled pool-level errors from crashing the application
      global._postgresPool.on('error', (err) => {
        console.warn('SQL pool connection warning:', err?.message || err);
      });
    } catch (err) {
      console.warn('Could not initialize SQL connection pool:', err);
      return null;
    }
  }
  return global._postgresPool;
};

// Lazy getter for Drizzle DB instance
export const getDb = () => {
  if (global._drizzleDb) return global._drizzleDb;

  const pool = createPool();
  if (pool) {
    global._drizzleDb = drizzle(pool, { schema });
    return global._drizzleDb;
  }
  return null;
};

// Mock fallback for offline or unconfigured database
const noOp = {
  findMany: async () => [],
  findFirst: async () => null,
  findUnique: async () => null,
  create: async (d: any) => d?.data ?? {},
  update: async (d: any) => d?.data ?? {},
  delete: async () => ({}),
  values: (d: any) => ({
    returning: async () => (Array.isArray(d) ? d : [d]),
    onConflictDoUpdate: () => ({ returning: async () => (Array.isArray(d) ? d : [d]) }),
  }),
  set: (d: any) => ({
    where: () => ({ returning: async () => (Array.isArray(d) ? d : [d]) }),
  }),
  where: () => ({ returning: async () => [] }),
  from: () => ({
    orderBy: async () => [],
    where: async () => [],
  }),
  returning: async () => [],
};

const mockDb: any = new Proxy({}, {
  get: (_target, prop) => {
    if (prop === 'query') {
      return new Proxy({}, { get: () => noOp });
    }
    if (prop === 'insert' || prop === 'update' || prop === 'delete') {
      return () => noOp;
    }
    if (prop === 'select') {
      return () => noOp;
    }
    return async () => [];
  },
});

// Proxy export for backward compatibility so imports never throw on load
export const db = new Proxy({} as any, {
  get(_target, prop) {
    const instance = getDb();
    if (!instance) {
      console.warn('[AI Studio] Database not connected — using mock');
      return mockDb[prop];
    }
    return instance[prop];
  }
});
