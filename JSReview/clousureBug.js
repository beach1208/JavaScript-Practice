function makeFunctionArray() {
    const arr = [];
    for (let i = 0; i < 5; i++) {
        arr.push(function () {
            console.log(i)
        });
    }
    return arr;
}

// makeFunctionArray()[0]()

// function makeFunctionArray() {
//     const arr = [];
//     for (var i = 0; i < 5; i++) {
//         arr.push(function (x) {
//             return function(){console.log(i)}(i);
//         }

//     }
//     return arr;
// }