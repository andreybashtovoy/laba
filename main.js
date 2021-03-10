const {min, summ, abs} = require('math');

const arr = [45, 23, -32, -123, 3424, -23, 23];

console.log(`Array: ${arr}`);
console.log(`Min: ${min(arr)}`);
console.log(`Summ: ${summ(arr)}`);
console.log(`Abs of all numbers: ${arr.map(abs)}`)