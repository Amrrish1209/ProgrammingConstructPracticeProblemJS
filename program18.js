const n = parseInt(process.argv[2]);
let power = 0;
let result = 1;

while (result <= 256 && power <= n) {
  console.log(`2^${power} = ${result}`);
  power++;
  result *= 2;
}
