//Create an a class and extend it - Can be anything you would like it to be! 

class Rodent extends Animal{
    constructor(name, size){
        super(name)
        this.size = size
    }
    burrow(){
        console.log('I am burrowing')
    }
}