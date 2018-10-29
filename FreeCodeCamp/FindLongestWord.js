//Find the Longest Word in a String
function findLongestWordLength(str) {
  let string = str.split(" ");
  let longest = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i].length > longest) {
      longest = string[i].length;
    }
  }
  return longest;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

//ES6 way
function findLongestWordLength(str) {
  const arrLength = str.split(" ").map(s => s.length);
  return Math.max(...arrLength);
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);
