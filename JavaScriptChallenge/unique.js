function unique(str){
    // object way
    let values = {};
    for(let letter of str){
     if(values[letter]){
         return false;
     }
     values[letter] = "exists";
    }
    return true;

}

console.log(unique("abcde"));
//true if all letters are unique

console.log(unique("abacdefb"));
//false 