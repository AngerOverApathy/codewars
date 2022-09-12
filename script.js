//           ~CHALLENGE 1~
//grab just the initials from a full name
//i.e Andrew Jackson should print as A.J.

// function abbrevName(name){
//     //take the first letter of each word
//     //return initials with period
//     let fullName = name.split(' ')
//     return (fullName[0][0] + '.' + fullName[1][0] + '.').toUpperCase()
//   }

// console.log(abbrevName('Andrew Jackson'), 'A.J.')
// console.log(abbrevName('Julius Ceasar'), 'J.C.')
// console.log(abbrevName('Harley Quinn'), 'H.Q.')


//    ~CHALLENGE 2~
// create a function that takes in 4 numbers and adds the first 3, and divides by the 4th
//return the result

// function averageThreeNumbers (num1, num2, num3, num4) {
//     let sum = num1 + num2 + num3
//     let result = sum / num4

//     return result
// }

// console.log(averageThreeNumbers(2, 6, 4, 2))



//    ~CHALLENGE 3
// create a function that takes in 2 numbers, console log first number to power of second
// function exponents(num1, num2) {
//     let result = num1 ** num2
//     return result
// }             

//            OR

//function exponents(num1, num2) {
//     console.log(Math.pow(num1, num2))
// }


// console.log(exponents(4, 2))

//     ~CHALLENGE4~
// create a conditional that takes a boolean and a string
// if the boolean is true, alert string, if false, console log string

// function alertTrue(b, str) {
//     b ? alert(str) : console.log(str)
// }

//        OR
//const alertTrue = (b, str) => b ? alert(str) : console.log(str)

// console.log(alertTrue(true, 'am i true?'))
// console.log(alertTrue(false, 'am i true?'))


//        ~CHALLENGE 5~
//create a function that takes in a number, console all values from 1 to that number
//if the number is divisible by 3, log fizz instead of that number
//if the number is divisible by 5 log buzz instead of the number
//if the number is divisible by 3 and 5, log fizzbuzz instead of that number

// function fizzBuzz(num) {
//     for (let i = 1; i < num; i++) {
//         if (i % 3 === 0 && i % 5 ===0 ) {
//             console.log(i + 'fizzbuzz')
//         } else if (i % 3 === 0) {
//             console.log(i + 'fizz')
//         } else if (i % 5 === 0) {
//             console.log(i, 'buzz')
//         } else {
//             console.log(i)
//         }
//     }
// }

// console.log(fizzBuzz(700))

//         CODEWARS CHALLENGE
//abbreviate the name into initials
// function abbrevName(name){
//     return name.split(' ').map(i => i[0].toUpperCase()).join('.')
// }

// console.log(abbrevName('John Smith'))

//       ~CHALLENGE 6~
//create an array of movies with at least 3 movies
//using the array from above, use the first movie in a new variable
//get the length of the original array and put in new variable
