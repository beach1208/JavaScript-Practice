function descendingOrder(n){
  //...
  let num = Array.from(n.toString());
  const result = num.sort((a,b) => {
      return b - a;
  })
  return Number(result.join(""));
}

console.log(descendingOrder(21445));
