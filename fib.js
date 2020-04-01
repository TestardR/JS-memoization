
let calculations = 0;
function fibonnaci(n) {

    if (n < 2) {
        return n
    }
    fibonnaci(n - 1) + fibonnaci(n - 2)
}

// Exponential Time Complexity O(n^2)

function fibonacciMemoized() {
    let cache = {}
    return function fib(n) {
        calculations++;
        console.log(calculations)
        if (n in cache) {
            return cache[n]
        } else {
            if (n < 2) {
                return n
            } else {
                cache[n] = fib(n - 1) + fib(n - 2)
                return cache[n]
            }
        }
    }
}

// Linear Time Complexity O(n)

const fastFib = fibonacciMemoized();

console.log(fastFib(10))