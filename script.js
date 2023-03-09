function MakePizza(pizzaToppings, pizzaCrust, pizzaSeasoning, pizzaReady){
    this.toppings = pizzaToppings
    this.crust = pizzaCrust
    this.seasoning = pizzaSeasoning
    this.ready = pizzaReady
    this.burn = function(){
        console.log("I'm burning your mouth!")
    }
    this.deliveryTime = function(){
        console.log('Your pizza is ready!')
    }
    this.consume = function(){
        console.log("You're eating me!")
    }
}