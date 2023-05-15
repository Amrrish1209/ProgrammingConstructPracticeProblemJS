const year = parseInt(process.argv[2]);

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("The year is a Leap Year.");
} else {
  console.log("The year is not a Leap Year.");
}
