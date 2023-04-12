//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){

                // document.getElementById('main-class').innerHTML = ''

  const choice = document.querySelector('input').value.toLowerCase()
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {

        document.getElementById('spell-name').innerText = data.name

        data.classes.forEach(playerClass => {
            console.log(playerClass)

            const classLi = document.createElement('li')
            classLi.textContent = playerClass.name
            document.getElementById('main-class').appendChild(classLi)
    
        })
        
        data.subclasses.forEach(subclass => {
            console.log(subclass)
            // document.getElementById('subclasses').innerHTML = ''

            const li = document.createElement('li')
            li.textContent = subclass.name
            document.getElementById('subclasses').appendChild(li)

            })
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

}


