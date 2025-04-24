//2635. Apply Transform Over Each Element in Array
//Easy
//problem statement:   https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const res = [];

    for (const i in arr){
        res.push(fn(arr[i], Number(i)));
    };
    return res;
};
