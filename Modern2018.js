//2.4 Variables
//To create A variable "named storade" for data, we need to use "let" keyword.
let message;
message = "Hello";
console.log(message);


// unchanging variable = const

const myBirthday = '18.94.1982';
// myBirthday = '01.01.2001'; ここで誕生日を変えて代入するとエラー
console.log(myBirthday);

//Uppercase constants
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
console.log(color); // #FF7F00


let admin;
let name = "John";
admin = name;
console.log(admin);

console.log('=========================================');

let name2 = "Ilya";

console.log( `hello ${1}` ); // ?

console.log( `hello ${"name2"}` ); // ?

console.log( `hello ${name2}` ); // ?

console.log('================== Loop =======================');
let i = 0;
while(i < 3){ // shows 0 1 2
	console.log(i);
	i++;
}

console.log('=========================================');
let x = 0;

for(x = 0; x < 3; x++){
	console.log(x);
}

console.log(x);



