let mynums = [ 1 ,  2 , 3]

//  let mytotal = mynums.reduce(function (acc,curval){
//     console.log("acc is " + acc + " curval " + curval);
//     return acc+curval
// },2)


// write in ()
// mynums.reduce((acc,curval)=>(
//     console.log("acc is " + acc + " curval " + curval),
//      acc+curval
// ),0
// )


// write in {}
// mynums.reduce((acc,curval)=>{
//         console.log("acc is " + acc + " curval " + curval);
//         return acc+curval
// },0
//     )

let shoppingCart = [
    {
        itemname : "js ",
        price : 999
    },
    {
        itemname : "java ",
        price : 2999
    },
    {
        itemname : "py ",
        price : 4999,
    },
    {
        itemname : "android ",
        price : 5999
    }
]

let total =shoppingCart.reduce((acc, item)=> acc + item.price ,0)
console.log(total);
