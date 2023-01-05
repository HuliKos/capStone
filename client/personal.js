const viewAllBtn = document.getElementById('viewCurrentBtn')
const toDoContainer = document.getElementById('currentToDo')
const form1 = document.getElementById('form1')
const form2 = document.getElementById('form2')
const pastJournalInput = document.getElementById('dateInput')
const journalContainer = document.getElementById('pastJournalHere')


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

const pastJournal = (event) =>{
    event.preventDefault()

    let bodyObj ={
        input: pastJournalInput.value
    }

    
    axios.post(`http://localhost:5050/journal`,bodyObj)
    .then((res) => {let data = res.data
        console.log(res.data[0].journal_content)
        journalContainer.innerHTML =``
        
        for(let i=0; i<data.length; i++) {
            const journal = document.createElement('div')
            journal.innerHTML = `
            <h1>${data[0].journal_content}</h1>
            `
            journalContainer.appendChild(journal)
        }
        })
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

form1.addEventListener('submit', submitHandler)
viewAllBtn.addEventListener('click', getCurrentToDo)
form2.addEventListener('submit', pastJournal)







const siteInfoBtn = document.querySelectorAll('.details')
console.log(siteInfoBtn)

function tbd(event) {
    alert('The information will be added at phase 2 of site development.')
}
for(i=0; i<siteInfoBtn.length; i++){
    siteInfoBtn[i].addEventListener('click', tbd)
}