
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

let nums = [2,4,6,8,10]
function squareNUms(arr){
  arr.forEach((x,i)=>{
    arr[i] = Math.pow(x,2)
  })
  return arr
}
console.log(squareNUms(nums))
