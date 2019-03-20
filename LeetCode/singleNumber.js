var singleNumber = function(nums) {
  return nums.reduce((a, b) => a ^ b);
};
console.log(singleNumber([1,2,34,5]))