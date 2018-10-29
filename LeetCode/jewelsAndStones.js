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
