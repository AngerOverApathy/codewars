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

// Given an array of integers, return a new array with each value doubled.
// For example:
// [1, 2, 3] --> [2, 4, 6]
// function maps(x){
//     return x.map(num => num * 2)
//   }

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F
// function abbrevName(name){
//     return name.split(' ').map(word => word[0].toUpperCase()).join('.');
//  }

// Given an array of integers your solution should find the smallest integer.
// For example:
// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// // You can assume, for the purpose of this kata, that the supplied array will not be empty.
// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//       return Math.min(...args)
//     }
//   }

// Write a function that removes the spaces from the string, then return the resultant string.
// Examples:
// Input -> Output
// "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
// "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
// "8aaaaa dddd r     " -> "8aaaaaddddr"
// function noSpace(x){
//     return x.replaceAll(' ','')
//   }

// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.
// function findAverage(array) {
//     if (array === null || array.length === 0){
//       return 0
//     } 
//     const sum = array.reduce((acc, num) => num += acc, 0)
//     return sum / array.length
//   }

// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:
// Example(Input --> Output)
// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"
// function findNeedle(haystack) {
//     const index = haystack.findIndex(word => word === 'needle')
//     return `found the needle at position ${index}`
//   }
//OR
// function findNeedle(haystack) {
//     return "found the needle at position " + haystack.indexOf("needle");
//   }


// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// function digitize(n) {
//     return String(n).split('').map(Number).reverse()
//   }

// Nathan loves cycling.
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
// For example:
// time = 3 ----> litres = 1
// time = 6.7---> litres = 3
// time = 11.8--> litres = 5
function litres(time) {
    return Math.floor(time * 0.5)
  }