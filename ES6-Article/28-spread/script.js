const featured = ['Deep Dish', 'Pepperoni', 'Hawaiian'];
const specialty = ['Meatzza', 'Spicy Mama', 'Margherita'];
// const pizzas = featured.concat(specialty);

const pizzas = [...featured,'veg',...specialty];

///this is just referencing
const fridayPizzas = pizzas

//overwriting original array
fridayPizzas[0] = 'Canadian'

//To prevent it from overwriting
const feature = ['Deep Dish', 'Pepperoni', 'Hawaiian'];
const special = ['Meatzza', 'Spicy Mama', 'Margherita'];
const myPizzaz = [...feature,'veg',...special];

// What you can do is, you just take a brand new array and 
// then you spread every single item from mypizzas into this hot, 
// fresh new array:

/// copying into a variable and original array is not affected
const fridayMyPizzaz = [...myPizzaz];

fridayMyPizzaz[0] = 'Canadian';

console.log(fridayMyPizzaz);
console.log(myPizzaz);





console.log(fridayPizzas);
