import React from 'react';
import {Link} from 'react-router';

const WelcomePage = React.createClass({
	render(){
		return(
			<div>
			  <img style={backgroundImg}  src="http://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/14/2016/04/free-nyc-700x430.jpg" />
				<center>
				<header>
        <div className="container-local">
        	<div className="intro-text-i">
						<div className="row-i">
            	<div className="col-lg-12">
              	<div className="intro-message-local">
                	<center><h1 style={title}>Welcome To Friends Application it simplifies </h1><br/>
                  <h2 style={title2}> management of your friend lists</h2><br/></center>
                       <Link to="/people"><input style={button1} type="button" value="Explore"/></Link>
                       <a href="https://docs.google.com/document/d/1oEHkFrLh9xfSzniOyGh2J_K_TlxzqUGNxXnI5cu-BSQ/edit?usp=sharing"target="_blank"><input style={button1} type="button" value="Get Instructions"/></a>

                   </div>
               </div>
           </div>

            </div>
        </div>
    </header>
    </center>
	</div>
			)
	}
})


var title = {
  marginTop: "-480px",
  fontWeight: "900",
  fontFamily: "Roboto", 
  fontSize: "43px",
  color: "white",
  textTransform: "uppercase",
  backgroundColor: "rgba(2, 3, 4, 0.5)",
  width:'fit-content',
}
var title2 = {
  fontWeight: "900",
  fontFamily: "Roboto", 
  fontSize: "38px",
  color: "#32ff04",
  textTransform: "uppercase",
  marginTop: "-11px",
  backgroundColor: "rgba(4, 51, 84, 0.62)",
  width:'fit-content',
}


var button1 = {
  fontFamily: "Roboto", 
 	width: "200px",
 	height: "40px",
  fontSize: "18px",
  lineHeight: "1.3333333",
  borderRadius: "6px",
  backgroundColor: "#fff",
  borderColor: "#ccc",
  color: '#f20789',
}

var backgroundImg = {
  width: "100%",
  height: "800px",
  marginTop: "-17px",
  backgroundAttachment: "fixed",
}



export default WelcomePage