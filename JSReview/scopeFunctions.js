wouldThisWork();
// console.log(hoistedWord); undefined
// lamdaFunc(); annoymou functions are not hoisted


function wouldThisWork() {
    console.log("functions are hoisted?");

}

var lamdaFunc = function () {
    console.log("is this gonna be hoisted")
};
var hoistedWord = "its hoisted";

lamdaFunc(); //works