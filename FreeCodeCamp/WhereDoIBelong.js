function getIndexToIns(arr, num) {
  // Find my place in this sorted array.

  arr.push(num);
  const sortArray = arr.sort((a, b) => {
    return a - b;
  });
  return sortArray.indexOf(num);
}

console.log(getIndexToIns([40, 60], 50));
