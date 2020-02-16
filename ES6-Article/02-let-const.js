const key = 'abc123';
let points = 50;
let winner = false;

if (points > 40) {
   let winner = true
}

console.log(winner);

points = 60;
// key = 12;
// cannot update const variable
console.log(points);

const person = {
  name: 'Wes',
  age: 28
}

person.age = 29
console.log(person.age)

// if I try to update something in the const object by typing person = { name: 'Wesley' } it won't allow me to do that.

// However, the properties of a const variable can change. That's because the entire object is not immutable. It just can't be re-assigned entirely.

console.log(pizza);
var pizza = 'Deep Dish 🍕🍕🍕';
// undefined
// change to let pizza or const pizza then ERROR!