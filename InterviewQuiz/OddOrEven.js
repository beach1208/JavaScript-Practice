function oddOrEven(array) {
   return array.reduce((x,y) => x + y,0)% 2 == 0 ? "even" : "odd";
}

console.log(oddOrEven([2, 5, 34, 6]));
