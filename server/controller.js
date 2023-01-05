const toDo = require('./db.json');

module.exports = {
    getToDoList: (req, res) => {
        console.log('hello')
        res.status(200).send(toDo);
    },
    deleteToDo: (req,res) => {
        let toDoIndex = toDoList.findIndex(el => el.id == +id)
        console.log(toDoIndex)
    }
}
