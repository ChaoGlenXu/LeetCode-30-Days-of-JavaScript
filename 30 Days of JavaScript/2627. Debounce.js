//2627. Debounce
//Medium
//problem statement:   https://leetcode.com/problems/debounce/description/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let id;
    
    return function(...args) {
        clearTimeout(id);
        id = setTimeout(() => {fn(...args)}, t);    
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
