// the mission, filter odd numbers 
function filterOddNumbers(arr) {
    let result = [];

//set the variable and check for odd
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) { // check if the number is odd
       result.push(arr[i]); // add it to the result array
    }
}

//set result for only one odd number in the array
if (result.length === 1) { // if there is only one odd number in the array
   return result; // return an array with that single value
} else { // otherewise/else
  return result; // return the array with all the odd numbers
  }
}

let nums1 = [2, 4, 6, 8, 11, 20, 15, 22]
let nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let nums3 = [70, 42, 55, 81, 21, 91, 34]
let nums4 = [2, 4, 6, 8, 10, 11, 12]

console.log(filterOddNumbers(nums1)); // output: [11, 15]
console.log(filterOddNumbers(nums2)); // output: [3, 5, 7, 9]
console.log(filterOddNumbers(nums3)); // output; [55, 81, 21, 91]
console.log(filterOddNumbers(nums4)); // output; [11]
