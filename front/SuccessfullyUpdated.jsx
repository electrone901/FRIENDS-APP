import React from 'react';
var $ = require('jquery');
import {Link} from 'react-router';

var SuccessfullyUpdated = React.createClass({
 getInitialState() {
    return ({person: null})
  },

componentDidMount: function () {
    $.ajax({
      url: "../api/people/"+ this.props.params.personId,
      method: 'GET',
    })
    .done((data)=>this.setState({person:data}))
  },
render() {
  console.log('SUCCESFUL GETTING ID?', this.state.person ?  this.state.person: 'NO DATA')
  console.log('what u getting props', this.props.params.personId)
  console.log('data:', this.state)
  return (
    <div className="container">
      <h1>This User has been Successfuly Updated! Here is the new changes. </h1>

      
      {
        (this.state.person) ?
        (<h4><strong>Name: </strong> {this.state.person.name}</h4>):
        (null)
      }
      <Link to="/people"><input type="button" value="Return home"/></Link>
    </div>
  )
 }
})
var SuccessfullyUpdated = React.createClass({
 getInitialState() {
    return ({person: null})
  },

componentDidMount: function () {
    $.ajax({
      url: "../api/people/"+ this.props.params.personId,
      method: 'GET',
    })
    .done((data)=>this.setState({person:data}))
  },
render() {
  console.log('SUCCESFUL GETTING ID?', this.state.person ?  this.state.person: 'NO DATA')
  console.log('what u getting props', this.props.params.personId)
  console.log('data:', this.state)
  return (
    <div className="container">
      {/*Display Person info or null*/}
      {
        (this.state.person) ?
        (<PersonInfo person={this.state.person} />):
        (null)
      }

    </div>
  )
 }
})


function PersonInfo(props) {
  return(

    <div className="container">

     <div className="alert alert-success" role="alert">
        <h4 className="alert-heading" > Well done!</h4>
        <h3>Successfuly Updated!</h3>
        <hr/>

        <div className="jumbotron">
          <h2 className="display-3">Here are the new changes:</h2><br/>
          <p className="lead">Name: {props.person.name}</p>
          <p className="lead">City: {props.person.favoriteCity}</p>
          <p className="lead">Contact id: {props.person.id}</p>
          <p className="lead">Updated at: {props.person.updatedAt}</p>
          <hr className="my-4"/>

          <p className="lead">
            <Link to="/people" style={{paddingRight:'20px'}}>
              <button className="btn btn-success btn-lg">Return home</button>
            </Link>

            <Link to={'/update-info/' + props.person.id}>
              <button className="btn btn-primary btn-lg">Update again</button>
            </Link>
          </p>
        </div>
      </div>
    </div>

  )

}

export default SuccessfullyUpdated;



