const toDo = require('./db.json');

module.exports = {
    getToDoList: (req, res) => {
        res.status(200).send(toDo);
    },
    deleteToDo: (req,res) => {
        let toDoIndex = toDoList.findIndex(el => el.id == +id)
        console.log(toDoIndex)
    }
}
