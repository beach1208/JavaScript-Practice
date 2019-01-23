// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    return str.split(' ').map(word => {
        return word.split('').reverse().join('');
    }).join(" ");
}

console.log(reverseWords("double  spaces" ));
