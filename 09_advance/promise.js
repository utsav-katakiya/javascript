const promiseOne = new Promise(function (resolve, reject) {

    setTimeout(function () {
        console.log('async is complete');
        resolve()
    }, 1000)

})

promiseOne.then(function () {
    console.log('promised consumeed');

})

new Promise(function (resolve, reject) {

    setTimeout(function () {
        console.log("async 2");
        resolve()
    }, 1000)

}).then(function () {
    console.log("asyc 2 complete");

})

const PromiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "utsav", email: "utsav@gmail.com" })
    }, 1000)
})

PromiseThree.then(function (user) {
    console.log(user);

})

let promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({ username: "hitesh" })
        }
        else {
            reject('error')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);

}).catch((error) => {
    console.log(error);

}).finally( ()=> console.log("the promised is either resolved or rejected")
)
