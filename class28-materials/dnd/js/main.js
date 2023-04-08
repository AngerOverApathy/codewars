//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value.toLowerCase()
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {

        document.getElementById('spell-name').innerText = data.name

        // data.classes.forEach(playerClass => {
        //     const className = document.getElementById('class')
        //     className.innerText = playerClass
    
        // })
        
        data.subclasses.forEach(subclass => {
            console.log(subclass)
            
            document.querySelector('ul').innerHTML = ''

            const li = document.createElement('li')
            li.textContent = subclass.name
            document.querySelector('ul').appendChild(li)

            })
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

}


