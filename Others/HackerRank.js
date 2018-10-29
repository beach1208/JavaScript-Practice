function sockMerchant(n, ar) {
  let array = ar.sort((a, b) => {
    return a - b;
  });

  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == array[i + 1]) {
      count++;
      i++;
    }
  }
  return count;
}
console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
