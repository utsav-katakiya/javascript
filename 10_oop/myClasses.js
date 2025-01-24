// class user {
//     constructor(user,email,password){
//         this.user = user;
//         this.email =email;
//         this.password = password
//     }
//     enryptpassword(){
//         return `${this.password}abc`
//     }

//     changeusername(){
//         return`${this.user.toUpperCase()}`
//     }
// }

// const chai = new user("chai","chai@gmail.com","123")
// console.log(chai.enryptpassword());
// console.log(chai.changeusername());

//--------------------------------------------------------------------


function user(user,email,password) {
        this.user = user;
        this.email =email;
        this.password = password
    }

    user.prototype.encryptpass = function(){
        return `${this.password}ab`
    }

    user.prototype.changeuser = function(){
        return`${this.user}`
    }

    const tea = new user("tea","tea@gmail.com","123")
    console.log(tea.encryptpass());
    console.log(tea.changeuser());
    

