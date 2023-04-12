//Create an espresso machine constructor that makes machines with 4 properties and 3 methods

class Espresso{
    constructor(color, setting, price, size){
        this.color = color
        this.setting = setting
        this.price = price
        this.size = size
    }
    steamMilk(){
        console.log('Steaming milk')
    }
    grind(){
        console.log('Grinding beans')
    }
    frothMilk(){
        console.log('Frothing milk')
    }
}

let coffee = new Espresso('black', 'drip coffee', 150, 'medium')