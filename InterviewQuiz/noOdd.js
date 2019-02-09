function noOdds( values ){
  // Return all non-odd values
  let array = Array.from(values);
  return values.filter(x => x % 2 == 0);
}
console.log(noOdds([3,4,2,6,9]));
