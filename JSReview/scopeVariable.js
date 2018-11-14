//{} creates block scope
// var keyword lexically scoped, meaning it exists from time of 
//declaration to the end of function

// if (true) {
//     var lex = "This exiests until the end of the function";
// }
// console.log(lex);
// if (true) {
//     let blockScoped = "This exiests until the end of the function";
//     const alsoBlockScoped = "same as above"
// }
// console.log(lex); // const let are blocked scope


let a = 1;

function foo() {
    let a = 2;
    console.log(a);
}


function bar() {
    a = 3;
    console.log(a);
}

foo();
bar();
console.log(a);