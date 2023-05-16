let totalMoney = 100;
let goal = 200;
let bets = 0;
let wins = 0;

while (totalMoney > 0 && totalMoney < goal) {
  bets++;

  if (Math.random() < 0.5) {
    totalMoney++; // Win Rs 1
    wins++;
  } else {
    totalMoney--; // Lose Rs 1
  }
}

console.log("Game Over!");
console.log(`Total bets made: ${bets}`);
console.log(`Total wins: ${wins}`);
console.log(`Remaining money: Rs ${totalMoney}`);
