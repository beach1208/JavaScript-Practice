//Immidiately involked function expression
//This iife creates the same function as clousureExample.js but
//doesnt pollute with a function called makeHelloFunction like previous example

let message = "Bye";
const sayHello = (function () {
    var message = "Hello";


    function sayHello() {
        console.log(message);

    }
    return sayHello;
})();
sayHello();

//IIFEs can also be used to create variables that are 
//inaccessable from the grobal scope

let Counter = (function () {
    let count = 0;

    return {
        increment: function () {
            count = count + 1
        },
        decremenet: function () {
            count = count - 1
        },
        getCounter: function () {
            console.log(count)
        },
    }
})()

Counter.increment();
Counter.increment();
Counter.increment();
Counter.decremenet();
Counter.getCounter();