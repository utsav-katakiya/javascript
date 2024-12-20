// Primitive
// 7 type :- String ,Number,BigInt,Boolean,null,undefined,symbol

const score= 100
const scoreValue=100.34
const IsLoggedIn = false 
const outsideTemp = null
let userEmailId ;
 
const id =Symbol('123')
const anotherId = Symbol('123')
console.log(id===anotherId)
const BigInt= 95738674879752345n

// referece (Non Primitive)
// Array, Object ,function

const cars =[" BMW", "Toyota", "tata"  ]

let Obj = {
    name:"hitesh",
    age: 22 
}

const Myfunction = function(){
    console.log("utsav")
}
Myfunction();


// --------------------------------------------------------------------------------------------------

// Stack(Primitve)    ,    heap(non- primitive)

let myname= "sneh"
let anotherName = myname
anotherName = "utsav"
console.log(anotherName)
console.log(myname)

let user ={
     email : "utsav@gmail.com",
     upi : "utsav@hdfc"
}

let userTwo = user
userTwo.email = "sneh@gmail.com"

console.log(user.email)
console.log(userTwo.email)