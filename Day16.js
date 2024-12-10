/* 
Interval Cancellation
Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn.

After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.

setTimeout(cancelFn, cancelTimeMs)
The function fn should be called with args immediately and then called again every t milliseconds until cancelFn is called at cancelTimeMs ms.
*/


var cancellable = function (fn, args, t) {
    fn(...args); // Call fn immediately

    const intervalId = setInterval(() => fn(...args), t); // Repeat every `t` ms
    return function cancelFn() {
        clearInterval(intervalId)
    }


};