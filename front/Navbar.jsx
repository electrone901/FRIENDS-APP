import React from 'react';
import {Link} from 'react-router';


{/*NAVIGATION BAR*/}
var Navbar = React.createClass({
  render: function() {
    return (
      <div>
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="NamenavbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

           <a href="/">
           <img  src="http://www.freeindex.co.uk/aspjpeg/showimage.asp?img=logo.jpg&folder=listingpics/692/506/&maxW=230&maxH=80" style={{paddingRight:'80px'}}/>
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link" style={{paddingRight:'30px', fontSize:'medium'}}>Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/people" className="nav-link" style={{paddingRight:'30px', fontSize:'medium'}}>Contacts</Link>
              </li>
              <li className="nav-item">
                <Link to="/add-new-person" className="nav-link" style={{paddingRight:'30px', fontSize:'medium'}}>New contact</Link>
              </li>
              <li className="nav-item">
                <Link to="/search-by-id" className="nav-link" style={{paddingRight:'30px', fontSize:'medium'}}>Search id</Link>
              </li>
              <li className="nav-item">
                <Link to="/search-by-name" className="nav-link" style={{paddingRight:'30px', fontSize:'medium'}}>Search name</Link>
              </li>
            </ul>


          </div>
        </nav>

      </div>
    )
  }
})


export default Navbar;
