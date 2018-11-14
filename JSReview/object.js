const o = new Object(); //empty object adding key value pairs 
//{fistname: "",lastName:"",isTeaching false, function()...}
o.firstName = "Nagisa"; // o[fistName] = "Nagisa" same
o.lastName = "Kojima";
o.isTeaching = false;
o.greet = function () {
    console.log("helllllo")
}
//Javascript obj to JSON String
console.log(JSON.stringify(o));

const o2 = {
    fistName: "Derrick",
    lastName: "Park",
    greet: function () {
        console.log("helllllo")
    },
    address: {
        street: "68 Smith st",
        number: "123"
    }
}