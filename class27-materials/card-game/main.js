let deckId = ''

fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

// document.querySelector('button').addEventListener('click', drawTwo)

// function drawTwo(){
//   const choice = document.querySelector('input').value

//   const url = `https://api.nasa.gov/planetary/apod?api_key=JzpXPV9rPsbeHv95nKzwfsNA9FcgPrLVVt8AJKLx&date=${choice}`
// }


