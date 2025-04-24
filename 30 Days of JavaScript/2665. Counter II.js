//2665. Counter II
//Easy
//problem statement:   https://leetcode.com/problems/counter-ii/description/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    var count = init

    const increment = () =>  ++count;

    const decrement = () =>  --count;

    const reset = () => {
        count = init;
        return count;
    }

    return {
        increment,
        decrement,
        reset
    };
    
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
