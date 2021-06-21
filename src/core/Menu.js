import React from 'react';
import '../styles/menu.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fab)
// #4A89DC  primary color

const Menu = () => {
    return (
        <div className="nav nav-row">
        <input type="checkbox" id="nav-check"/>
       
        
        <div className="nav-links nav-col" >
         
          <a target="_blank">Home</a>
          <a target="_blank">Dashboard</a>
          <a target="_blank">Logout</a>
        </div>

        <div className="nav-header nav-col">
          <div className="nav-title">
         <span className="logo">Hashfeed</span>
          </div>
        </div> 

        <div className="nav-social nav-col">
          <div className="nav-socilicon">
          <FontAwesomeIcon icon={['fab', 'instagram']} />
          <FontAwesomeIcon icon={['fab', 'facebook']} />
          <FontAwesomeIcon icon={['fab', 'linkedin']} />
          <FontAwesomeIcon icon={['fab', 'github']} />
          </div>
        </div>
 
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
      </div>
     
    );
}

export default Menu;

