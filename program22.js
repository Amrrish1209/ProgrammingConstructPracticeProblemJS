function isPalindrome(num1, num2) {
  // Convert the numbers to strings to make them iterable
  let str1 = num1.toString();
  let str2 = num2.toString();

  // Reverse the second string
  let reversedStr2 = str2.split("").reverse().join("");

  // Compare the strings
  return str1 === reversedStr2;
}

console.log(isPalindrome(121, 121)); 
console.log(isPalindrome(123, 321)); 
