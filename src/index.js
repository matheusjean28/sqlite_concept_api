const express = require('express');
const sequelize = require('./config/database');
const { Sequelize } = require('./config/database');
const app = express();


app.use(express.json());

sequelize.sync().then(()=> {
    console.log('connected at SQLIte dB 🌀')
}).catch((err)=>{
    console.log('error log: ',err )
})

app.get('/', (req, res) => {
    res.json({message: 'well done brou 🔥'})
})

app.listen(3333, ()=> {
    console.log('app is runing on port 3333🔥');
})