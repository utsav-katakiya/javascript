// let user = {
    // name :"utsav",
    // price : 999,

    // welcomeMessage : function(){
    //     console.log( "heloo user  "+ this.name +" welcome to website");
    //     // console.log(this);
    // }
    
    
// }
// console.log(this);   {}
// user.welcomeMessage()
// user.name= "sneh"
// user.welcomeMessage()


// function chai(){
//     let username = "utsav"
//     console.log(this.username);
    
// }

// chai()

// let chai = function(){
//     let username = "utsav"
//     console.log(this.username);
    
// }
// chai()

// let chai = ()=> {
//         let username = "utsav"
//         console.log(this); // {}
        
//     }
//     chai()

// let addtwo = (num1, num2) => num1+num2
// console.log(addtwo(3,4));

// let addtwo = (num1, num2) => (num1+num2)

let addtwo = (num1,num2) => ({username:"utsav"})
console.log(addtwo(3,4));