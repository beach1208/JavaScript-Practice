
// 1. Write a JavaScript function to check whether an `input` is an array or not.
function is_array(arr) {
  if (Array.isArray(arr)) {
    return true;
  }
  else {
    return false;
  }
}

console.log(is_array('Vancouver'));
console.log(is_array([1, 2, 4, 0]));

// 2. Write a simple JavaScript program to join all elements of the following array into a string.
var myColor = ["Red", "Green", "White", "Black"];
var joined = myColor.join(",");
var joined2 = myColor.join(" + ");

console.log(joined);
console.log(joined2);


// 3. Write a JavaScript program to sort the items of an array.
var arr1 = [ 3, 8, 7, 6, 5, -4, -3, 2, 1 ];
var result = arr1.sort(function(a,b){return a-b});
console.log(result);


//  4. Write a JavaScript program to find the most frequent item of an array.
 // var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
 // var count = 0;
 // var mostfrequent = 0;
 // for (var i = 0; i < arr1.length; i++) {
 //   for (var j = 0, j < arr1.length; j++) {
 //     if (arr1[i] == arr1[j])
 //     count++;
 //     if (mostfrequent > )
 //
 //   }
 //   }
 // }
 // console.log("a " + count + " times")
// Sample Output : a ( 5 times )

// 5. Write a JavaScript program which prints the elements of the following array.
// Note : Use nested for loops.
var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
for (var i = 0; i < a.length; i++){
  var row = a.indexOf(a[i]);
  console.log("row" + row);
  for(var j = 0; j < a[i].length; j++){
    console.log(a[i][j]);
  }
}

// 6. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
var countries =["Japan","United States","Canada","China","Canada","South America","Russia","China"];
var removesame = Array.from(new Set(countries));

console.log(removesame);

// 7. There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays.
function sumTwo(a,b) {
  result = [];
  for (var i = 0; i < Math.min(a.length, b.length); i++) {
    var sum = a[i] + b[i];
    result.push(sum)
  }
  if (a.length == b.length) {
    return result;
  } else if (a.length < b.length) {
    for (var j = result.length; j < b.length; j++) {
      result.push(b[j])
    }
    return result

  } else if (b.length < a.length) {
    for (var j = result.length; j < a.length; j++) {
      result.push(a[j])
    }
    return result

  }

}

//Sample array :
var array1 = [1,0,2,3,4];
var array2 = [3,5,6,7,8,13];
//Expected Output :
//[4, 5, 8, 10, 12, 13]
console.log(sumTwo(array1,array2))

// 8. Write a JavaScript program to find duplicate values in a JavaScript array.

var arr = [9, 9, 111, 2, 3, 4, 4, 5, 7];
var sorted_arr = arr.sort();
var results = [];
for (var i = 0; i < arr.length - 1; i++) {
    if (sorted_arr[i + 1] == sorted_arr[i]) {
        results.push(sorted_arr[i]);
    }
}

console.log(results);

// 9. Write a JavaScript function to merge two arrays and removes all duplicates elements.
function merge_array(array1,array2) {
  var merged = array1.concat(array2);
  var result = Array.from(new Set(merged));
  return result;
}

var array1 = [1, 2, 3];
var array2 = [2, 30, 1];
console.log(merge_array(array1, array2));
[3, 2, 30, 1]

// 10. Write a JavaScript function to get a random item from an array.
function random_item(items) {
  var randomitem = randomitem[Math.floor(Math.random() * randomitem.length)];
  return randomitem;
}

console.log(random_item(items));
