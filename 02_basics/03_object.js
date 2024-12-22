// singleton 


// object literals




let JsUser= {
    name : "utsav",
    "age" : 20,
    email : "utsav@gmail.com",
    isLoogedIn :false
   
}

console.log(JsUser.name)
console.log(JsUser["name"])
console.log(JsUser["age"])


// JsUser.email = "utsav1@gmail.com"
// Object.freeze(JsUser)
// JsUser.email = "utsav2@gamil.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("hello js user" )
}
console.log(JsUser.greeting());

JsUser.greetingtwo =function(){
    console.log('hello js user , ${this.name}')
}

console.log(JsUser.greeting())
console.log(JsUser.greetingtwo())