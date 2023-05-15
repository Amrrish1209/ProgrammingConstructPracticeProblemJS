const number = parseInt(process.argv[2]);

const words = [
  "Zero",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
];

if (number >= 0 && number <= 9) {
  console.log(`The number in words is: ${words[number]}`);
} else {
  console.log("Invalid number");
}
