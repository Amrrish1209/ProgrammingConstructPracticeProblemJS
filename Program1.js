const randomValue1 = Math.floor(Math.random() * 900) + 100;
const randomValue2 = Math.floor(Math.random() * 900) + 100;
const randomValue3 = Math.floor(Math.random() * 900) + 100;
const randomValue4 = Math.floor(Math.random() * 900) + 100;
const randomValue5 = Math.floor(Math.random() * 900) + 100;

let minValue = randomValue1;
let maxValue = randomValue1;

if (randomValue2 < minValue) {
  minValue = randomValue2;
}
if (randomValue2 > maxValue) {
  maxValue = randomValue2;
}

if (randomValue3 < minValue) {
  minValue = randomValue3;
}
if (randomValue3 > maxValue) {
  maxValue = randomValue3;
}

if (randomValue4 < minValue) {
  minValue = randomValue4;
}
if (randomValue4 > maxValue) {
  maxValue = randomValue4;
}

if (randomValue5 < minValue) {
  minValue = randomValue5;
}
if (randomValue5 > maxValue) {
  maxValue = randomValue5;
}
console.log("Random Value 1:", randomValue1);
console.log("Random Value 2:", randomValue2);
console.log("Random Value 3:", randomValue3);
console.log("Random Value 4:", randomValue4);
console.log("Random Value 5:", randomValue5);
console.log("Minimum Value:", minValue);
console.log("Maximum Value:", maxValue);
