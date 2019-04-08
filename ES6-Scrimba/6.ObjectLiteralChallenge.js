// function addressMaker(address) {
//     const newAddress = {
//         city: address.city,
//         state: address.state,
//         country: 'United States'
//     };
    
// }

// addressMaker({city: 'Austin', state: 'Texas'});

function addressMaker(address) {
    const {city,state} = address;
    const newAddress = {
        city,
        state,
        country: 'United States'
    };
    console.log(`${newAddress.city},${newAddress.state},${newAddress.country}`)
}

addressMaker({city: 'Austin', state: 'Texas'});