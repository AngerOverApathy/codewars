//Create a button that adds 1 to a botScore stored in localStorage 
if(!localStorage.getItem('botScore')){
    localStorage.setItem('botScore', 0)
}

document.getElementById('title').innerText = localStorage.getItem('books')
document.querySelector('button').addEventListener('click', getFetch)

// function anothaOne(){
//     let botScore = Number(localStorage.getItem('botScore'))
//     botScore = botScore + 1
//     localStorage.setItem('botScore', botScore)
// }

function getFetch(){
    anothaOne();

    const choice = document.querySelector('input').value
    const url = `https://openlibrary.org/isbn/${choice}.json`

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            let books = localStorage.getItem('books') + ";" + data.title
            localStorage.setItem('books', books)
            document.getElementById('title').innerText = localStorage.getItem('books')
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}
