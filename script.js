let answer = document.getElementById('show-text')




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
// let movieArray = ['Parasyte', 'Castaway on the Moon', 'Everything Everywhere All At Once']

// //using the array from above, use the first movie in a new variable
// let firstMovie = movieArray[0]
// //get the length of the original array and put in new variable
// let movieArrayLength = movieArray.length
// console.log(movieArrayLength)
// //get the last element in the array (create solution that allows for not knowing the length of the array)
// let lastMovie = movieArray[movieArray.length-1] //use the index to grab the element, .length will give element amount
// console.log(lastMovie)


//         ~ARRAY PRACTICE~
//create an array of movie titles, loop through the array and each element to an h2
// let movies = ['Parasyte', 'Castaway on the Moon', 'Everything Everywhere All At Once']
// answer.innerHTML = movies.forEach((x, i) => x,i)
//OR
// for (let i = 0; i < movies.length; i++) {
//     document.querySelector('h2').innerText += movies[i]
// }

//create an array of numbers, loop through array and add 3 to each number and replace the old number
let numbers = [10,20,30,40,50]
numbers.forEach((element, i) => {
    numbers[i] = element + 3
})
console.log(numbers)

//find the average of all the previous numbers
let sum = 0
numbers.forEach((numbers) => sum += numbers)
//OR
for (let i =0; i < numbers.length; i++) {
    sum += numbers[i]
}
console.log(sum)
