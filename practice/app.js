
//          PRACTICE
//declare a variable, reassign in to your favorite food and alert the value
// let faveFood = 'sinigang'
// faveFood = 'Pho'
// alert(faveFood)
//declare a variable, assign it a string, alert the second character in your string
// let str = 'Here is a string'
// alert(str[1])

// function mathStorm(num1, num2, num3) {
//     let total = (num1 / num2) * num3
//     alert(total)
// }
// mathStorm(25,5,7)

// function mathCube(num1) {
//     console.log(Math.cbrt(num1))
// }
// mathCube(5)
// function summertime(month) {
//     if (month === 'June' || 'July' || 'August') {
//         console.log('yay')
//     } else {
//         console.log('Boo')
//     }
// }
// summertime('July')

// function skipFive(num) {
//     for (let i=0; i < num; i++) {
//         if (i % 5 !== 0) {
//             console.log(i)
//         }
//     }
// }

// skipFive(850)


//////////////////////////////////////////////////////////////////////////

// let answer = document.getElementById('show-text')
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
// let numbers = [10,20,30,40,50]
// numbers.forEach((element, i) => {
//     numbers[i] = element + 3
// })
// console.log(numbers)

// //find the average of all the previous numbers
// let sum = 0
// numbers.forEach((numbers) => sum += numbers)
// //OR
// for (let i =0; i < numbers.length; i++) {
//     sum += numbers[i]
// }
// console.log(sum)

//create a function that takes an array. if the first number is < the last number, alert 'hi', if > last number, alert 'bye
//if =, alert 'we close in an hour'
// let num = [50, 20, 30, 40, 50]
// function numSize(arr) {
//     if (arr[0] < arr.at(-1)) {
//         alert('Hi')
//     } else if (arr[0] > arr.at(-1)) {
//         alert('Bye')
//     } else {
//         alert('We close in an hour')
//     }
// }
// numSize(num)
//OR
// function numSize(arr) {
//     if (arr[0] < arr[arr.length-1]) {
//         alert('Hi')
//     } else if (arr[0] > arr[arr.length-1]) {
//         alert('Bye')
//     } else {
//         alert('We close in an hour')
//     }
// }
// numSize(num)


// function massMultiply(arr) {
//     let sum = 1
//     arr.forEach(num => sum *= num);
//     alert(sum)
// }
// massMultiply([10,20,30])
//OR
// function massMultiply(arr) {
//     let sum = 1
//     for (let i=0; i<arr.length; i++) {
//         sum *= arr[i]
//     }
//     alert(sum)
// }
// massMultiply([10,20,30])

//create a function that takes in an array of numbers
//return a new array of every even number
// let array = [1,2,3,4,5,6,7,8,9,10]

// function returnEvenNums(arr) {
//     let evenNums = arr.filter(num => num % 2 ==0 )
//     return evenNums
// }
// console.log(returnEvenNums(array))
//OR
// function returnEven(arr){
//     let evens = []
//     arr.forEach(num => num % 2 === 0 ? evens.push(num) : console.log('whoops'));
//     return evens
// }
// console.log(returnEven([1,2,3,4,5]))
//----------------------//
// let faveDrink = 'Thai Tea'
// console.log(faveDrink)
//----------------------//
// let sentence = 'Do you have an apple?'
// let sentenceCheck = sentence.includes('apple')
// console.log(sentenceCheck)
//----------------------//

// const getComputerChoice = () => {
//   const randomNumber = Math.floor(Math.random() * 3);
//   switch(randomNumber) {
//     case 0:
//       return 'rock';
//       break;
//     case 1:
//       return 'paper';
//       break;
//     case 2:
//       return 'scissors';
//       break;
//     default:
//       console.log('Not an option')
//   }
// };

// let userInput = document.getElementById('choice')
// const button = document.getElementById('btn')
// let showChoice = document.getElementById('show-choice')
// let showBotChoice = document.getElementById('bot-pick')
// let game=['rock','paper','scissors']

// button.addEventListener('click', function(){
//   let playerChoice = userInput.value
  
//   checkChoice(playerChoice)
// })

// function botsChoice(arr){
//   let botPick=arr[Math.floor(Math.random() * arr.length)]
//   return botPick;
// }

// function checkChoice(choice){
//   let cpuChoice = botsChoice(game)
//   showBotChoice.innerHTML = cpuChoice
//   showChoice.innerHTML = userInput.value;

//     if ((choice === 'scissors' && cpuChoice === 'paper') || (choice === 'rock' && cpuChoice === 'scissors') || (choice === 'paper' && cpuChoice === 'rock')) {
//     alert("You win!")
//   } else if (choice === cpuChoice) {
//     alert("It's a tie")
//   } else {
//     alert('You lose')
//   }
// }



// let question = 'who are you?'
// let answer = 'i am sam'

// function alertQuestion(str){
//   if (str.includes('?')){
//     alert(str)
//   } else {
//     alert('no questions')
//   }
// }
//OR
// alert(str.endsWith('?'))
// console.log(alertQuestion(question))
// console.log(alertQuestion(answer))

// let team = 'jr.dev senior.dev jr.dev boos hr boss jr.dev'
// console.log(team)
// console.log(team.replaceAll('jr.dev', 'software engineer'))

// let chunLi = new MakeFighter('ChunLi', 8, 'Scimitar', 'Good')
// console.log(chunLi)

// let gameArr = ['rock', 'paper', 'scissors']

// function botsChoice(arr, choice){
//   let botPick=arr[Math.floor(Math.random() * arr.length)]
// if ((choice === 'scissors' && botPick === 'paper') || (choice === 'rock' && botPick === 'scissors') || (choice === 'paper' && botPick === 'rock')) {
//       alert("You win!")
//     } else if (choice === botPick) {
//       alert("It's a tie")
//     } else {
//       alert('You lose')
//     }
// }

// function playGame(arr){
//   botsChoice(gameArr, 'scissors')
//   for(let i = 0; i<arr.length; i++){
//     console.log(arr[i])
//   }
// }
// console.log(playGame(gameArr))

// let nums = [10, 20, 30]
// function addNums(arr){
//   let sum=0
//   for (let i=0;i<arr.length;i++){
//     sum += arr[i]
//   }
//   alert(sum)
// }
// addNums(nums)
//OR
//alert(nums.reduce((acc,c) => acc + c,0))

// let nums = [2,4,6,8,10]
// function squareNUms(arr){
//   arr.forEach((x,i)=>{
//     arr[i] = Math.pow(x,2)
//   })
//   return arr
// }
// console.log(squareNUms(nums))
//OR
//let newNums = nums.map(num = num**2)

// let string="I am a string"
// function reverseString(str){
//   return str.split("").reverse().join("");
// }
// console.log(reverseString(string))

// function isPalindrome(str){
//     let reversed = str.split('').reverse().join('') //.split will turn string into array of letters
//     if (reversed === str) {
//       console.log('true')
//     }
//   }
//   isPalindrome('racecar')
//OR
//const isPalindrome = str => str === str.split('').reverse().join('')


// let numArr = [10,20,30,40,50]
// function sum(arr){
//   let total = 0
//   arr.forEach(arr => total += arr)
//   console.log(total)
// }
// sum(numArr)

// const result = numArr.reduce((sum, value) => {
//   return sum + value
// })
// console.log(result)

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

// function isPalindrome(str){
//   let reversed = str.split('').reverse().join('') //.split will turn string into array of letters
//   if (reversed === str) {
//     console.log('true')
//   }
// }
// isPalindrome('racecar')

// let mouse = {}
// mouse.color= 'black',
// mouse.size= 'small',
// mouse.wire= 'wireless',
// mouse.shape= 'ergonomic',

// mouse.click = function(){
//   console.log('click')
// },
// mouse.scroll = function(){
//   console.log('scroll')
// },
// mouse.closeTab = function(){
//   console.log('close tab')
// }

// function MakeFighter(fighterName, fighterLevel, fighterWeapon, fighterAlignment) {
//   this.name=fighterName,
//   this.level=fighterLevel,
//   this.weapon=fighterWeapon,
//   this.alignment=fighterAlignment,
//   this.fight=function(){
//     alert('Fight!')
//   },
//   this.dodge=function(){
//     alert('Dodged!')
//   },
//   this.heal=function(){
//     alert('healing')
//   }
// }

//turn a string into a number
// var stringToNumber = function(str){
//   return parseInt(str);
// }

// let dog = {
//   name: 'Jerry',
//   color: 'brown',
//   collar: true,
//   microchipped: true,
//   bark: function(){
//     console.log('Woof!')
//   },
//   shake: function(){
//     console.log('Shaking')
//   },
//   scratch: function(){
//     console.log('Scratch')
//   }
// }

// function MakeSkater(skaterName,skaterShoe, skaterExpertise, skaterColor){
//   this.name = skaterName
//   this.shoe = skaterShoe
//   this.expertise = skaterExpertise
//   this.hairColor = skaterColor
//   this.catchphrase = function(){
//     alert("You're gonna lose!")
//   }
//   this.specialMove = function(){
//     alert('Kickflip!')
//   }
//   this.speedUp = function() {
//     alert("I'm speeding up!")
//   }
// }

// let pizza = {}

// pizza.firstTopping = 'cheese'
// pizza.secondTopping = 'pepperoni'
// pizza.seasoning = 'italian'
// pizza.ready = true

// pizza.burn = function(){
//     console.log("I'm gonna burn your mouth!")
// }

// pizza.consume = function(){
//     console.log("You're eating me!")
// }

// pizza.description = function(){
//     console.log(`I am topped with ${pizza.firstTopping}, ${pizza.secondTopping}, and ${pizza.seasoning}`)
// }

// function MakePizza(pizzaToppings, pizzaCrust, pizzaSeasoning, pizzaReady){
//     this.toppings = pizzaToppings
//     this.crust = pizzaCrust
//     this.seasoning = pizzaSeasoning
//     this.ready = pizzaReady
//     this.burn = function(){
//         console.log("I'm burning your mouth!")
//     }
//     this.deliveryTime = function(){
//         console.log('Your pizza is ready!')
//     }
//     this.consume = function(){
//         console.log("You're eating me!")
//     }
// }

// let pizza = new MakePizza (['pepperoni', 'cheese', 'mushrooms'], 'deep dish', 'red pepper flakes', true)