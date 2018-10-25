//771 Jewels and Stones
// Input: J = "aA", S = "aAAbbbb"
// Output: 3
// My answer
var numJewelsInStones = function(J, S) {
  let count = 0;
  let temp = J.split("");
  let stemp = S.split("");
  for (let i = 0; i < stemp.length; i++) {
    for (let j = 0; j < temp.length; j++) {
      if (stemp[i] == temp[j]) {
        count++;
      }
    }
  }

  return count;
};

// ======= With Reduce function ======

var numJewelsInStones = function(J, S) {
  return S.split("").reduce(
    (count, stone) => (J.includes(stone) ? ++count : count),
    0
  );
};

//709 To Lower Case
var toLowerCase = function(str) {
  return str.toLowerCase();
};

//Store 905.Sort Array By Parity

//Input: [3,1,2,4] Output: [2,4,3,1]
//The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
var sortArrayByParity = function(A) {
  let even = [];
  let odd = [];
  for (let i = 0; i < A.length; i++) {
    A[i] % 2 == 0 ? even.push(A[i]) : odd.push(A[i]);
  }
  let result = even.concat(odd);
  return result;
};

//557.Reverse Words in a String III
//Example 1:
//Input: "Let's take LeetCode contest"
//Output: "s'teL ekat edoCteeL tsetnoc"
var reverseWords = function(s) {
  return s
    .split(" ")
    .map(word =>
      word
        .split("")
        .reverse()
        .join("")
    )
    .join(" ");
};

//344. Reverse String
var reverseString = function(s) {
  return s
    .split("")
    .reverse()
    .join("");
};

//412 Fizz Buzz
// Example:

// n = 15,

// Return:
// [
//     "1",
//     "2",
//     "Fizz",
//     "4",
//     "Buzz",
//     "Fizz",
//     "7",
//     "8",
//     "Fizz",
//     "Buzz",
//     "11",
//     "Fizz",
//     "13",
//     "14",
//     "FizzBuzz"
// ]
var fizzBuzz = function(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 == 0) {
      result.push("FizzBuzz");
    } else if (i % 3 == 0) {
      result.push("Fizz");
    } else if (i % 5 == 0) {
      result.push("Buzz");
    } else {
      result.push(String(i));
    }
  }

  return result;
};

//217 Contains Duplicate
let containsDuplicate = function(nums) {
  let sortArray = nums.sort((a, b) => {
    return a > b;
  });

  let emptyArray = [];
  for (let i = 0; i < sortArray.length; i++) {
    // if (sortArray[i] == sortArray[i + 1]) {
    //   return true;
    // }
    if (sortArray[0] == []) {
      return false;
    }
    return true;
  }
};

console.log(containsDuplicate([]));
