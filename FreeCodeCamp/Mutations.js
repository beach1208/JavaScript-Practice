function mutation(arr) {
  let firstArray = arr[0].toLowerCase();
  let secondArray = arr[1].toLowerCase();

  return [...secondArray].every(letter => firstArray.includes(letter));
}

console.log(mutation(["Alien", "line"]));
