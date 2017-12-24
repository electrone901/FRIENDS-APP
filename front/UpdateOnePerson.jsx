/******************************************************************************
Title           : UpdateOnePerson.js
Author          : Friends App
Description     : UpdateOnePerson gets id through props  takes the user input, validates the input and if the input doesn't contain errors save it to the database.
******************************************************************************/

/******************************************************************************
  Libraries
******************************************************************************/
import React from 'react';
import {Link, browserHistory} from 'react-router';
var $ = require('jquery');

var UpdateOnePerson = React.createClass({
  getInitialState() {
    return ({
      person1: null,
      name:null,
      favoriteCity:null,
      personId:null,
      editing: false,
      inputText: false,
    })
  },

  componentDidMount: function () {
    $.ajax({
      url: "/api/people/"+ this.props.params.personId,
      method: 'GET'
    })
    .done((data)=> {
      this.setState({
        person1:data,
        personId: data.id,
        favoriteCity: data.favoriteCity,
        name: data.name,
      })
     }
    )
  },



  handleChange(inputField, e) {
    console.log('typing:', e.target.value)
    this.setState({
      [inputField]: e.target.value,
    })
  },


  handleEditing() {
    this.setState({
      editing:true,
      inputText: true,
    })
  },


  cancelEditing(){
    this.setState({
      editing:false,
      inputText:false,
    })
    
  },

  cancelUpdate() {
    browserHistory.push('/people');
  },



  submitUpdate(e) {
    console.log('this.state.personId:', this.state.personId)

    $.ajax({
      url: '../api/people/' + this.state.person1.id,
      type: 'PUT',
      data: {
        name: this.state.name,
        favoriteCity: this.state.favoriteCity
      }
    })
    browserHistory.push(`/successfuly-updated/${this.state.personId}`)
  },

  



  
  render() {
    console.log('stateLuis:', this.state)

    return (
      <div className="container">

        <div className="card-body">
          <div className="card-header">

          { 
              (this.state.inputText) ? 
              (
                <span>
                  <img onClick={this.cancelEditing} title="Cancel" style={{border: '0px',width: '100px'}}  className="img-responsive pull-right" src='https://cdn4.iconfinder.com/data/icons/meBaze-Freebies/512/delete.png' />
                </span>
              ):
              (<p></p>) 
            }

            <span>
              <img onClick={this.handleEditing} title="Edit this post" style={{border: '0px',width: '100px'}}  className="img-responsive pull-right" src='http://icons.iconarchive.com/icons/osullivanluke/orb-os-x/512/Text-Edit-icon.png' />
            </span>

            <center>
          <h3>Update this person's information by clicking the image</h3><br/><br/><br/>

            
          <form onSubmit={this.submitUpdate} style={{fontFamily:'fantasy'}}>

            {/*  UPDATES NAMES    */}
            <h4><strong>Name: </strong> {this.state.name}</h4>
            { 
              (this.state.inputText) ? 
              (
                <input 
                  onChange={this.handleChange.bind(this, 'name')} 
                  type="text" 
                  value={this.state.name} 
                  style={{backgroundColor:'rgba(5, 244, 222, 0.36)'}}
                  className="col-md-12" 
                  required/>
              ):
              (null) 
            }<br/><br/>


            <h4><strong>City: </strong>{this.state.favoriteCity}</h4>
            { 
              (this.state.inputText) ? 
              (
                <input 
                  onChange={this.handleChange.bind(this, 'favoriteCity')} 
                  type="text" 
                  value={this.state.favoriteCity} 
                  style={{backgroundColor:'rgba(5, 244, 222, 0.36)'}} 
                  className="col-md-12" 
                  required/>
              ):
              (null) 
            }<br/><br/>

            {/*  SAVE BUTTON    */}
            { 
              (this.state.inputText) ? 
              (
                <button onClick={this.submitUpdate} type="submit" className="btn btn-success" style={{width:'222px', fontSize:'20px'}}>Save</button>
              ):
              (<p></p>) 
            }

            {/*  CANCEL BUTTON    */}
            { 
              (this.state.inputText) ? 
              (
                <button onClick={this.cancelUpdate} className="btn btn-warning" style={{width:'222px', fontSize:'20px'}}>Cancel</button>
              ):
              (<p></p>) 
            }


         </form>
        </center>  
          </div>
        </div>


        
      </div>
    )
  }
})

export default UpdateOnePerson;

