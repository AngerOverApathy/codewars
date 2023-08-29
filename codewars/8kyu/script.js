// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.
// function positiveSum(arr) {
//     return arr.reduce((acc,num)=> acc + (num > 0 ? num : 0),0);
//  }

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
// function boolToWord( bool ){
//     return bool ? "Yes" : "No"
//   }

//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
// function makeNegative(num) {
//     return -Math.abs(num)
//   }

//Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
// function sum (numbers) {
//     "use strict";
//     if (numbers === null || numbers.length === 0) {
//       return 0
//     }
//   return numbers.reduce((acc, num)=> num += acc, 0)
    
// };

//Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
// function invert(array) {
//     return array.map(num => num * -1)
//  }

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
// For example,
// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.
// function countSheeps(sheep) {
//     return sheep.reduce((acc, num) => num ? acc + 1 : acc, 0)
//   }

//Complete the square sum function so that it squares each number passed into it and then sums the results together.
// function squareSum(numbers){
//     return numbers.reduce((acc, num) => acc + (num * num), 0);
//   }
//OR
// function squareSum(numbers) {
//     return numbers.map(num => num * num).reduce((acc, curr) => acc + curr, 0);
//   }
//OR
// function squareSum(numbers) {
//     let sum = 0;
//     for (let num of numbers) {
//       sum += num * num;
//     }
//     return sum;
//   }
//OR
// function squareSum(numbers) {
//     let sum = 0;
//     numbers.forEach(num => {
//       sum += num * num;
//     });
//     return sum;
//   }














