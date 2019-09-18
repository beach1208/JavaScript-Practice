//Higher order functions take functions as arguments
//or return functions

const animals = [
    { name: 'Caro', species: 'rabbit'},
    { name: 'John', species: 'dog'},
    { name: 'Mew', species: 'dog'},
    { name: 'Jimmy', species: 'cat'},
    { name: 'Harold', species: 'cat'},
    { name: 'Ursula', species: 'fish'},
]
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

const names = animals.map(animal => animal.name);
console.log(names);

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

const orders = [
    { amount: 250},
    { amount: 400},
    { amount: 100},
    { amount: 325},
]

const totalAmount = orders.reduce((sum,order) => {
    console.log("hello", sum, order);
    return sum + order.amount;
},0)

console.log(totalAmount);