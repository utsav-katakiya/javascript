const arr = [1 , 2 , 3 , 4 , 5 , 6]

// foreach not retun , undifined


  let  array= arr.forEach((item)=>{
    //  console.log(item);
    
})
// console.log(array); // undifined

// filter  output is []

const num = [ 1, 2, 3 ,4 ,5 ,6 ]

 let numbers = num.filter( (number)=> {
  return console.log(number); // print the number 
    
})
// console.log(numbers); //[]

const books = [ 
        {
        titlle : "book 1" , publish : 2000 , genre : "history"
},
        {
          titlle : "book 2" , publish : 2005 , genre : "science"
},
       { 
        titlle : "book 3" , publish : 2003 , genre : "maths"
},
       { 
        titlle : "book 4" , publish : 2008 , genre : "history"
}
]

let userbook = books.filter( (bk) => bk.publish===2000 )
// console.log(userbook);

let userbooks = books.filter((bk)=>  bk.genre==="history")
console.log(userbook);
