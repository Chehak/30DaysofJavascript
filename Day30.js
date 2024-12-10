/*
 Array Wrapper
 Create a class ArrayWrapper that accepts an array of integers in its constructor. This class should have two features:

When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays.
When the String() function is called on the instance, it will return a comma separated string surrounded by brackets. For example, [1,2,3].
*/
var ArrayWrapper = function(nums) {
    this.nums = nums
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function() {
    let sum = 0;
    for(let i=0;i<this.nums.length;i++){
        sum+=this.nums[i]
    }
    return sum
}

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function() {
    return `[${this.nums.join(',')}]`
}