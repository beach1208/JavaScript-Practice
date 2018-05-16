var num = 0;
while (num < 10) {
  console.log(num);
  num = num + 2;
}

// var x = 1;
//
// while (x <= 20) {
//     if (x % 3 === 0 && x % 5 ===0) {
//       console.log("JuliaJames");
//     }
//     else if (x % 5 === 0) {
//       console.log("James");
//     }
//     else if (x % 3 === 0);{
//       console.log("Julia");
//     }
//     else {
//       console.log(x);
//     }
//     x = x + 1;
//   }

  var x = 1;

  while (x <= 20) {
      if (x % 3 === 0 && x % 5 === 0)
          console.log("JuliaJames");
      else if (x % 3 === 0)
          console.log("Julia");
      else if (x % 5 === 0)
          console.log("James");
      else
          console.log(x);
      x++;
  }

// var num = 99;
//
// while(num > 0) {
// if (num === 1) {
//     console.log(num + " bottle of juice on the wall! " + num + " bottle of juice! Take one down, pass it around... " + (num - 1) + " bottles of juice on the wall!" );
// }
// else if (num === 2) {
//     console.log(num + " bottles of juice on the wall! " + num + " bottle of juice! Take one down, pass it around... " + (num - 1) + " bottle of juice on the wall!" );
// }
//
// else {
// // print lyrics using num
//     console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + (num - 1) + " bottles of juice on the wall!" );
// }
// // don't forget to check pluralization on the last line!
// num = num - 1;
// // decrement num
// }


var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var mostfre = 1;
var count = 0;

for (var i = 0; i < arr1.length; i++) {
  for (var j = i ; j < arr1.length; j++){
    if(arr1[j] === arr1[i]){
      count++;
    }
    if (count < mostfre) {
      mostfre = count;
    }
  }
  console.log(arr1[i] + mostfre + "times");
  // console.log("Frequent element" +  " " + element + " " + count + " " + "times");
}

var a =
[[1, 2, 1, 24],
[8, 11, 9, 4],
[7, 0, 7, 27],
[7, 4, 28, 14],
[3, 10, 26, 7]];


for (var i = 0; i < a.length; i++){
  var row = a.indexOf(a[i]);
  console.log("row" + row);
  for(var j = 0; j < a[i].length; j++){
    console.log(a[i][j]);
  }
}



var c =["Japan","United States","Canada","China","Canada","South America","Russia","China"];
var samelist = [];
for (var i = 0; i < c.length; i++) {
  if(samelist.includes(c[i]) == false) {
    samelist.push(c[i]);
  }

}
console.log(samelist);
