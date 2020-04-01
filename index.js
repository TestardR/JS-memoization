function addTo80(n) {
    console.log('long time')
    return n + 80
}

function memoizedAddTo80() {
    let cache = {};
    return function (n) {
        console.log(cache)
        if (n in cache) {
            return cache[n]
        } else {
            cache[n] = n + 80
            return cache[n]
        }
    }

}

const memoized = memoizedAddTo80();

console.log(memoized(5))
console.log(memoized(5))