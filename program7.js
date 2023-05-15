const number = parseInt(process.argv[2]);

const placeNames = [
  "unit",
  "ten",
  "hundred",
  "thousand",
  "ten thousand",
  "hundred thousand",
];

const length = number.toString().length;

if (length >= 1 && length <= placeNames.length) {
  const placeName = placeNames[length - 1];
  console.log(`The number is in the ${placeName}.`);
} else {
  console.log("Invalid number");
}
