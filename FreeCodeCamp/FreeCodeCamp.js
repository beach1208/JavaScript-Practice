// The sort method sorts the elements of an array according to the callback function.

// For example:

// function ascendingOrder(arr) {
//   return arr.sort(function(a, b) {
//     return a - b;
//   });
// }
// ascendingOrder([1, 5, 2, 3, 4]);
// // Returns [1, 2, 3, 4, 5]

// function reverseAlpha(arr) {
//   return arr.sort(function(a, b) {
//     return a < b;
//   });
// }
// reverseAlpha(['l', 'h', 'z', 'b', 's']);
// Returns ['z', 's', 'l', 'h', 'b']

function alphabeticalOrder(arr) {
  // Add your code below this line

  return arr.sort((a, b) => {
    return a > b;
  });
  // Add your code above this line
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

//Return a Sorted Array Without Changing the Original Array
//A side effect of the sort method is that it changes the order of the elements in the original array.
//In other words, it mutates the array in place.
//One way to avoid this is to first concatenate an empty array to the one being sorted (remember that concat returns a new array), then run the sort method.
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line
  let newArray = [];
  let sortArray = newArray.concat(arr);
  const result = sortArray.sort((a, b) => {
    return a - b;
  });

  return result;
  // Add your code above this line
}
nonMutatingSort(globalArray);
