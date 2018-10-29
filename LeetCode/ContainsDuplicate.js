//217 Contains Duplicate
let containsDuplicate = function(nums) {
  let sortArray = nums.sort((a, b) => {
    return a > b;
  });

  let emptyArray = [];
  for (let i = 0; i < sortArray.length; i++) {
    // if (sortArray[i] == sortArray[i + 1]) {
    //   return true;
    // }
    if (sortArray[0] == []) {
      return false;
    }
    return true;
  }
};

console.log(containsDuplicate([]));
