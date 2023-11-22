// Create a function using the "function" keyword that takes a String as an argument & returns the number of vowel in the string.

function countVowel(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if ((str[i]) === ("a" || "e" || "i" || "o" || "u")) {
      count++;
    }
  }
  console.log(count);
}
countVowel("Nandani");
/////////////////////////////////////////////////
// Create an arrow function toperform the same task
