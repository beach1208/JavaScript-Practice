function solution(str, ending){
  return str.substr(- ending.length) == ending ? true : false;
}
console.log(solution('abc', 'bc'));
