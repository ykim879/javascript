var addTwoPromises = async function(promise1, promise2) {
    return promise1
        .then(r => promise2.then(r2 => r + r2))
};
