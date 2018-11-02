function diffArray(arr1, arr2) {
  let newArr = arr1.concat(arr2);
  const filterdArray = newArr.filter(item => {
    return !arr1.includes(item) || !arr2.includes(item);
  });
  return filterdArray;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
