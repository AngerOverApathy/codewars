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