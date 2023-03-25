const change = document.querySelectorAll(".list-item")
// change.style.color = "red"

const theHeading = document.querySelector('#main-heading')
theHeading.style.color = 'white'

for (let i = 0; i < change.length; i++) {
    change[i].style.color = "white"
}

// Creating Elements

const ul = document.querySelector('ul')
const li = document.createElement('li')

// Modyfying the Text

ul.append(li)
li.innerText = 'New series'

// Modifying Attributes & Classes
li.classList.add('list-item')
console.log(li.classList.contains('list-item'))