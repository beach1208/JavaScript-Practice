function translatePigLatin(str) {
  let vowels = ["a", "i", "u", "e", "o"];

  var reg = /^[aeiou]$/i;
  if (str[0].match(reg)) {
    return str + "way";
  } else {
    return str.slice(1) + str.slice(0, 1) + "ay";
  }
  return str;
}

console.log(translatePigLatin("consonant"));
