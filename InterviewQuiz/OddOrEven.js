function oddOrEven(array) {
   return array.reduce((x,y) => x + y,0)% 2 == 0 ? "even" : "odd";
}

console.log(oddOrEven([2, 5, 34, 6]));

//reduce challenge
let data = [
  {
    country: 'China',
    pop: 1409517397,
  },
  {
    country: 'India',
    pop: 1339180127,
  },
  {
    country: 'USA',
    pop: 324459463,
  },
  {
    country: 'Indonesia',
    pop: 263991379,
  }
]


let sum = data.reduce((acc,val) => {
    return val.country == 'China' ? acc : acc + val.pop;
},0);
console.log(sum);
