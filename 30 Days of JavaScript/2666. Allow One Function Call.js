//2666. Allow One Function Call
//Easy
//problem statement:   https://leetcode.com/problems/allow-one-function-call/description/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    //approach with apply()
    let called = false;
    return function(...args){
        if(called) return undefined;
        called = true;
        return fn.apply(this, args);
    } 

    /*
    //first approach
    let called = false;
    return function(...args){
        if(called) return undefined;
        called = true;
        return fn(...args);
    }
    */
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
