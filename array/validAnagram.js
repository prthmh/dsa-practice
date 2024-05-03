// Q: https://leetcode.com/problems/valid-anagram/

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

function isAnagramShort(s, t) {
  let sAry = [...s].sort().toString();
  let tAry = [...t].sort().toString();
  return sAry === tAry;
}

function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const charCountMap = new Map();
  for (const char of s) {
    if (charCountMap.has(char))
      charCountMap.set(char, charCountMap.get(char) + 1);
    else charCountMap.set(char, 1);
  }

  for (const char of t) {
    if (!charCountMap.has(char)) false;
    charCountMap.set(char, charCountMap.get(char) - 1);
    if (charCountMap.get(char) === 0) charCountMap.delete(char);
  }

  if (charCountMap.size > 0) return false;
  return true;
}

console.log(isAnagram("anagram", "nagaram")); //true
console.log(isAnagram("anagram", "nagrbraram")); //false
console.log(isAnagram("car", "rat"));
