/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val1) {
    this.val = val1
    this.toBe = function(val2) {
        if (this.val === val2) {
            return true
        }
        throw "Not Equal"
    }
    this.notToBe = function(val2) {
        if (this.val !== val2) {
            return true
        }
        throw "Equal"
    }
    return this
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
