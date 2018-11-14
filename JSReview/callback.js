function doSomethingWithOne(callback) {
    return callback(1);
}

doSomethingWithOne(console.log);

function doSomethingWithOneAsync(callback) {
    setTimeout(function () {
        callback(1)
    }, 5000);
}

doSomethingWithOneAsync(console.log);

function getUserFromDatabase(cb) {
    setTimeout(() => {
        cb({
            first: "Nagisa",
            last: "Kojima"
        })
    }, 2000);
}

function greetUser(user) {
    console.log('hi,' + user.first);

}

getUserFromDatabase(greetUser);