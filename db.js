
const Sequelize = require('sequelize');

//CREATE DB CONNECTION FOR HEROKU OR LOCAL
// const sequelizeConnection = new Sequelize('postgres://ctp_user@localhost:5432/spotify');
const sequelizeConnection = new Sequelize(process.env.DATABASE_URL);


//TESTING CONNECTION 
sequelizeConnection
.authenticate()
.then((err) => console.log('Sequelize connection successful'))
.catch((err) => console.log('Unable to connect to the database:', err));


module.exports = sequelizeConnection;
