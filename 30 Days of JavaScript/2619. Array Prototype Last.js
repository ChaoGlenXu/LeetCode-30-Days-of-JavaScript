//2619. Array Prototype Last
//Easy
//problem statement:   https://leetcode.com/problems/array-prototype-last/description/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    const len = this.length;
    if (len === 0) return -1;
    else return this[len-1];
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
