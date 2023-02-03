const Sequelize = require('sequelize');
const sequelize = new Sequelize('pay', 'user', 'root',{
    dialect:'sqlite', 
    host: './payapi.localhost',
})

module.exports = sequelize;