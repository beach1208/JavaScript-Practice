// Arrow Function Implicit Return an Object Literal
const race = '100m Dash';
const winners = ['Hunter Gath', 'Singa Song', 'Imda Bos'];

const win = winners.map((winner,i) => ({name: winner, race: race, place: i}));
console.table(win);

// Arrow Function Filtering Example
const ages = [23, 62, 45, 234, 2, 62, 234, 62, 34];
const old = ages.filter(age => age >= 60);

console.log(old);