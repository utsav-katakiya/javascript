// let arr = [1,  2  , 3  ,4 , 5]
// for (const num of arr) {
//     console.log( + num);
    
// }

// const string = "hello utsav"

// for(const word of string ){
//     console.log(word);
    
// }


//  map 

let map = new Map()

map.set("1 ", "one")
map.set("2 ", "rwo")
map.set("3 ", "three")
map.set("4 ", "four")
map.set("5 ", "five ")
map.set("5 ", "five ")  // no duplication , order
// console.log(map);


for(const [key, value] of map){
    console.log([key,  ':-', value]);
    
}
