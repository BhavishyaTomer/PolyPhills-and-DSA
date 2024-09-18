function memoizeResult(fn, context) {
    let res = {};
    return function(...arg) {
        let cachedArgument = JSON.stringify(arg);
        if (!res[cachedArgument]) {
            res[cachedArgument] = fn.call(context || this, ...arg);
        }
        return res[cachedArgument];
    };
}

function clumsySquare(num1, num2) {
    for (let i = 0; i < 1000000; i++) {
        return num1 * num2;
    }
}

const memoizedClumsySquare = memoizeResult(clumsySquare);

console.time("start");
console.log(memoizedClumsySquare(2356, 8769)); // First call, calculates and caches
console.timeEnd("start");

console.time("start");
console.log(memoizedClumsySquare(2356, 8769)); // Second call, retrieves from cache
console.timeEnd("start");





// function clumsySquare(num1, num2) {
//     for (let i = 0; i < 1000000; i++) {
//         return num1 * num2;
//     }
// }

// console.time("start"); // Start timing with label "start"
// console.log(clumsySquare(2356, 8769)); // Output: 20659764
// console.timeEnd("start"); // End timing with the same label "start"
