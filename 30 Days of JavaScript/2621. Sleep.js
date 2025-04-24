//2621. Sleep
//Easy
//problem statement:   https://leetcode.com/problems/sleep/description/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return new Promise((res, rej) => setTimeout(res, millis));
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
