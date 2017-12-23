import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router'

const GetOnePersonById = React.createClass({
  getInitialState(){
    return {
      searchResult:[],
      display: false,
    }
  },
  submitSearch: function (e) {
    e.preventDefault();
    this.refs.form.reset()

    $.ajax({
		  url: "/api/people/" + this.state.searchResult,
		  method:'GET'
  	})
  	.done((data)=> {
      this.setState({searchResult:data})
      if(data.name) {
        this.setState({display:true})
      }
    })
  },

	handleChange: function(e) {
	this.setState({searchResult: e.currentTarget.value})
  },

 
  render(){
    console.log('this.state:', this.state)
    return(
    <div>
      <center>

        <form onSubmit={this.submitSearch} ref="form">
          <input style={searchBar} placeholder="Enter Person Id" onChange={this.handleChange} required autoFocus/><br/>

          <button type="submit" className="btn btn-info"> Search <span className="glyphicon glyphicon-send"></span></button>
        </form>

        <div className='middle'>



        {
          (this.state.display) ?
          (<table>
            <tbody>
                <tr>
                  <td style={tableData}>ID: {this.state.searchResult.id}</td>
                  <td style={tableData}>Name: {this.state.searchResult.name}</td>
                  <td style={tableData}>City: {this.state.searchResult.favoriteCity}</td>

                  <td><Link to={'/update-info/' + this.state.searchResult.id}><button className="btn btn-success">Update</button></Link></td>

                  <td><Link to={'/delete-user/' + this.state.searchResult.id}><button className="btn btn-danger">Delete</button></Link></td>
                </tr>
              </tbody> 
        </table>):
          (null)
        }
        

        </div>
        <div className="searchEmpty-container"></div>
      </center>
    </div>
    )
  }
})

var tableData = {
  width: "250px",
  height: "20px",
  padding: "10px",
}

var searchBar = {
  width: "250px",
  fontFamily: "neutra-book",
  width: "325px",
  marginBottom: "3px",
  borderRadius: "32px",
  paddingLeft: "15px",
  outline: "0",
  height: "48px",
  fontWeight: "600",
  fontSize: "25px",
  transition: "all 250ms ease-out",
}

export default GetOnePersonById;