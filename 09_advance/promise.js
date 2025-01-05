// const promiseOne = new Promise(function(resolve,reject){
    
//     setTimeout(function(){
//         console.log('async is complete');
//         resolve()
//     },1000)
    
// })

// promiseOne.then(function(){
//     console.log('promised consumeed');
    
// })

new Promise(function(resolve,reject){
   
   setTimeout(function(){
    console.log("async 2");
    resolve()
   },1000)
    
}).then(function(){
    console.log("asyc 2 complete");
    
})
