function Setusername(username){
    this.username = username
    console.log("called");
    
}

function createUser(username,email,password){
    Setusername.call(this,username)

    this.email= email
    this.password=password
}

let user =  new createUser("utsav","abcd@gmail.com","abcdef")
console.log(user);
