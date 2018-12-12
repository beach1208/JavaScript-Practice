function shortestword(str) {
  const result = str.split(" ").map(x => x.length);
  return Math.min(...result);
}

console.log(
  shortestword("bitcoin take over the world maybe who knows perhaps")
);
