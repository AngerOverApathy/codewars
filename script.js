
let numArr = [10,20,30,40,50]
// function sum(arr){
//   let total = 0
//   arr.forEach(arr => total += arr)
//   console.log(total)
// }
// sum(numArr)

function squareNum(arr){
  for (let i=0;i<arr.length;i++){
    let numSquared = Math.pow(arr[i],2)
    console.log(numSquared)
  }
}
squareNum(numArr)
