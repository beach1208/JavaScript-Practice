function solution(nums){
    let result = nums == null ? [] : nums.sort((a,b) => a - b);
    return result;
}