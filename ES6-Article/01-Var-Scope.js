// Firstly, var variables can be redefined or updated. Let's use console.log to show the width which we can update the width to be 200, and then we'll console log the width again.
var width = 100;
console.log(width);
width = 200;
console.log(width);

function setWidth(){
    var width = 100;
    console.log(width);
}
setWidth();
// width = 100

function setWidth() {
  var width = 100;
  console.log(width);
}
setWidth();
console.log(width); // error, width is not defined

// 

var age = 100;
if (age > 12) {
    var dogYears = age * 7;
    console.log(`You are ${dogYears} dog years old!`)
}

console.log(dogYears);
//  var = global scope variable
// let dogYears = error