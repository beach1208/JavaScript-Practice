function sumAll(arr) {
  const min = arr.reduce((a, b) => {
    return Math.min(a, b);
  });

  const max = arr.reduce((a, b) => {
    return Math.max(a, b);
  });

  let result = 0;
  for (let i = min + 1; i < max; i++) {
    result += i;
  }
  return result + min + max;
}

console.log(sumAll([1, 4]));
