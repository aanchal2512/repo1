// a.js: a small sample script.
// Run with: node .github/a.js

function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("world"));
console.log(`Generated at ${new Date().toISOString()}`);

module.exports = { greet };
