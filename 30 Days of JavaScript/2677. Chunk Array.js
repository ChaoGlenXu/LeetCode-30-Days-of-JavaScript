//2677. Chunk Array
//Easy
//problem statement:   https://leetcode.com/problems/chunk-array/description/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const res = [];
    let sub_arr = [];
    for(let i = 0; i < arr.length; i++ ){
        sub_arr.push(arr[i]);
        if (sub_arr.length == size) {
            res.push(sub_arr);
            sub_arr = [];
        }
    }
    if (sub_arr.length) res.push(sub_arr);
    return res;
};
