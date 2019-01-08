function sumTwoSmallestNumbers(numbers) {  
  //Code here
  let sum = 0;
  let firstMin = Math.min(...numbers);
  sum += firstMin;
  let index = numbers.indexOf(firstMin);
  numbers.splice(index,1);
  let secondMin = Math.min(...numbers);
  sum += secondMin;
  return sum;
};

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));

//shorter answer
function sumTwoSmallestNumbers(numbers) {
    numbers = numbers.sort((a,b) => {
        return a - b;
    })
    return numbers[0] + numbers[1];
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));