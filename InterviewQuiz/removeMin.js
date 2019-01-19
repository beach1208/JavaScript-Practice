function removeSmallest(numbers) {
    const small =  numbers.filter((n,i) => 
        i !== numbers.indexOf(Math.min(...numbers)));
        return small;
}
console.log(removeSmallest([3,1,3,4,5]));
