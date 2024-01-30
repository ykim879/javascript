/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    // if it is operator, pop two arithmetic and store the result
    s = []
    for (token of tokens) {
        let c = parseInt(token)
        if (!isNaN(c)) {
            s.push(c)
        } else {
            let n1 = s.pop()
            let n2 = s.pop()
            if (token == "+") {
                s.push(n1 + n2)
            } else if (token == "-") {
                s.push(n2 - n1)
            } else if (token == "*") {
                s.push(n1 * n2)
            } else {
                s.push(Math.trunc(n2 / n1))
            }
        }
    }
    return s.pop()
};
