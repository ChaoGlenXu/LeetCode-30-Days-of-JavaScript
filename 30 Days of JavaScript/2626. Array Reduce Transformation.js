//2626. Array Reduce Transformation
//Easy
//problem statement:   https://leetcode.com/problems/array-reduce-transformation/description/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    
    let res = init;
    for (const i of nums){  res = fn(res, i); }
    return res;

    /*  //can be shortened
    if (nums.length == 0){return init;}
    let val = fn(init, nums[0]);
    for (let i = 1; i < nums.length; i++){
        val = fn(val, nums[i])
    }
    
    return val;
    */
};
