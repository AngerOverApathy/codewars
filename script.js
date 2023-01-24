
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