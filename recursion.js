/** product: calculate the product of an array of numbers. */

function product(nums) {
  // Base Case (we return 1, )
  if (nums.length === 0) return 1;
  // Normal Case
  return nums.pop() * product(nums);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  // Base Case
  if (words.length === 1) return words[0].length;
  // Normal Case - compare idx 0 and 1, remove shortest word then recall longest()
  if (words[0].length >= words[1].length) {
    return longest(words.splice(0, 1));
  } else {
    return longest(words.splice(1, 1));
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 1) {
  // Base Case - if idx is <= to length of string
  if (str.length <= idx) return str;
  // Normal Case - remove char at idx+1 and add 1 to index
  return everyOther(str.slice(0, idx) + str.slice(idx + 1), (idx = idx + 1));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  // Base Case - if string has length of 0 or 1 return true
  if (str.length < 2) return true;
  // Normal Case - if first and last are same, remove chars and re-run is Palindrome, else return false
  if (str[str.length - 1] === str[0]) {
    return isPalindrome(str.slice(1, -1));
  } else {
    return false;
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = arr.length - 1) {
  // Base Case - if arr[0] === val, return idx
  if (arr[idx] === val) return idx;
  // Normal Case - remove first item and increment idx
  if (arr.length > 1) {
    console.log(arr);
    arr.pop();
    return findIndex(arr, val, (idx = idx - 1));
  } else {
    return -1;
  }
}
/** revString: return a copy of a string, but in reverse. */

function revString(str) {}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
