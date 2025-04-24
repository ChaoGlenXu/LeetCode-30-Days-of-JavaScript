//2634. Filter Elements from Array
//Easy
//problem statement:   https://leetcode.com/problems/filter-elements-from-array/description/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    //imperative programming 
    const res = [];

    for (let i = 0; i < arr.length; i++){
        if (fn(arr[i], i)){
            res.push(arr[i]);
        };
    };
    return res;
};
