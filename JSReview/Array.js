const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2,0,"Lemon","Kiwi");
// delete start position, how many elements should be removed
// [ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango' ]
// fruits.splice(2,2,"Lemon","Kiwi");
//[ 'Banana', 'Orange', 'Lemon', 'Kiwi' ]

const fruitsRemove = ["Banana", "Orange", "Apple", "Mango"];
fruitsRemove.splice(1,2);
// [ 'Banana', 'Mango' ]
console.log(fruits);

const maxNumber = [1,3,129,4,5,7,100];
console.log(Math.max(...maxNumber));

const numbers = [45, 4, 9, 16, 25];
numbers.forEach(number => {
    console.log(number);
})