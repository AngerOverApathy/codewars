// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism 

class Contractor{
    constructor(name, role){
        this._name = name
        this._role = role
    }
    get name(){
        return this._name
    }
    get role(){
        return this._role
    }
    code(){
        console.log('I am coding')
    }
}

class FrontEnd extends Contractor{
    constructor(name, role, level){
        super(name, role)
        this._level = level
    }
    get level(){
        return this._level
    }
    design(){
        console.log('I am designing')
    }
    code(){
        super(code)
        console.log('I am coding the front end')
    }
}

class BackEnd extends Contractor{
    constructor(name, role, tech){
        super(name, role)
        this._tech = tech
    }
    get tech(){
        return this._tech
    }
    makeData(){
        console.log('Making a databank')
    }
}

let bobbinson = new Contractor('Bobbery', 'PM')
let coddy = new FrontEnd('Cody', 'Frontend Dev', 'mid')
let doby = new BackEnd('Dobes', 'BackEnd', 'MYSQL')

let agency = [bobbinson, coddy, doby]

for(contract of agency){
    code()
}


























// class Contractor{
//     constructor(name,role){
//         this._name = name
//         this._role = role
//     }
//     get name(){
//         return this._name
//     }
//     get role(){
//         return this._role
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs!`)
//     }
// }
// class Front extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// class Back extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// let bob = new Contractor('Bob','Front-end')
// let simba = new Front('Simba','Front-end','React')
// let machi = new Back('The Machine','Back-end','Node')

// let agency = [bob,simba,machi]

// for(person of agency){
//     person.sayHello()
// }
