//2629. Function Composition
//Easy
//problem statement:   https://leetcode.com/problems/function-composition/description/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    //alternatively 
    return function(x){
        return functions.reduceRight((acc, f) => f(acc), x);
    }
    

    /*
    //first way
    return function(x) {
        for (const fn of functions.reverse()){
            x = fn(x);
        }
        return x;
    }
    */
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
