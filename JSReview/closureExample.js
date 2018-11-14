function makeHelloFunction() {
    var message = "Hello";


    function sayHello() {
        console.log(message);

    }
    return sayHello;
}

//the variable called message is not in grobal scope here === undefined
console.log("type of message", typeof meesage);

const greet = makeHelloFunction();
greet();

//because of the closure, sayHello still has access to the variables 
//within scope