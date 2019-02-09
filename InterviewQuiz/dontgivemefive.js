 function dontGiveMeFive(start, end)
{
    let result = [];
    for(let i = start; i <= end; i++){
        if(!i.toString().includes('5')){
            result.push(i);
        }
    }
  return result.length;
}

console.log(dontGiveMeFive(4,17));
