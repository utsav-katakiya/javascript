let MyObject  = {
    js  : "javascript",
    cpp : "c++",
    rb : "ruby"
}

for (const key in MyObject) {
   console.log(key  , (MyObject[key]));
   
}