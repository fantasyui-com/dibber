#!/usr/bin/env node

const assert = require('assert');
const program = require('./index.js');

const input = [
  [ 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0 ],
  [ 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0 ],
  [ 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0 ],
  [ 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0 ],
  [ 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0 ]
];

const actual = program(input);

const expected = [
  [ 0, 0, 0, 0, 0 ],
  [ 1, 1, 1, 0, 0 ],
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 1, 1, 1 ],
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0 ],
  [ 1, 1, 1, 0, 0 ],
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 1, 1, 1 ],
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0 ] ];

console.log('## Example\n\n')
console.log('```JavaScript\n\n//input')
console.info(input);
console.log('\n```\n')
console.log('```JavaScript\n\n//output')
console.info(actual);
console.log('\n```\n');

assert.deepEqual( actual , expected );
