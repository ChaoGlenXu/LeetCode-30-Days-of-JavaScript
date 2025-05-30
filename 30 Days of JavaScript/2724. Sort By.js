//2724. Sort By
//Medium
//problem statement:   https://leetcode.com/problems/sort-by/description/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    return arr.sort((a, b) => {
        return fn(a) - fn(b);
    });
};
