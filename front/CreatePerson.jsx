/******************************************************************************
Title           : CreatePerson.js
Author          : Friends App
Description     : CreatePerson takes the user input, validates the input and if the input doesn't contain errors save it to the database.
******************************************************************************/

/******************************************************************************
  Libraries
******************************************************************************/
import React from 'react';
import $ from 'jquery';
import {Link, browserHistory} from 'react-router';
import { FormWithConstraints, FieldFeedback } from 'react-form-with-constraints';
import { FieldFeedbacks, FormGroup, FormControlLabel, FormControlInput } from 'react-form-with-constraints-bootstrap4';


const CreatePerson = React.createClass({
  getInitialState(){
    return {
      name: '',
      friendname: '',
      favoriteCity: '',
      isSubmitButtonDisabled: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  },

  // sets user input to state
  handleChange(e) {
    const target = e.currentTarget;
    
    // checks for errors in currentTarget
    this.form.validateFields(target);
    this.setState({
      [target.name]: target.value,
      isSubmitButtonDisabled: !this.form.isValid()
    });
  },


  handleSubmit(e) {
    e.preventDefault();

    this.form.validateFields();

    // toggles the isSubmitButtonDisabled state by checking if the form has errors
    this.setState({ isSubmitButtonDisabled: !this.form.isValid() });

    if (this.form.isValid()) {
      $.ajax({
        url:'/api/people',
        type: 'POST',
        data: {
         name: this.state.friendname,
         favoriteCity:this.state.favoriteCity,
        }
      })
      .done((data) => {
        console.log('data in test', data)
      })
      .then(() => {
        browserHistory.push('/people');
      })
    }
  },

  render() {
    return (
      <div className="container">
        <div className="well form-horizontal" style={{marginTop:'30px', backgroundColor:'#ebffff2b', minHeight:'300px'}}>
          <center>
            
            <FormWithConstraints className="col-md-7 " style={{float:'none',paddingBottom:'40px'}} ref={formWithConstraints => this.form = formWithConstraints} onSubmit={this.handleSubmit} noValidate>

              <h2> Add a new contact </h2><br/>

              <FormGroup for="friendname">

                <FormControlLabel htmlFor="friendname">Friend Name</FormControlLabel>
                <FormControlInput type="text" id="friendname" name="friendname"
                                  value={this.state.friendname} onChange={this.handleChange}
                                  required minLength={3} autoFocus/>

                <FieldFeedbacks for="friendname" style={{display:'block',height:'34px',width:'100%',position:'absolute',top:'auto', right:'auto',lineHeight:'20px',textAlign:'center', color:'#d9534f'}}>
                  <FieldFeedback when="tooShort">Too short</FieldFeedback>
                  <FieldFeedback when={value =>  !/^[a-zA-Z_ ]*$/.test(value)} required> Name should contain only letters, not numbers</FieldFeedback>
                  <FieldFeedback when="*"/>
                </FieldFeedbacks>

              </FormGroup>


              <FormGroup for="favoriteCity">
                <FormControlLabel htmlFor="favoriteCity">City</FormControlLabel>
                <FormControlInput type="text" id="favoriteCity" name="favoriteCity" value={this.state.favoriteCity} onChange={this.handleChange}
                                  required minLength={3}/>

                <FieldFeedbacks for="favoriteCity" style={{ position: 'relative',width:'auto'}}>
                  <FieldFeedback when="tooShort">Too short</FieldFeedback>
                  <FieldFeedback when={value =>  !/^[a-zA-Z_ ]*$/.test(value)} required> City should contain only letters, not numbers</FieldFeedback>
                  <FieldFeedback when="*"/>
                </FieldFeedbacks>

              </FormGroup>


            
              <button disabled={this.state.isSubmitButtonDisabled} className="btn btn-success" style={{height:'40px', width:'153px', marginRight:'2px'}}> Save <span className="glyphicon glyphicon-send"></span></button>

              <Link to="/people" className="btn btn-warning" style={{height:'40px', width:'153px'}}>Cancel</Link>


            </FormWithConstraints>
          </center>
        </div>
      </div>

    );
  }

})

export default CreatePerson;

