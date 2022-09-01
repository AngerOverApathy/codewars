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

function alertTrue(b, str) {
    b ? alert(true) : console.log(str)
}
console.log(alertTrue(true, 'i am true'))
console.log(alertTrue(false, 'i am false'))


//        ~CHALLENGE 5~
//create a function that takes in a number, console all values from 1 to that number
//if the number is divisible by 3, log fizz instead of that number
//if the number is divisible by 5 log buzz instead of the number
//if the number is divisible by 3 and 5, log fizzbuzz instead of that number

// function fizzBuzz(count, num) {
//     for (count = 0; count < num; count++) {
//         if (count % 3 === 0 && num % 5 ===0 ) {
//             console.log(count + 'fizzbuzz')
//         } else if (count % 3 === 0) {
//             console.log(count + 'fizz')
//         } else if (count % 5 === 0) {
//             console.log(count, 'buzz')
//         } else {
//             console.log(count)
//         }
//     }
// }

// console.log(fizzBuzz(1, 700))