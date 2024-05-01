// Q: https://leetcode.com/problems/contains-duplicate/

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false

function containsDuplicate(nums) {
  const set = new Set(nums);
  return set.size !== nums.length;
}
