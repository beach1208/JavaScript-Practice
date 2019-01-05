function squareDigits(num) {
    const number = num.toString().split('').map(item => {
        return parseInt(item*item);
    });
    return Number(number.join(""));
}

console.log(squareDigits(9119));


//shorter answer
function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
  
}