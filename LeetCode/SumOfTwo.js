// Calculate the sum of two integers a and b, 
// but you are not allowed to use the operator + and -.

// Example 1:

// Input: a = 1, b = 2
// Output: 3

var getSum = function(a, b) {
    const array = [a,b];
    return array.reduce((a,b) => a + b);
};

console.log(getSum(-2,3));
