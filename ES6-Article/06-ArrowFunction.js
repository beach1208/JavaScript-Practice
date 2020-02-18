const names = ['Wes', 'Kait', 'Lux'];

// Arrow function
const fullNames2 = names.map((name) => {
 return `${name} Bos`;
});

console.log(fullNames2); // Wes Bos, Kait Bos, Lux Bos

const fullName3 = names.map(name => {
    return `${name} Bos`;
});

console.log(fullName3);

// So, if the only purpose of your arrow function is to return something, there is no need for the return keyword.
// Our three line function with an explicit return is now a single line function with an implicit return.

const fullNames4 = names.map(name => `${name} Bos`);

console.log(fullNames4);  // Wes Bos, Kait Bos, Lux Bos