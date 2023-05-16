// Read the number input
let number = parseInt(process.argv[2]);

let numbers;

switch (number) {
  case 1:
    numbers = "unit";
    break;
  case 10:
    numbers = "ten";
    break;
  case 100:
    numbers = "hundred";
    break;
  case 1000:
    numbers = "thousand";
    break;
  case 10000:
    numbers = "ten thousand";
    break;

  default:
    numbers = "invalid numbers";
    break;
}

console.log(numbers);
