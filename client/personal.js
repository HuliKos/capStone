// console.log(window.location.pathname)

// const { getToDoList } = require('../server/controller.js').getToDoList

let viewAllBtn = document.getElementById('viewCurrentBtn')

const toDoContainer = document.getElementById('#currentToDo')
const form = document.querySelector('form')

const baseURL = `http://localhost:5500/api/todos`

const toDoCallback = ({data:todos}) => displayToDo(todos)
const errCallback = err => console.log(err.response.data)


const getCurrentToDo = () => axios.get(baseURL).then(toDoCallback).catch(errCallback)
const deleteToDo = id => axios.delete(`${baseURL}/${id}`).then(toDoCallback).catch(errCallback)

function submitHandler(event) {
    event.preventDefault()

    let input = document.querySelector('#toDoInput')

    let bodyObj = {
        input: input.value
    }

    createToDo(bodyObj)

    input.value = ''
}

function createToDoCard(toDo) {
    const toDoCard = document.createElement('div')
    toDoCard.classList.add('todo-card')

    toDoCard.innerHTML = `
    <p class="toDoContent">${toDo.content}</p>
    <button onclick="deleteToDo(${toDo.id})">delete</button>
    `
    toDoContainer.appendChild(toDoCard)
}

function displayToDo(arr) {
    toDoContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createToDoCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

viewAllBtn.addEventListener('click', getCurrentToDo)





// getToDoList()