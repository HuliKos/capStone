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
    seed: (req,res) =>{
    sequelize.query(`
    drop table if exists journal;

    create table journal (
        journal_id serial primary key,
        date VARCHAR(55),
        journal_content VARCHAR(1000)
    );
    INSERT INTO journal (date, journal_content)
    VALUES
    ('2023-01-01', 'content1'),
    ('2023-01-02', 'content2'),
    ('2023-01-03', 'content3'),
    ('2023-01-04', 'content4'),
    ('2023-01-05', 'content5'),
    ('2023-01-06', 'content6'),
    ('2023-01-07', 'content7');
    `)
    .then(() => {
    console.log('DB seeded!')
    res.sendStatus(200)
}).catch(err => console.log('error seeding DB', err))

}}
