
import React from 'react';
var $ = require('jquery');
import {Link} from 'react-router';



var Persons = React.createClass({
 getInitialState() {
    return ({persons: []})
  },

componentDidMount: function () {
  $.ajax({
      url: "/api/people",
      method: 'GET',
    })
    .done((data)=>{
      this.setState({persons:data})
      console.log('data:', data)
    })
  },

  render() {
    return (
      <div className="container">
	      <center><h1 style={title}>Friends List</h1></center>
        <table>
          <thead>
            <tr>
              <th style={tableData}>ID</th>
              <th style={tableDataTwo}>Name</th>
              <th style={tableData}>City</th>
              <th style={tableData}>Actions</th>
            </tr>
          </thead>
        </table>


	    {/*  {this.state.persons.map((ele,i)=>{
          return <table key={i}>
              
              <tbody>
                <tr>
                  <td style={tableData}>{ele.id}</td>
                  <td style={tableData}>{ele.name}</td>
                  <td style={tableData}>{ele.favoriteCity}</td>

                  <td><Link to={'/update-info/' + ele.id}><button className="btn btn-success">Update</button></Link></td>
                  
                  <td><Link to={'/delete-user/' + ele.id}><button className="btn btn-danger">Delete</button></Link></td>
                </tr>
              </tbody> 
          </table>

        })}
      */}

        {this.state.persons.map((ele,i)=>{
          return <div key={i}>
              <tr>
                <td style={tableHeaders}>{ele.id}</td>
                <td style={tableHeaders}>{ele.name}</td>
                <td style={tableHeaders}>{ele.favoriteCity}</td>

                <td><Link to={'/update-info/' + ele.id}><button className="btn btn-success">Update</button></Link></td>
                
                <td><Link to={'/delete-user/' + ele.id}><button className="btn btn-danger">Delete</button></Link></td>
                
              </tr>
             <hr/>
          </div>
               

        })}

        



        
      </div>
    )
  }
})
var title = {
  backgroundColor: "rgba(0, 255, 102, 0.88)",
}
var lineStyle = {
  border: '1px solid rgba(168, 248, 245, 0.65)',
  backgroundColor: 'rgba(168, 248, 245, 0.65)',
  width: '100%',
  float: 'center',
}

var tableData = {
  width: "31%",
  height: "20px",
  padding: "10px",
  paddingRight: "0px",
  paddingLeft: "0px",
  align:"center",
}
var tableDataTwo = {
  width: "33%",
  height: "20px",
  padding: "10px",
  paddingRight: "0px",
  paddingLeft: "0px",
  align:"center",
}
var tableHeaders = {
  width: "29%",
  height: "20px",
  padding: "10px",
  paddingRight: "0px",
  paddingLeft: "0px",
  align:"center",
}
export default Persons;

