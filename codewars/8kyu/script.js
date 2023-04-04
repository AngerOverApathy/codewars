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