//Convert Celsius to Fahrenheit
function convertToF(celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}

convertToF(30);

//Factorialize a Number
function factorialize(num) {
  if (num == 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}

factorialize(5);

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
