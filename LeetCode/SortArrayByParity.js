//Store 905.Sort Array By Parity

//Input: [3,1,2,4] Output: [2,4,3,1]
//The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
var sortArrayByParity = function(A) {
  let even = [];
  let odd = [];
  for (let i = 0; i < A.length; i++) {
    A[i] % 2 == 0 ? even.push(A[i]) : odd.push(A[i]);
  }
  let result = even.concat(odd);
  return result;
};
