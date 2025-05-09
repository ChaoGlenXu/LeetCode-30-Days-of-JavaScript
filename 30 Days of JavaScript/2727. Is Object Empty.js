//2727. Is Object Empty
//Medium
//problem statement:   https://leetcode.com/problems/is-object-empty/description/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    return Object.keys(obj).length === 0;
};
