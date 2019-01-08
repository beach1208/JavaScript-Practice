function isIsogram(str){
  let string = str.toLowerCase();
  for(i = 0; i < string.length; ++i)
    for(j = i + 1; j < string.length; ++j)
      if(string[i] === string[j])
        return false;
  return true;
}

console.log(isIsogram("Dermatoglyphics" ));
