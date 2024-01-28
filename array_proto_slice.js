/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    var res = []
    for (let i = 0; i < arr.length; i += size) {
        let end = i + size < arr.length? i + size : arr.length
        res.push(arr.slice(i, end))
    }
    return res
};
