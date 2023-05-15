// Generate a random number between 0 and 1
const randomNumber = Math.random();

// Round the random number to 0 or 1
const coinFlip = Math.round(randomNumber);

// Check the value of coinFlip and print "Heads" or "Tails"
if (coinFlip === 0) {
  console.log("Heads");
} else {
  console.log("Tails");
}
