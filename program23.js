function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function getPalindrome(num) {
  const strNum = num.toString();
  const reversedNum = strNum.split("").reverse().join("");
  return parseInt(reversedNum);
}

function checkPrimeAndPalindrome(num) {
  if (isPrime(num)) {
    const palindrome = getPalindrome(num);
    if (isPrime(palindrome)) {
      console.log(
        `${num} is a prime number, and its palindrome ${palindrome} is also prime.`
      );
    } else {
      console.log(
        `${num} is a prime number, but its palindrome ${palindrome} is not prime.`
      );
    }
  } else {
    console.log(`${num} is not a prime number.`);
  }
}

const userInput = parseInt(process.argv[2]);
checkPrimeAndPalindrome(userInput);
