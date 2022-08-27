//           ~CHALLENGE 1~
//grab just the initials from a full name
//i.e Andrew Jackson should print as A.J.

function abbrevName(name){
    //take the first letter of each word
    //return initials with period
    let fullName = name.split(' ')
    return (fullName[0][0] + '.' + fullName[1][0] + '.').toUpperCase()
  }

console.log(abbrevName('Andrew Jackson'), 'A.J.')
console.log(abbrevName('Julius Ceasar'), 'J.C.')
console.log(abbrevName('Harley Quinn'), 'H.Q.')