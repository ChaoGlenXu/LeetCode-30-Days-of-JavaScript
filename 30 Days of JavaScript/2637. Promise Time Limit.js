//2637. Promise Time Limit
//Medium
//problem statement:   https://leetcode.com/problems/promise-time-limit/description/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    
    return async function(...args) {
        return new Promise((res, rej) => {
            const id = setTimeout(() => rej("Time Limit Exceeded"), t);
            fn(...args)
                .then((fn_output) => res(fn_output))
                .catch((err) => rej(err))
                .finally(() => clearTimeout(id));
        });
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
