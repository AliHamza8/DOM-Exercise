// Question 1
// let btnText = document.querySelector('.btn-text')
// let text = document.querySelector('.textbox')
// let cont = document.querySelector('.container')

// btnText.addEventListener('click', function() {
//     let p = document.createElement('p')
//     let addTextNode = document.createTextNode("Welcome " + text.value + " !")
//     p.appendChild(addTextNode)
    
//     cont.appendChild(p)
//     p.style.marginTop = '3rem'
//     p.style.marginLeft = '7rem'
//     p.style.fontSize = '1.7rem'
//     p.style.color = 'pink'
//     p.style.padding = '2rem'
// })

// Question 2 Removing an item
// let container = document.querySelector('.container')
// let item = document.querySelector('.remove-item')
// let btn = document.querySelector('.btn-remove')

// btn.addEventListener('click', function() {
//     // container.removeChild(item)
//     item.style.opacity = '0'
//     let newBtn = document.createElement('button')
//     let addText = document.createTextNode('Display')
//     newBtn.appendChild(addText)
//     container.appendChild(newBtn)
    
//     newBtn.classList.add("btn")
//     newBtn.classList.add("btn-success")
//     newBtn.classList.add("mt-3")
//     newBtn.classList.add("ms-1")

//     newBtn.addEventListener('click', function() {
//     item.style.opacity = '1'
//     container.removeChild(newBtn)
// })
// })

// Question 3 Replacing an item
// let container = document.querySelector('.container')
// let item = document.querySelector('.remove-item')
// let btn = document.querySelector('.btn-remove')

// btn.addEventListener('click', function() {
//     let newEl = document.createElement('p')
//     let newText = document.createTextNode('Now the danger is gone...')
//     newEl.appendChild(newText)
//     container.replaceChild(newEl, item)
//     newEl.classList.add('text-success')
    
//     btn.textContent = 'Yipee!'
//     btn.classList.remove('btn-warning')
//     btn.classList.add('btn')
//     btn.classList.add('btn-success')
// })

