const number = parseInt(process.argv[2]);

console.log(`Prime factors of ${number}:`);

for (let i = 2; i <= number; i++) {
  while (number % i === 0) {
    console.log(i);
    number = number/i;
  }
}
