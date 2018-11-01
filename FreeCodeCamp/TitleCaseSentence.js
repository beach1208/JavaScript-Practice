function titleCase(str) {
  let lowerstr = str.toLowerCase().split(" ");
  const result = lowerstr.map(word => {
    return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
  });
  return result.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
