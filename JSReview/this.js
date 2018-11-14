//this
// - Refers to an object that's set at the creation of a new instance

console.log(this); //global object

function what() {
    console.log(this); //global object
}
what();

const person = {
    name: 'Derrick',
    greet: function () {
        console.log('Hi, ' + this.name);

    }
}

console.log(person);

person.greet();

const friend = {
    name: "Giada"
}

friend.greet = person.greet
friend.greet()

const yuka = person.greet;
yuka();

const yuka2 = person.greet.bind(person) //無理やりperson objectを渡してる
yuka2();

person.greet.call({
    name: "Kenta"
});
person.greet.apply({
    name: "Minami"
});

person.greet();


/////
this.name = "Giada";
const person2 = {
    name: 'Derrick',
    //arrow function binds 'this' lexically
    greet: () => {
        console.log('Hi, ' + this.name);

    }
}

person2.greet();