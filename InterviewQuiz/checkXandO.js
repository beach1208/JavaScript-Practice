//my solution
function xo(str){
let x = (str.match(/[xX]/g) || []).length;
let o = (str.match(/[oO]/g) || []).length;
return x == 0 && o == 0 || x == o ? true: false;
}

console.log(xo("xxOo"));

//shorter solution
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}