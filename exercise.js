// Maps and Sets Exercise

// ## ** Quick Question #1,2,3 **
//   What does the following code return?

new Set([1, 1, 2, 2, 3, 4]);
// Set(4) {1,2,3,4}

[...new Set("referee")].join("");
// 'ref'

let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);
// {[1, 2, 3]: true, [1, 2, 3]: false}

// ## **hasDuplicate**
// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

// function hasDuplicate(arr) {
//   let compArr = new Set(arr);
//   console.log(compArr.size);
//   return arr.length !== compArr.size;
// }

const hasDuplicate = (arr) => new Set(arr).size !== arr.length;

// ## ** vowelCount **

//   Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

const vowelCount = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let strArr = str.toLowerCase().split('');
  let result = new Map();
  for (let char of strArr) {
    if (vowels.includes(char) && result.has(char)) {
      result.set(char, result.get(char) + 1);
    } else if (vowels.includes(char)) {
      result.set(char, 1);
    }
  }
  return result;
}