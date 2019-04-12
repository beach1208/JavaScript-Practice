function ArraySum(arr) {
    let max = Math.max(...arr);
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] != max){
            sum+=arr[i];
        }
    }
    return sum == max ? true : false;
}

console.log(ArraySum([1,2,4,6,13]));
console.log(ArraySum([1,2,4,34,22]));