//Comment
/*
 */

// Camel case is prefered
const firstName = "Derrick";

//Semi colons are optional.
//Single quote also creates strings
const lastName = 'Park';

//arrays can be decleared inline
//(multiple types can be possible)
const arr = ["strings",
    1,
    function () {
        console.log("Hello")
    }
]

arr[2](); //calling function

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}