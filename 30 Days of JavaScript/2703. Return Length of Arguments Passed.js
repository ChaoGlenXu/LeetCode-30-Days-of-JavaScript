//2703. Return Length of Arguments Passed
//Easy
//problem statement:   https://leetcode.com/problems/return-length-of-arguments-passed/description/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    
    return args.length;
    /*
    // not necessary, cuz can just return arg.length
    let count = 0;

    for (idx in args){
        count++;
    } 
    return count;
    */
};

/**
 * argumentsLength(1, 2, 3); // 3
 */
