const number = parseInt(process.argv[2]);

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

if (number >= 1 && number <= 7) {
  const weekday = weekdays[number - 1];
  console.log(`The weekday is: ${weekday}`);
} else {
  console.log("Invalid number");
}
