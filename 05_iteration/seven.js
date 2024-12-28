//   map

let mynumers = [1 , 2, 3 ,  4, 5 ,  6 ,7 , 8 ,9 ,10]

//  let newnums= mynumers.map((num) => num+10)
//  console.log(newnums);


// use map two time 
let newnums =mynumers.
                        map(  (num) =>  num * 10)   
                        .map((num) => num+1)
                        .filter((num)=> num>=50 )
console.log(newnums);
                        
 