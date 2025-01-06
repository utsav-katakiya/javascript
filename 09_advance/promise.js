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


const promisefive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({ username: "javaScript", pass: "123" })
        } else {
            reject("error : js wrong")
        }
    }, 1000)
})

// then ,catch or try ,catch
async function consumePromiseFive() {
    try {
        const responce = await promisefive
        console.log(responce);

    } catch (error) {
        console.log(error);

    }
}
consumePromiseFive()


// ------------------------------fetch

async function geAlltUser() {
    try {
        const responce = await fetch('https://jsonplaceholder.typicode.com/users')
        let data = await responce.json()
        console.log(data);
    } catch (error) {
        console.log("E : ", error);

    }

}
geAlltUser()


// use then , catch

fetch('https://api.github.com/users/hiteshchoudhary')
    .then((responce) => {
        return responce.json()
    })
    .then((data) => {
        console.log(data);

    })
    .catch((error) => {
        console.log(error);

    })