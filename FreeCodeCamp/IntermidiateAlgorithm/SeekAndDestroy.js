function destroyer(arr) {
  const secondArg = Array.prototype.slice.call(arguments, 1);

  const newArray = arr.filter(item => {
    return !secondArg.includes(item);
  });

  return newArray;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
