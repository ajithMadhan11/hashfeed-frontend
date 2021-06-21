import React from 'react';
import '../styles/card.css'
import caro2 from '../images/caro2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock,faCalendarAlt,faUser} from '@fortawesome/free-solid-svg-icons'



const Card = () => {
    return (
 
  <div className="tt">
            <div className="wrapper">
            <img className="post_pic" src={caro2} alt="" />
            <p className="post_title_text">
                Impact of cryptograpy in Environment changes
            </p>
           <span className="post_cat">
               Technology
           </span>
           <div className="post_mis">
            <span className="event_date">  <span className="icn"><FontAwesomeIcon icon={faCalendarAlt} /></span> 11.03.2000</span>
            <span className="event_time"><span className="icn"><FontAwesomeIcon icon={faClock} /></span> 11.30</span>
            <span className="event_part"><span className="icn"><FontAwesomeIcon icon={faUser} /></span> 75/100</span>
            <button className="post_btn">View Details</button>
           </div>
       </div> 
  </div>
    

    );
}

export default Card;
