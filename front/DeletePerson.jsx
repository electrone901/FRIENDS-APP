import React from 'react';
import {Link} from 'react-router';
var $ = require('jquery');


var DeletePerson = React.createClass({
 getInitialState() {
    return ({persons: []})
  },

componentDidMount: function () {
    $.ajax({
      url: "/api/people/"+ this.props.params.personId,
      method: 'DELETE',
    })
    .done((data)=>this.setState({persons:data}))
  },
  
  render() {

    return (
      <div className="container">
        <div className="alert alert-success" role="alert">
          <h3>Great news!</h3>
          <hr/>

          <div className="jumbotron">
            <h2 className="display-3">This user has been successfully delete!</h2><br/>
            <hr className="my-4"/>

            <p className="lead">
              <Link to={'/people'}><button className="btn btn-primary btn-lg">Return Home</button></Link>
            </p>
          </div>
        </div>
       </div>
    )
  }
})

export default DeletePerson;

