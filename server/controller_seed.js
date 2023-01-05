require('dotenv').config()
const {CONNECTION_URI} = process.env
const Sequelize = require('sequelize');

const sequelize = new Sequelize(CONNECTION_URI, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized:false
        }
    }
});


module.exports = {
    getPastJournal: (req,res) =>{
        let {input} = req.body
        console.log(input)

        sequelize.query(`
        SELECT * FROM journal
        WHERE date = '${input}'
        `)
    .then(dbRes => res.status(200).send(dbRes[0]))
    .catch(err => console.log(err))
    },
    
}
