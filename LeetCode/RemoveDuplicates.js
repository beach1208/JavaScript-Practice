function removeDuplicate(nums) {
  //   let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + 1]) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }
  return nums;
}

console.log(removeDuplicate([1, 1, 2]));
