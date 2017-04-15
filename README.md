# FRIENDS APP
Developed a web app that facilitates and simplifies management of your friend lists. Built features for add, delete, read and edit friends from the list using Sequelize, PostgreSQL, and React.
Implemented AJAX calls from a RESTful JSON API to connect to the React front end for seamless updates. Multi Page web app capable of request and response different resources using react-router.

I wrote both a client and a server based on the RESFUL architectural style. REST-compliant Web services allow requesting systems to access and manipulate textual representations of Web resources using a uniform and predefined set of stateless operations. 

Friends App can make HTTP requests to a specific endpoints and the server can respond to those HTTP requests to specific endpoints based on the request.
#### Live Demo: https://thawing-sea-97475.herokuapp.com

#### Preview ![Alt text](/friends.jpg?raw=true "Optional Title")



#### The client will be able to do the following in order:
1. `Make a GET request to /people
1. `Make a POST request to /people
1. `Make an edit POST request to /people
1. `Make a delete POST request to /people

#### API Endpoints
The person object have the following attributes: id, name : “Sean”, favoriteCity : “New York”
The API endpoints are the following: 
1. `/api/people` GET all people
1. `/api/people/:id` GET a specific person by id
1. `/api/people/` POST (create) a new person
1. `/api/people/:id` DELETE a person by id
1. `/api/people/:id` PUT (update) a specific person's info


### API INSTRUCTIONS
Once the page loads it should land on the welcome page
Every time the app loads the server will create a new database with one person in the list with:  id:1  name: Sean  favoriteCity: New York    
To test the app and get the full experience create a few more persons

### To  get all people:
Make an API get request to the following link: https://thawing-sea-97475.herokuapp.com/api/people   the server will respond with a JSON file of an array of objects, this file contains  all people in the database .  To see it in action just click on the navigation bar “Get People List” this will make a get request to the server API using the following route path:  /api/people  

### To get one person by id:
Make an API get request to the following link: https://thawing-sea-97475.herokuapp.com/api/people/1   the server will respond with a JSON file of one object that contains the person’s info. *Note: the last number or number 1  is the id of the person and it is programmatically set to get any id. To see it in action click on “Get a Person By Id”  this will make a get request, the server will respond with an  specific person’s information by id using the path:  /api/people/:id       *Note: the search is case sensitive so if you are looking for a specific person’s name  make sure to spell it correctly, at  least the first characters. The server will respond with any records that matches the search request. If you enter any characters, the server will return any records that contains that character. 
### To get one person by name:
Make an API get request to the following link: https://thawing-sea-97475.herokuapp.com/api/people/search/Sean  the server will respond with a JSON file of an array of objects. Sean is the person’s name we are searching for and it is set to programmatically take any name. So go ahead and try a different name that you currently have in the database. If you don’t have one make one. To see it in action click on “Search By Name”  and type the person’s name that you wish to search.  This will make a get request using the path:  /api/people/search/:name       *Note: the search is case sensitive so if you are looking for a specific person’s name  make sure to spell it correctly, at  least the first characters. The server will respond with any records that matches the search request. If you enter any characters, the server will return any records that contains that character. 
### To create a person without a frontend:
You need to use toolchain for API developers something like Postman. If you have Postman, open it and in the search bar of Postman type: https://thawing-sea-97475.herokuapp.com/api/people set the method as “POST” request, under the search bar click body  and  x--www-form-urlencoded. In the first input row add name and its value. Example: name: Sean. In the second input row add favoriteCity and its value. Example:favoriteCity: Brooklyn. Don’t worry about the id, it is auto generate. To see it in action click on  “Add A New Person”  this will make a post request, the server will take your input and create a new person using the following path: /api/people/
### To delete a person without a frontend:
You need to use Postman. Type: https://thawing-sea-97475.herokuapp.com/api/people/1 set the method as “DELETE” request and click enter to delete it. The number 1 it’s the person id and it is set to programmatically delete any id that exist in the database. To see it in action click on the button  “Delete” next to the person you want to delete, this will make a delete request and the server will delete the user from the database using the following path: /api/people/:id
### To update a person without a frontend:
You will need Postman. If you have Postman open it and in the search bar of Postman type: https://thawing-sea-97475.herokuapp.com/api/people set the method as “PUT” request, under the search bar click body  and  x--www-form-urlencoded. In the first input row add name and its value. Example: name: NewName. In the second input row add favoriteCity and its value. Example: favoriteCity: newFavoriteCity. Click enter to update. Don’t worry about the id, it auto generates. To see it in action go to “Get People List”  click on the button  “Update” next to the person you want to delete, this will make a PUT request and the server will delete the user from the database using the following path: /api/people/:id
