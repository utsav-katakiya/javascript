const user = {
    username : "utsav",
    loginCount : 8,
    signIn : true ,

    getuserDetail : function(){
        console.log("got user details");
        console.log(`username ${this.username}`);
        
    }
}
console.log(user.username);
console.log(user.getuserDetail());
