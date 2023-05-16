let headsCount = 0;
let tailsCount = 0;

while (headsCount < 11 && tailsCount < 11) {
  const random = Math.random();

  if (random < 0.5) {
    headsCount++;
    console.log("Heads");
  } else {
    tailsCount++;
    console.log("Tails");
  }
}

console.log("Game Over!");

if (headsCount === 11) {
  console.log("Heads wins!");
} else {
  console.log("Tails wins!");
}
