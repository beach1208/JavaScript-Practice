var number = function(busStops){
  const num = busStops.map(([a,b]) => {
      return a - b;
  })
  const sum = num.reduce((a,b)=>{
      return a + b;
  })
  return sum;
  
}

console.log(number([[10,0],[3,5],[5,8]]));

// ** Shorter solution 
const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);

const number = (busStops) => busStops.reduce((result,[a,b]) => result + a - b, 0);