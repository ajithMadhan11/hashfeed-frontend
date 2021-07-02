import React from 'react';
import '../styles/card.css'
import caro2 from '../images/caro2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock,faCalendarAlt,faUser,faTags} from '@fortawesome/free-solid-svg-icons'



const Card = ({title,category,date,participants,image}) => {
    return (
 
  <div className="tt">
            <div className="wrapper">
            <img className="post_pic" src={image} alt="" />
            <p className="post_title_text">
               {title}
            </p>
           <span className="post_cat2">
              <strong><FontAwesomeIcon icon={faTags} /> {category}</strong>
           </span>
           <div className="post_mis">
            <span className="event_date">  <span className="icn"><FontAwesomeIcon icon={faCalendarAlt} /></span> &nbsp;{ date}</span>
            {/* <span className="event_time"><span className="icn"><FontAwesomeIcon icon={faClock} /></span> {time}</span> */}
            <span className="event_part"><span className="icn"><FontAwesomeIcon icon={faUser} /></span>&nbsp; { participants}/100</span>
            <button className="post_btn">View Details</button>
           </div>
       </div> 
  </div>
    

    );
}

export default Card;
