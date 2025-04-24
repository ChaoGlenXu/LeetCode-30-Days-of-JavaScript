//2620. Counter
//Easy
//problem statement:   https://leetcode.com/problems/counter/description/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    
    var cur_count = n;

    return function() {
        return cur_count++;
         
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
