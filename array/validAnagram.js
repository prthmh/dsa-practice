// Q: https://leetcode.com/problems/valid-anagram/

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

function isAnagram(s, t) {
    let sAry = [...s].sort().toString();
    let tAry = [...t].sort().toString();
    return sAry === tAry
};
