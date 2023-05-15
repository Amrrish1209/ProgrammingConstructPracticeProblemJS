const a = parseInt(process.argv[2]);
const b = parseInt(process.argv[3]);
const c = parseInt(process.argv[4]);

const operation1 = a + b * c;
const operation2 = (a % b) + c;
const operation3 = c + a / b;
const operation4 = a * b + c;

const maxResult = Math.max(operation1, operation2, operation3, operation4);
const minResult = Math.min(operation1, operation2, operation3, operation4);

console.log("Maximum result:", maxResult);
console.log("Minimum result:", minResult);
