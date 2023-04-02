let numArr = [1,3,6,3,8,9,10,14,16,17,19]

function filterRange(arr, a, b){
    return arr.filter(item => item >= a && item <=b)
}

console.log(filterRange(numArr, 3, 17))