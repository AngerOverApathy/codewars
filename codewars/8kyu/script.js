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