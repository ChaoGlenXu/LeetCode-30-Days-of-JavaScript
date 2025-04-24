//2723. Add Two Promises
//Easy
//problem statement:   https://leetcode.com/problems/add-two-promises/description/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    /*
    const [val1, val2] = await Promise.all([promise1, promise2]);
    return val1 + val2;
    */
    return new Promise(async (res, rej) =>{
        const [val1, val2] = await Promise.all([promise1, promise2]);
        res(val1 + val2);
    })
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
