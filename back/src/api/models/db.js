require('dotenv').config();

const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mysql'
});

sequelize.authenticate()
.then(function() {
  console.log('Conexão realizada com sucesso!')
}).catch(function(){
  console.log('Ação não realizada com sucesso')
});

module.exports = sequelize
