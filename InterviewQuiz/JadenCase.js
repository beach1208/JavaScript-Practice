function jadenCase(str){
    let word = str.split(" ");
    const result = word.map(x => {
        return x.charAt(0).toUpperCase().concat(x.substr(1,));
    })
    return result.join(" ");
}

console.log(jadenCase("How can mirrors be real if our eyes aren't real"));
