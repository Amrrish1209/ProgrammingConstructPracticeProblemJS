const start = parseInt(process.argv[2]);
const end = parseInt(process.argv[3]);

console.log(`Prime numbers between ${start} and ${end}:`);

for (let number = start; number <= end; number++) {
  let isPrime = true;

  if (number <= 1) {
    isPrime = false;
  } else {
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }
  }

  if (isPrime) {
    console.log(number);
  }
}
