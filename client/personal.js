const viewAllBtn = document.getElementById('viewCurrentBtn')
const toDoContainer = document.getElementById('currentToDo')
const form = document.querySelector('form')

const baseURL = `http://localhost:5050/api/todos`

const getCurrentToDo = () => {
    toDoContainer.innerHTML =``

    axios.get(baseURL)
    .then((res) => {let data = res.data
        // console.log(data)
      
        for(let i=0; i<res.data.length; i++) {
            const toDoList = document.createElement('div')
            toDoList.innerHTML = `
            <h1>${data[i].content}</h1>
            `
            toDoContainer.appendChild(toDoList)
        }
    })
    .catch((err) => console.log(err))
}

const createToDo = (body) =>{
    axios.post(baseURL,body)
    .then((res) => {getCurrentToDo()})
    .catch((err) => console.log(err))
}

function submitHandler(event) {
    event.preventDefault()

    let input = document.querySelector('#toDoInput')

    let bodyObj = {
        input: input.value
    }

    createToDo(bodyObj)

    input.value = ''
}

form.addEventListener('submit', submitHandler)
viewAllBtn.addEventListener('click', getCurrentToDo)