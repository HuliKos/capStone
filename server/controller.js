

const toDo = require('./db.json');

let globalId = 4

module.exports = {
    getToDoList: (req, res) => {
        res.status(200).send(toDo);
    },
    postToDoList: (req,res) => {
        let {input} = req.body;
        let newToDo ={
            id:globalId,
            content: input
        }
        toDo.push(newToDo);
        res.status(200).send(toDo);
        globalId++
    }

}
