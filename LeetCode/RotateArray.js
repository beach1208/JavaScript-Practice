function rotateArray(nums, k) {
  nums.unshift(...nums.splice(nums.length - k, k));
}
console.log(rotateArray([-1, -100, 3, 99], 2));
