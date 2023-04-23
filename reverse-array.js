// create an array with elements from 1 to 20
const countdown = [];
for (let i = 1; i <= 200; i++) {
  countdown.push(i);
}

// create a new array with elements in reverse order
const reversedCountdown = [];
for (let index = countdown.length - 1; index >= 0; index--) {
  reversedCountdown.push(countdown[index]);
}


// function to create a reversed copy of an array
function reverseArray(arr) {
  const reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  return reversedArr;
}

let nums1 = [1, 2, 3];
let nums2 = [1, 3, 5, 7, 9, 11];
let nums3 = [20, 50, 30, 60, 200];
let nums4 = [1, -1, 2, -3, 5, -8, 13]

// output reversed arrays
console.log(reverseArray(nums1)); // output [3, 2, 1]
console.log(reverseArray(nums2)); // output [11, 9, 7, 5, 3, 1] 
console.log(reverseArray(nums3)); // output [20, 50, 30, 60, 200]
console.log(reverseArray(nums4)); // output [13, -8, 5, -3, 2, -1, 1]]