function pairElement(str) {
  let myPair = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };

  let array = str.split("");
  const result = array.map(x => [x, myPair[x]]);
  return result;
}

console.log(pairElement("GCG"));
