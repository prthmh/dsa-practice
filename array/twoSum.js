// Q: https://leetcode.com/problems/two-sum/description/

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

function twoSum(nums, target) {
  const aryLength = nums.length;
  for (let i = 0; i < aryLength; i++) {
    for (let j = i + 1; j < aryLength; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

function twoSum2(nums, target) {
  const map = new Map();
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    const targetPair = target - nums[i];
    if (map.has(targetPair)) return [i, map.get(targetPair)];
    map.set(nums[i], i);
  }
}
