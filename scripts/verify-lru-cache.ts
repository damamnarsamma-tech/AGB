import {
  resolvePageContext,
  pageContextCache,
  clearPageContextCache,
  getPageContextCacheSize,
  getPageContextCacheStats,
  LRUCache
} from '../lib/universal-engine';

console.log('=== VERIFYING LRU CACHE & DISTRICT PHYSICAL BRANCH HUBS ===\n');

// Test 1: LRUCache unit behavior
const testCache = new LRUCache<string, string>(3);
testCache.set('a', 'apple');
testCache.set('b', 'banana');
testCache.set('c', 'cherry');

console.log('TestCache size (should be 3):', testCache.size);
// Access 'a' to make it most recently used
testCache.get('a');
// Insert 'd', which should evict 'b' (the least recently used)
testCache.set('d', 'durian');

if (!testCache.has('b') && testCache.has('a') && testCache.has('c') && testCache.has('d')) {
  console.log('✅ PASS: LRU Eviction correctly evicted "b" while preserving accessed "a"');
} else {
  console.error('❌ FAIL: LRU Eviction failed');
  process.exit(1);
}

// Test 2: resolvePageContext caching & Physical Branch Hub attachment
clearPageContextCache();

const vizagContext = resolvePageContext({ pathname: '/andhra-pradesh/visakhapatnam/gajuwaka' });
console.log('Visakhapatnam Gajuwaka District Branch:', vizagContext.physicalBranchHub?.name);
console.log('Visakhapatnam Address:', vizagContext.physicalBranchHub?.address);

if (vizagContext.physicalBranchHub?.district === 'Visakhapatnam') {
  console.log('✅ PASS: District Physical Branch Hub attached to location page context');
} else {
  console.error('❌ FAIL: Visakhapatnam physicalBranchHub missing or incorrect');
  process.exit(1);
}

const hydContext = resolvePageContext({ pathname: '/telangana/hyderabad/secunderabad' });
console.log('Hyderabad Secunderabad District Branch:', hydContext.physicalBranchHub?.name);

if (hydContext.physicalBranchHub?.district === 'Hyderabad') {
  console.log('✅ PASS: Hyderabad District Physical Branch Hub attached');
} else {
  console.error('❌ FAIL: Hyderabad physicalBranchHub missing');
  process.exit(1);
}

// Test 3: Cache hits and sub-millisecond retrieval
const warmStart = performance.now();
const warmVizag = resolvePageContext({ pathname: '/andhra-pradesh/visakhapatnam/gajuwaka' });
const warmEnd = performance.now();

console.log(`Cached lookup time: ${(warmEnd - warmStart).toFixed(3)} ms`);
console.log('Cache stats:', getPageContextCacheStats());

if (warmVizag === vizagContext) {
  console.log('✅ PASS: Cache hit returned exact reference with 0 recalculation');
} else {
  console.error('❌ FAIL: Cache hit did not return exact reference');
  process.exit(1);
}

console.log('\n=== ALL LRU CACHE & BRANCH HUB TESTS PASSED ===');
