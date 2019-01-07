function filter_list(arr) {
  const result = arr.filter(x => {
      return Number.isInteger(x);
  })
  return result;
}
console.log(filter_list([1,2,'a','b']));


//shorter answer
function filter_list(l) {
  return l.filter(function(v) {return typeof v == 'number'})
}