function FirstFactorial(num) {
  // code goes here
  if (num === 0) {
    return 1;
  } else {
    return num * FirstFactorial(num - 1);
  }
}

function FirstReverse(str) {
  // code goes here
  let result = str
    .split(" ")
    .reverse()
    .join("");
  return result;
}

// keep this function call here
FirstReverse(readline());

function SimpleAdding(num) {
  if (num < 0) {
    return -1;
  } else if (num === 0) {
    return 0;
  }
  // code goes here
  return num + SimpleAdding(num - 1);
}

// keep this function call here
SimpleAdding(readline());
