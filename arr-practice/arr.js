// Challenge: 
// 1. Create an array - favouriteSongs[] -  and add your 3 favourite songs using push()
// 2. Log out the last song in the array, and make it so that your solution will log out the last one regardless of how many items there are in the array
// 3. Invoke the pop method on your created array. What values do you have left in the array? 
// let favoriteSongs = []
// favoriteSongs.push('Hell Above')
// favoriteSongs.push('Chasing The Wind')
// favoriteSongs.push('Bad Blood')
// console.log(favoriteSongs[favoriteSongs.length -1])
// favoriteSongs.pop()
// console.log(favoriteSongs)

// Challenge:
// Here's a list of 5 most popular songs on Spotify.
// 1) Check if any song has won a Grammy
// 2) Check if all the songs were streamed for at least 1.5 million times
// Note: the timesStreamed value is already in million
// const songs = [
//     {song: "Shape of You", timesStreamed: 2.384, wonGrammy: true},
//     {song: "One Dance", timesStreamed: 1.791, wonGrammy: false},
//     {song: "Rockstar", timesStreamed: 1.781	, wonGrammy: false},
//     {song: "Closer", timesStreamed: 1.688, wonGrammy: false},
//     {song: "Thinking Out Loud", timesStreamed: 1.461, wonGrammy: true}
// ]
// console.log(songs.some(grammy => grammy.wonGrammy ))
// const allMegaHits = songs.every(song => song.timesStreamed > 1.5)

// Challenge: 
// Use reduce() to sum the weights of all the cars
// Stretch goal: 
// Use reduce to sum the weights of only the electric cars 
// const cars = [
//     { name: "Toyota", isElectric: false, weight: 1320 },
//     { name: "Ford", isElectric: false, weight: 1400 },
//     { name: "Volkswagen", isElectric: false, weight: 1370 },
//     { name: "Honda", isElectric: false, weight: 1375 },
//     { name: "Tesla", isElectric: true, weight: 1750 },
//     { name: "BMW", isElectric: true, weight: 1350 },  
//   ];
//   const carTotals = cars.reduce((acc, car)=>{
//       return acc + car.weight
//   }, 0)
//   console.log(carTotals)
//   const electricCarTotals = cars.reduce((acc, car)=>{
//       if(car.isElectric){
//          acc += car.weight 
//       }
//       return acc
//   }, 0)
//   console.log(electricCarTotals)