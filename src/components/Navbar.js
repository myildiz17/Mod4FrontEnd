
import React from 'react';

import { Link } from 'react-router-dom'


class Navbar extends React.Component {
  render() {
    // console.log(this.props)
    // const noteStyle = {border: '1px solid black', padding: '2%', margin: '15px 100px 15px 100px'}
    return (
      <div class="navbar navbar-expand-sm navbar-dark bg-primary mb-1">
        <a class="navbar-brand" href="#">FlatNote</a>
         <ul class="navbar-nav"> 
           <li class="nav-item">
             <Link class="nav-link" to='/notes/new'>
            New Note                
          </Link>
          </li>
         
          <li class="nav-item">
          <Link class="nav-link" to='/notes'>
            All Notes         
          </Link>
          </li>
          
          <li class="nav-item">
          <Link class="nav-link" to='/login'>
            Log In
          </Link>
          </li>
          
           </ul> 
      </div>
    );
  }
}

export default Navbar;