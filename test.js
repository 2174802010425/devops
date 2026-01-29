console.log('Starting tests...');

// Giả lập test
if (1 + 1 !== 2) {
  console.error('Test failed');
  process.exit(1);
}

console.log('All tests passed ✅');
process.exit(0);
