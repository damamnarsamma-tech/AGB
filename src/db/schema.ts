import { pgTable, serial, text, timestamp, uniqueIndex, varchar } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  uid: text('uid').notNull().unique(), // Firebase Auth UID
  email: text('email').notNull(),
  displayName: text('display_name'),
  role: text('role').$type<'admin' | 'user'>().default('user').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const enquiries = pgTable('enquiries', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull(),
  phone: varchar('phone', { length: 20 }).notNull(),
  status: text('status').$type<'pending' | 'contacted' | 'closed'>().default('pending').notNull(),
  message: text('message'),
  location: varchar('location', { length: 150 }),
  service: varchar('service', { length: 150 }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const whatsappTemplates = pgTable('whatsapp_templates', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 120 }).notNull(),
  stage: text('stage').$type<'Appointment' | 'Pledged Gold' | 'XRF Testing' | 'Final Offer' | 'Payout' | 'General'>().notNull(),
  content: text('content').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Relationships (optional but good practice)
export const usersRelations = relations(users, ({ many }) => ({
  enquiries: many(enquiries), // if we wanted to link them, though enquiries are often anonymous
}));
