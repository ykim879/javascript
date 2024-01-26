/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    this.init = init
    this.counter = init
    this.increment = function() {
        this.counter += 1
        return this.counter
    }
    this.reset = function() {
        this.counter = this.init
        return this.counter
    }
    this.decrement = function() {
        this.counter -= 1
        return this.counter
    }
    return this
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
