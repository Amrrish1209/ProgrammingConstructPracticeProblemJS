const n = parseInt(process.argv[2]);

for (let i = 0; i <= n; i++) {
  const powerOf2 = Math.pow(2, i);
  console.log(`${powerOf2}`);
}
