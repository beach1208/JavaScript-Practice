// 1. Write a JavaScript function to check whether an `input` is an array or not.
function is_array(arr) {
  if (Array.isArray(arr)) {
    return true;
  }
  return false;
}

console.log(is_array("w3resource"));
console.log(is_array([1, 2, 4, 0]));

// 2. Write a JavaScript function to clone an array.
function array_Clone(arr) {
  return arr.slice(0);
}
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

var myArr = ["Vancouver", "Calgary", "Toronto"];

console.log(myArr[0]);

// arr.push(item) - add the item at the end of the arr.
myArr.push("Edmonton");
console.log(myArr);

// arr.pop() - removes the last item from the arr.
myArr.pop();
console.log(myArr);

// arr.length - the number of elements in arr.
console.log("The length is " + myArr.length);

for (var i = 0; i < myArr.length; i++) {
  if (myArr[i] == "Vancouver") {
    console.log("Vancouver is at index: " + i);
  }
}

// arr.join(str) - joins all elements in the arr with str
var joined = myArr.join(", ");
console.log(joined);

// modifying elements in arr
myArr[0] = "New York";
console.log(myArr);

var cities = [
  "Vancouver",
  "New York",
  "Miami",
  "Brooklyn",
  "New Jersey",
  "Calgary",
  "Seoul",
  "Tokyo",
  "Los Angeles",
  "Sao Paulo",
  "Mexico City",
  "San Franscisco",
  "Seattle"
];
// how many cities with more than 7 characters?
// loop through the list
var count = 0;
var long_cities = [];
for (var i = 0; i < cities.length; i++) {
  if (cities[i].length > 7) {
    count++;
    long_cities.push(cities[i]);
  }
}
console.log(count);
console.log(long_cities);

// arr.shift() - shifts the arr left once
var randomArr = [1, 2, 3, 4, 5];
console.log("////////////////////////////////");
console.log(randomArr.shift()); // 1
console.log(randomArr.shift()); // 2
console.log(randomArr); // [3, 4, 5]

// arr.unshift(item) - adds the item from the left
randomArr.unshift(1);
console.log(randomArr);

// Delete elements
var fruits = ["Banana", "Orange"];
delete fruits[0];
fruits.shift();
console.log(fruits);

// Splice an array
// 1. remove and add: arr.splice(where, how_many_remove, what, what, ...);

var fruits = ["Banana", "Orange"];
fruits.splice(1, 1, "Kiwi");
console.log(fruits);

// 2. remove : arr.splice(1(from), 3(nums to remove));
var fruits = ["Banana", "Orange", "Orange", "Orange", "Orange"];
fruits.splice(1, 3);
console.log("SPLICED: " + fruits);

// .concat : combine multiple arrays
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
var arr3 = [1, 2, 3];

var combined = arr1.concat(arr2, arr3);
console.log(combined);

// .slice(): slices out a piece of an arr
var arr = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(arr.slice(1, 3));
console.log(arr.slice(1));

// (Optional)
var c = 0;
var lc = [];
cities.forEach(city => {
  if (city.length > 7) {
    c++;
    lc.push(city);
  }
});

var longCities = cities.filter(city => city.length > 7);
var cities_modified = cities.map(city => city + "!"); // city => city + city

var addTwo = (a, b) => a + b;
var reduced = cities.reduce(addTwo);
console.log(reduced);

// Modern JS (ECMAScript 5, 6)
// Higher-Order Functions(forEach, Map, filter...)
myArr.forEach(item => {
  if (item == "Vancouver") {
    console.log("Yeah!");
  }
});

// 1. Write a JavaScript function to check whether an `input` is an array or not.
function is_array(arr) {
  if (Array.isArray(arr)) {
    return true;
  } else {
    return false;
  }
}

console.log(is_array("Vancouver"));
console.log(is_array([1, 2, 4, 0]));

// 2. Write a simple JavaScript program to join all elements of the following array into a string.
var myColor = ["Red", "Green", "White", "Black"];
var joined = myColor.join(",");
var joined2 = myColor.join(" + ");

console.log(joined);
console.log(joined2);

// 3. Write a JavaScript program to sort the items of an array.
var arr1 = [3, 8, 7, 6, 5, -4, -3, 2, 1];
var result = arr1.sort(function(a, b) {
  return a - b;
});
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
var a = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7]
];
for (var i = 0; i < a.length; i++) {
  var row = a.indexOf(a[i]);
  console.log("row" + row);
  for (var j = 0; j < a[i].length; j++) {
    console.log(a[i][j]);
  }
}

// 6. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
var countries = [
  "Japan",
  "United States",
  "Canada",
  "China",
  "Canada",
  "South America",
  "Russia",
  "China"
];
var removesame = Array.from(new Set(countries));

console.log(removesame);

// 7. There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays.
function sumTwo(a, b) {
  result = [];
  for (var i = 0; i < Math.min(a.length, b.length); i++) {
    var sum = a[i] + b[i];
    result.push(sum);
  }
  if (a.length == b.length) {
    return result;
  } else if (a.length < b.length) {
    for (var j = result.length; j < b.length; j++) {
      result.push(b[j]);
    }
    return result;
  } else if (b.length < a.length) {
    for (var j = result.length; j < a.length; j++) {
      result.push(a[j]);
    }
    return result;
  }
}

//Sample array :
var array1 = [1, 0, 2, 3, 4];
var array2 = [3, 5, 6, 7, 8, 13];
//Expected Output :
//[4, 5, 8, 10, 12, 13]
console.log(sumTwo(array1, array2));

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
function merge_array(array1, array2) {
  var merged = array1.concat(array2);
  var result = Array.from(new Set(merged));
  return result;
}

var array1 = [1, 2, 3];
var array2 = [2, 30, 1];
console.log(merge_array(array1, array2));
[3, 2, 30, 1];

// 10. Write a JavaScript function to get a random item from an array.
function random_item(items) {
  var randomitem = randomitem[Math.floor(Math.random() * randomitem.length)];
  return randomitem;
}

console.log(random_item(items));
