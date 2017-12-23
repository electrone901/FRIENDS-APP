const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');
const Person = require('../models/person-model');

//Person.sync will create the person table
Person.sync({force: true})
//add the following Person to the database:
.then((data) => Person.bulkCreate([

  {
  	name: 'Sean',
  	favoriteCity: 'New York'
  },

  {
  	name: 'Mary',
  	favoriteCity: 'Boston'
  },

  {
  	name: 'Joe',
  	favoriteCity: 'Tokio'
  },

  {
  	name: 'Andrey',
  	favoriteCity: 'Indiana'
  },



  {
  	name: 'Sean Dlay',
  	favoriteCity: 'New Jersey'
  },

  {
  	name: 'Phill',
  	favoriteCity: 'Chicago'
  },

  {
  	name: 'Sabrina',
  	favoriteCity: 'New York'
  },

  {
  	name: 'Angela',
  	favoriteCity: 'New York'
  },

]))
.catch((err) => console.log(err));


