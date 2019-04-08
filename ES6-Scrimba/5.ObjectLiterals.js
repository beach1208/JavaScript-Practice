// function myCity(city,state){
//     const newCity = {city: city, state: state};
//     console.log(newCity);
// }

// myCity("fukuoka","Fukuoka");

// newCity = {city,state} same result
// function will guess parameter as a object
function myCity(city,state){
    const newCity = {city,state};
    console.log(newCity);
}

myCity("fukuoka","Fukuoka");