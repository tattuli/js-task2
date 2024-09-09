// --1--
const str = "LEvel";
const strLower = str.toLowerCase();

// let rev = strLower.split("").reverse().join("");
// console.log(strLower === rev ? "The input is palindrome" : "Not a palindrome");

let isPalindrome = true;
for (let i = 0; i < strLower.length / 2; i++) {
  if (strLower[i] !== strLower[strLower.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}
console.log(isPalindrome ? "The input is a palindrome" : "Not a palindrome");

//  --2--
const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
fruits.splice(1, 2);
console.log(fruits);

// --3--
const fruits2 = ["Banana", "Orange", "Apple", "Kiwi"];
fruits2.sort();
console.log(fruits2);

// --4--
// -4.1-
const calcAverage = (a, b, c) => (a + b + c) / 3;

// -4.2-
// TEST DATA 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

// -4.3-
const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
};

checkWinner(scoreDolphins, scoreKoalas);

// TEST DATA 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas);
