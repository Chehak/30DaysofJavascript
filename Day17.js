/*
Promise Time Limit
Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.

The time limited function should follow these rules:

If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".
*/

var timeLimit = function (fn, t) {

    return async function (...args) {
        return new Promise((resolve, reject) => {
            // Set a timeout to reject the promise if the time limit is exceeded.
            const timeoutId = setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);

            // Call the provided function and resolve/reject based on its result.
            fn(...args)
                .then((result) => {
                    clearTimeout(timeoutId); // Clear the timeout if the function resolves in time.
                    resolve(result);
                })
                .catch((error) => {
                    clearTimeout(timeoutId); // Clear the timeout if the function rejects in time.
                    reject(error);
                });
        });
    };
};
