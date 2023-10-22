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






































// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// function squareSum(numbers){
//     let sum = numbers.reduce((acc, nums)=>{
//       return acc += Math.pow(nums,2)
//     },0)
//     return sum
//   }

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
// For example,
// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.
// function countSheeps(arrayOfSheep) {
//     // TODO May the force be with you
//       return arrayOfSheep.reduce((acc, sheep) => acc + sheep, 0)
//   }

// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.
// function positiveSum(arr) {
//     let sum = arr.reduce((acc, num) => num > 0 ? acc+num : acc ,0)
//     return sum
//   }

// function boolToWord( bool ){
//     return bool ? 'Yes':'No';
//   }

// Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'
// function solution(str){
//     return str.split('').reverse().join('')
//   }

// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
// function repeatStr (n, s) {
//     return s.repeat(n);
//   }

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
// function removeChar(str){
//      return str.substring(1, str.length-1)
//    };

// Write a function that removes the spaces from the string, then return the resultant string.
// function noSpace(x){
//     return x.replaceAll(' ', '')
//   }

// Given an array of integers your solution should find the smallest integer.
// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//        return Math.min(...args)
//     }
//   }

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// function digitize(n) {
//     let numArray = n.toString().split('').reverse()
//     return numArray.map(x => parseInt(x))
//   }

// Given an array of integers, return a new array with each value doubled.
// function maps(x){
//     return x.map(num => num * 2)
//   }

// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle
// function findNeedle(haystack) {
//     let needleIndex = haystack.indexOf('needle')
//     return `found the needle at position ${needleIndex}`
//   }

// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
// function sum (numbers) {
//     "use strict";
//     return numbers.reduce((acc, count) => acc + count, 0)
// };

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
// function invert(array) {
//     return array.map(num => num * -1)
//   }

// Write a function which calculates the average of the numbers in a given list.
// function findAverage(array) {
//     let sum = array.reduce((acc, num) => acc + num,0)
//     if (sum > 0){
//       return sum / array.length
//     } else {
//       return 0
//     }
//   }

// Given a non-empty array of integers, return the result of multiplying the values together in order
// function grow(x){
//     let total = x.reduce((acc, num) =>{
//       return acc * num
//     },1)
//     return total
//   }