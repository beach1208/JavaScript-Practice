// 1. Given an array of ints length 3, return an array with the elements "rotated left" so {1, 2, 3} yields {2, 3, 1}.

function rotateLeft3(arr) {
  var array1 = arr;
  var remove = array1.shift();
  var rotated = array1.push(remove);
  return array1;
}

console.log(rotateLeft3([1, 2, 3]));
console.log(rotateLeft3([5, 11, 9]));
console.log(rotateLeft3([7, 0, 0]));

// 2. Given an array of ints, return a new array with the elements in reverse order, so {1, 2, 3} becomes {3, 2, 1}.
function reverse3(arr) {
  return [arr[2],arr[1],arr[0]];
}

console.log(reverse3([1, 2, 3]))
console.log(reverse3([5, 11, 9]))
console.log(reverse3([7, 0, 0]))

// 3. Given an int array length 2, return true if it contains a 2 or a 3.

function has23(arr) {
  if (arr[0] === 2 || arr[1] === 2){
    return true;
  }
  else if (arr[0] === 3 || arr[1] === 3) {
    return true;
  }
  else {
    return false;
  }
}

console.log(has23([2, 5]));
console.log(has23([4, 3]));
console.log(has23([4, 5]));


// 4. Given an int array length 3, if there is a 2 in the array immediately followed by a 3, set the 3 element to 0. Return the changed array.
function fix23(arr) {
  if (arr[1] === 3) {
    arr[1] = 0;
    return arr;
  }
   else if (arr[2] === 3){
     arr[2] = 0;
     return arr;
   }
   else {
     return arr;
   }
}
console.log(fix23([1, 2, 3]));  //[1, 2, 0]
console.log(fix23([2, 3, 5]));  //[2, 0, 5]
console.log(fix23([1, 2, 1]));  //[1, 2, 1]

// 5. Given an array of ints of odd length, look at the first, last, and middle values in the array and return the largest. The array length will be a least 1.
function maxTriple(arr) {
  var largestnum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > largestnum){
      largestnum = arr[i];
    }
  }
  return largestnum;
}
console.log(maxTriple([1, 2, 3]));
console.log(maxTriple([1, 5, 3]));
console.log(maxTriple([5, 2, 3]));

// 6. Given an array of ints, swap the first and last elements in the array. Return the modified array. The array length will be at least 1.
function swapEnds(arr) {
  var first = arr[0];
  var last = arr[arr.length-1];
  arr[0] = last;
  arr[arr.length-1] = first;
  return arr;
}

console.log(swapEnds([1, 2, 3, 4]));
console.log(swapEnds([1, 2, 3]));
console.log(swapEnds([8, 6, 7, 9, 5]));


//復習 7. We'll say that a 1 immediately followed by a 3 in an array is an "unlucky" 1. Return true if the given array contains an unlucky 1 in the first 2 or last 2 positions in the array.

function unlucky1(arr) {
  if (arr[0] == 1 && arr[1] == 3) {
    return true;
  }
  else if (arr.length >= 3 && arr[1] == 1 && arr[2] == 3){
    return true;
  }
  else if (arr[arr.length-2] == 1 && arr[arr.length-1] == 3){

  }
return false;
}
   console.log(unlucky1([1, 3, 4, 5]));  // true
console.log(unlucky1([2, 1, 3, 4, 5])); //true
console.log(unlucky1([1, 1, 1]));  //false


//復習 Question 8

function front11(arr1,arr2){
  var list = [];
  if (arr1.length == arr2.length) {
    var array1 = arr1.shift();
    var array2 = arr2.shift();
    list.push(array1,array2);
    return list;
  }
  else if (arr1.length == 0) {
    list.push(arr2[0])
    return list;
  }
  else if (arr2.length == 0) {
    list.push(arr1[0])
    return list;
  }

}
console.log(front11([1, 2, 3], [7, 9, 8])); //→ [1, 7]
console.log(front11([1], [2])); // → [1, 2]
console.log(front11([1, 7], [])); //→ [1]

// 別バージョン
function front11(arr1, arr2) {
	// [], []
	if (arr1.length == 0 && arr2.length == 0) {
		return [];
	}
	// [x, x, ...], []
	else if (arr1.length > 0 && arr2.length == 0) {
		return [arr1[0]];
	}
	// [], [x, x, ...]
	else if (arr1.length == 0 && arr2.length > 0) {
		return [arr2[0]];
	}
	// [x, x, ...], [x, x, ...]
	else if (arr1.length > 0 && arr2.length > 0) {
		return [arr1[0], arr2[0]];
	}
}


// 9. We'll say that a value is "everywhere" in an array if for every pair of adjacent elements in the array, at least one of the pair is that value. Return true if the given value is everywhere in the array.

//復習 ======

function isEverywhere(arr,value) {
  for (var i = 0; i < arr.length-1; i++){
    if(arr[i] != value && arr[i + 1] != value) {
      return false;
    }
    else {

    }
  }
return true;
}

console.log(isEverywhere([1, 2, 1, 3], 1));
console.log(isEverywhere([1, 2, 1, 3], 2));
console.log(isEverywhere([1, 2, 1, 3, 4], 1));


//復習 10. For each multiple of 10 in the given array, change all the values following it to be that multiple of 10, until encountering another multiple of 10. So {2, 10, 3, 4, 20, 5} yields {2, 10, 10, 10, 20, 20}.   
function tenRun(arr){
  var mult10 = 2;
  for(var i = 0; i < arr.length; i++){
    if(arr[i] % 10 == 0){
      mult10 = arr[i];
    }
    else if (arr[i] % 10 !== 0){
      arr[i] = mult10;
    }
  }
  return arr;
}

console.log(tenRun([2, 10, 3, 4, 20, 5])); //→ [2, 10, 10, 10, 20, 20] 
console.log(tenRun([10, 1, 20, 2]));//→ [10, 10, 20, 20] 
console.log(tenRun([10, 1, 9, 20])); //→ [10, 10, 10, 20]

// 復習　11. Given an array of ints, return true if every 2 that appears in the array is next to another 2.

function twoTwo(arr) {
	if (arr.length == 1 && arr[0] == 2) {
		return false;
	}
	// edge case [2, x, ...]
	if (arr.length > 1 && (arr[0] == 2 && arr[1] != 2)){
		return false;
	}
	// [x!=2, 2, y!=2]
	for(var i = 1; i < arr.length - 1; i++) {
		if (arr[i] == 2 && arr[i+1] != 2 && arr[i-1] != 2) {
			return false;
		}
	}
	return true;
}
console.log(twoTwo([4, 2, 2, 3]));//→ true
console.log(twoTwo([2, 2, 4])); //→ true
console.log(twoTwo([2, 2, 4, 2]));//→ false



// 12. Return an array that is "left shifted" by one -- so {6, 2, 5, 3} returns {2, 5, 3, 6}. You may modify and return the given array, or return a new array.
function shiftLeft (arr){
  var popped = arr.shift();
  var added = arr.push(popped);
  return arr;
}

console.log(shiftLeft([6, 2, 5, 3])); //→ [2, 5, 3, 6]
console.log(shiftLeft([1, 2])); //→ [2, 1]
console.log(shiftLeft([1])); //→ [1]

// 復習　13
function evenOdd(num) {
  var listeven=[];
  var listodd=[];

  for(var i = 0; i < num.length; i++){
    if (num[i] % 2 == 0){
      listeven.push(num[i]);
    }
    else if (num[i] % 2 !== 0) {
    listodd.push(num[i]);
  }
}
return listeven.concat(listodd);
}

console.log(evenOdd([1, 0, 1, 0, 0, 1, 1])); //→ [0, 0, 0, 1, 1, 1, 1]
console.log(evenOdd([3, 3, 2])); //→ [2, 3, 3]
console.log(evenOdd([2, 2, 2])); //→ [2, 2, 2]


//復習　14.
function fizzBuzz(num1,num2) {
  var array1 = [];
  for(var i = num1; i < num2; i++) {
    array1.push(i);
  }

  var mul3 = "Fizz";
  var mul5 = "Buzz";
  var mul15 = "Fizz Buzz";
  for (var i = 0; i < array1.length; i++) {
    if(array1[i] % 3 == 0 && array1[i] % 5 == 0) {
        array1[i] = mul15;
    }
    else if (array1[i] % 5 == 0) {
      array1[i] = mul5;
    }
    else if (array1[i] % 3 == 0){
      array1[i] = mul3;
    }
  }
  return array1;
}

console.log(fizzBuzz(1,6)); //→ ["1", "2", "Fizz", "4", "Buzz"]
console.log(fizzBuzz(1,8)); //→ ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7"]
console.log(fizzBuzz(1,11)); //→ ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz"]

// 復習　15.

function countClumps(arr) {
  var count = 0;
	for(var i = 0; i < arr.length; i++) {
		if (arr[i] == arr[i + 1]) {
      count++;
		}
	}
	return count;
}

console.log(countClumps([1, 2, 2, 3, 4, 4])); //→ 2
console.log(countClumps([1, 1, 2, 1, 1])); //→ 2
console.log(countClumps([1, 1, 1, 1, 1])); //→ 1

// 答え
function countClumps(arr) {
	// [1, 2, 2, 3, 4, 4] -> 2
	// [1, 1, 2, 1, 1] -> 2
	// [1, 1, 1, 1, 1] -> 1
	var count = 0;
	var isClump = false;

	for(var i = 0; i < arr.length - 1; i++){
		if (isClump) {
			if (arr[i] != arr[i+1]) {
				isClump = false;
			}
		} else if (arr[i] == arr[i+1]) {
			isClump = true;
			count++;
		}
	}
	return count;
}
