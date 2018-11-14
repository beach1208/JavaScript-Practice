function printOne() {
    console.log("one");
    throw new Error("oh no There is an error");

}

function printTwo() {
    console.log("two");

}

function printThree() {
    console.log("three");

}

setTimeout(printOne, 1000);
setTimeout(printTwo, 0);
printThree();