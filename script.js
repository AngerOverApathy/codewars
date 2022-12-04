
// let numArr = [10,20,30,40,50]
// function sum(arr){
//   let total = 0
//   arr.forEach(arr => total += arr)
//   console.log(total)
// }
// sum(numArr)

// function squareNum(arr){
//   for (let i=0;i<arr.length;i++){
//     let numSquared = Math.pow(arr[i],2)
//     console.log(numSquared)
//   }
// }
// squareNum(numArr)
// function reverse(s){
//   return [...s].reverse().join("");
// }
//OR
// let string="I am a string"
// function reverseString(str){
//   return str.split("").reverse().join("");
// }
// console.log(reverseString(string))

function isPalindrome(str){
  let reversed = str.split('').reverse().join('')
  if (reversed === str) {
    console.log('true')
  }
}
isPalindrome('racecar')