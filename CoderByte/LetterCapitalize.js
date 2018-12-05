function LetterCapitalize(str) {
  let string = str.toLowerCase().split(" ");
  for (let i = 0; i < string.length; i++) {
    string[i] = string[i]
      .charAt(0)
      .toUpperCase()
      .concat(string[i].slice(1));
  }

  return string.join(" ");
}

console.log(LetterCapitalize("i ran there"));
