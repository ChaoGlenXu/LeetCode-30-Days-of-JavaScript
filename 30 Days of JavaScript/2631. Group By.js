//2631. Group By
//Medium
//problem statement:   https://leetcode.com/problems/group-by/description/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    
    const res = {};

    for (const [index, value] of this.entries()){
        const key = fn(value);
        res[key] = res[key] || [];
        res[key].push(value);
    }
    return res;

    /* passed all the testcases, but there is a shorter version of the code
    const res = {};

    for (const [index, value] of this.entries()){
        let key = fn(value);
        if (res.hasOwnProperty(key))
            res[key].push(value);
        else
            res[key] = [value];
    }
    return res;
    */
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
