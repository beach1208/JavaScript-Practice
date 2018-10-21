console.log("--------------- Function --------------------");

function sum(a,b){
	return a+b;
}

console.log(sum(3,7));

function reverse(x){
	x = x + "";
	return x.split("").reverse().join("");
}

console.log(reverse(32243));

//factorial numbers
function factorial(num){
	var result = 1;
	for (var i = 1; i <= num; i++) {
		result *= i;
	}
	return result;
}

console.log(factorial(5));

//factorial recursion
function factorialRecursion(num) {
	if (num < 1) {
		return 1;
	}else{
		return num * factorialRecursion(num-1);
	}
}
console.log(factorialRecursion(5));



//Repeat String
function repeatStr(str,num){
	var repeat = "";
	for (var i = 1; i <= num; i++) {
		repeat = repeat.concat(str);
	}

}
console.log(repeatStr("hi",5));


function repeatStr2(str,num){
	str.repeat(num);
	
}
console.log(repeatStr2("hi",5));