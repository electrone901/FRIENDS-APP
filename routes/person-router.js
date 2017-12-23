const Person = require('../models/person-model');
const express = require('express');
const router = express.Router();

//GET ALL PEOPLE PATH: /api/people
const getAllPeople = (req,res)=>(
  Person.findAll()
  .then((data)=>
   	res.send(data)
   	)
  )


//GET ONE PERSON
const getOnePerson = (req,res)=> {
	Person.findById(req.params.id)
	.then((data)=>
   	res.send(data)
   	)
}


//POST ONE PERSON
const createOnePerson = (req,res)=>{
	Person.create({
		name: req.body.name,
		favoriteCity: req.body.favoriteCity
	})
	.then((data)=>{res.send(data)})
}


//UPDATE
const updatePerson = (req, res) => {
	Person.findOne({where: {id: req.params.id}})
		.then((personInfo) => personInfo.update({
			name: req.body.name,
			favoriteCity: req.body.favoriteCity
		})
		)
		.then((data) => res.send(data));
};

// DELETE A PERSON
const deletePerson = (req,res)=>{
	Person.destroy({where:{id:req.params.id}})
	.then((id)=>{res.send(id.name + ' has been deleted!')})
}

//SEARCH  any:key I defined,use to access the req. 
const searchByName = (req,res)=>{
	Person.findAll({
	  where: {
	    name: {
	      $ilike: '%' + req.params.name + '%'
		}
	  }
	})
	.then((data)=>res.send(data))
}


//ROUTES//
router.route('/')
 .get(getAllPeople)
 .post(createOnePerson)


router.route('/:id')
 .get(getOnePerson)
 .delete(deletePerson)
 .put(updatePerson)


router.route('/search/:name')
.get(searchByName)



module.exports = router