//Higher order functions take functions as arguments
//or return functions


//map

function map(arr, fn) {
    const result = [];
    arr.forEach(function (val) {
        result.push(fn(val));
    });
    return result;
}

const doubled = map([1, 2, 3], function (a) {
    return a * 2
});
console.log(doubled);

// => [2,4,6]

//filter

function filter(arr, fn) {
    const filterResult = [];
    arr.forEach(function (val) {
        if (fn(val)) filterResult.push(val)
        // for(let i = 0; i < arr.length; i++){
        //     if(fn(arr[i])) filterResult.push(arr[i]))
        // }

    });
    return filterResult;
}

const even = filter([1, 2, 3, 4, 5], function (a) {
    return a % 2 == 0
});
console.log(even);

function reduce(arr, fn, initialVal) {
    let result = initialVal;
    arr.forEach(function (val) {
        result = fn(result, val);
    });
    return result;
}

function sum(a, b) {
    return a + b;
}

const sumArray = reduce([1, 2, 3, 4, 5], sum, 0);
console.log(sumArray);