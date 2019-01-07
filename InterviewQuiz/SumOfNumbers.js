function getSum(a,b){
     let min = Math.min(a, b),
      max = Math.max(a, b);

      let result = 0;
      for(let i = min; i <= max; i++){
          result += i;
      }

      return result;
}