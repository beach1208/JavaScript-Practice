function stray(numbers) {
  return numbers.reduce((a,b) => a ^ b);
}

console.log(stray([17, 17, 3, 17, 17, 17, 17]));
