function makeArrayConsecutive2(statues) {
  let sortArray = statues.sort(function(a, b) {
    return a - b;
  });

  let count = 0;
  for (let i = 0; i < sortArray.length - 1; i++) {
    count += sortArray[i + 1] - sortArray[i] - 1;
  }

  return count;
}
console.log(makeArrayConsecutive2([6, 2, 3, 8]));
