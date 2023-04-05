//count all the vowels in a string
// function getCount(str) {
//     return (str.match(/[aeiou]/ig)||[]).length;
//   }
//OR
// program to count the number of vowels in a string

// defining vowels
// const vowels = ["a", "e", "i", "o", "u"]
// function countVowel(str) {
//     // initialize count
//     let count = 0;
//     // loop through string to test if each character is a vowel
//     for (let letter of str.toLowerCase()) {
//         if (vowels.includes(letter)) {
//             count++;
//         }
//     }
//     // return number of vowels
//     return count
// }

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
// function sumTwoSmallestNumbers(numbers) {  
//     let firstNum = Math.min(...numbers)
//     numbers.splice(numbers.indexOf(firstNum), 1)
//     let secondNum = Math.min(...numbers)
//     return firstNum + secondNum
//   }

// Given the triangle of consecutive odd numbers:
//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
// function rowSumOddNumbers(n) {
//     let firstNum = (n*n)-(n-1)
//     let ans=0
//     let count=0
    
//     while(count<n){
//       if(firstNum % 2 !==0){
//         ans += firstNum;
//         count++
//       }
//       firstNum++
//     }
//      return ans
//    }
//OR
//function rowSumOddNumbers(n) {
//     return Math.pow(n, 3);
// }

// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
// const binaryArrayToNumber = arr => {
//     return parseInt(arr.join(''), 2);
//   };

// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.
// Don't change the order of the elements that are left.
// function removeSmallest(numbers) {
//     let copy = [...numbers]
//     let smallest = Math.min(...numbers);
//     let smallestIdx = numbers.indexOf(smallest)
//     copy.splice(smallestIdx, 1)
//     return copy
//   }