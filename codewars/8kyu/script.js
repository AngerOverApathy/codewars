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