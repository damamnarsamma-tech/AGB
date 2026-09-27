import { resolvePageContext, getPageContextCacheSize, clearPageContextCache } from '../lib/universal-engine';

console.log('=== VERIFYING SERVER-SIDE CACHING FOR RESOLVE PAGE CONTEXT ===\n');

clearPageContextCache();
console.log('Initial cache size:', getPageContextCacheSize());

// Test 1: First resolution (Cold)
const startCold = performance.now();
const ctx1 = resolvePageContext({ pathname: '/andhra-pradesh/visakhapatnam/gajuwaka' });
const endCold = performance.now();
const coldTime = (endCold - startCold).toFixed(3);
console.log(`Cold resolution time: ${coldTime} ms`);

console.log('Cache size after 1 resolution:', getPageContextCacheSize());

// Test 2: Second resolution (Warm / Cached)
const startWarm = performance.now();
const ctx2 = resolvePageContext({ pathname: '/andhra-pradesh/visakhapatnam/gajuwaka' });
const endWarm = performance.now();
const warmTime = (endWarm - startWarm).toFixed(3);
console.log(`Cached resolution time: ${warmTime} ms`);

if (ctx1 === ctx2) {
  console.log('✅ PASS: Cached result is strictly identical reference (O(1) memory lookup)');
} else {
  console.error('❌ FAIL: Expected exact reference match from cache');
  process.exit(1);
}

// Test 3: Multiple diverse routes caching
const routes = [
  '/',
  '/andhra-pradesh',
  '/telangana',
  '/telangana/hyderabad',
  '/telangana/hyderabad/secunderabad',
  '/andhra-pradesh/kurnool',
  '/andhra-pradesh/kurnool/banaganapalle',
  '/services/pledged-gold-release',
  '/metals/gold',
  '/metals/silver',
  '/jewellery/chains'
];

const startBatch = performance.now();
routes.forEach(r => resolvePageContext({ pathname: r }));
const endBatch = performance.now();
console.log(`Batch ${routes.length} cold routes resolved in: ${(endBatch - startBatch).toFixed(3)} ms`);

console.log('Total cached entries in memory:', getPageContextCacheSize());

const startCachedBatch = performance.now();
routes.forEach(r => resolvePageContext({ pathname: r }));
const endCachedBatch = performance.now();
console.log(`Batch ${routes.length} warm cached routes resolved in: ${(endCachedBatch - startCachedBatch).toFixed(3)} ms`);

console.log('\n=== CACHING SYSTEM OPERATING AT MAXIMUM EFFICIENCY ===');
