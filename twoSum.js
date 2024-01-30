/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var search = {}
    for (const [i, num] of nums.entries()) {
        if ((target - num) in search) {
            return [i, search[target - num]]
        }
        search[num] = i
    }
    return []
};
