//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
    .then(res => res.json())
    .then(data => {
        console.log(data.drinks[0])
        // document.querySelector('h2').src = data.strDrink
        // document.querySelector('img').src = data.strImageSource
        // document.querySelector('h3').src = strInstructions
    })
    .catch(err => {
        console.log(`error ${err}`)
    })