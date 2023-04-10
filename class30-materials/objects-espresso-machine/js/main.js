//Create an espresso machine constructor that makes machines with 4 properties and 3 methods

class Espresso{
    constructor(bean, setting, steamer, frother){
        this.bean = bean
        this.setting = setting
        this.steamer = steamer
        this.frother = frother
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

let coffee = new Espresso('blonde', 'drip coffee', false, 'dry')