//2721. Execute Asynchronous Functions in Parallel
//Medium
//problem statement:   https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/description/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */

/* 
var promiseAll = function(functions) {
    let len = functions.length, ct = 0;
    const ans = new Array(len); 
    return new Promise((res, rej) => {
        
        for(let ind = 0; ind < len; ind++){
            functions[ind]()
                .then((val) => {
                    ans[ind] = val;
                    ct++;
                    if (ct === len){
                        res(ans);
                    }
                }).catch(err => rej(err));
            
        }
    });
};
*/

/*
var promiseAll = function(functions) {
    let len = functions.length, ct = 0;
    const ans = new Array(len); 
    return new Promise((res, rej) => {
        functions.forEach(async (func, ind) => {
            try{
                ans[ind] = await func();
                ct++;
                if (ct === len){
                    res(ans);
                }
            }catch(err){rej(err);}
        })
    });
};
*/

//correct fixed version for the common mistake example
var promiseAll = function(functions) {
    let len = functions.length, ct = 0;
    const ans = new Array(len); 
    return new Promise((res, rej) => {
        for(let ind = 0; ind < len; ind++){
            (async () => {
                try{
                    ans[ind] = await functions[ind]();
                    ct++;
                    if (ct === len){
                        res(ans);
                    }
                }catch(err){rej(err);}
            })();
        }
    });
};

/* this is common mistake example that is wrong
var promiseAll = function(functions) {
    let len = functions.length, ct = 0;
    const ans = new Array(len); 
    return new Promise(async(res, rej) => {
        for(let ind = 0; ind < len; ind++){
            try{
                ans[ind] = await functions[ind]();
                ct++;
                if (ct === len){
                    res(ans);
                }
            }catch(err){rej(err);}
        }
    });
};
*/



/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
