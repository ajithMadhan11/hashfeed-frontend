import React from 'react';
import '../styles/menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { withRouter ,Link} from 'react-router-dom';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { isAutheticated ,signout } from '../auth/authhelpercalls';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUsers } from '../redux/userSlice';
library.add(fab)


// #4A89DC  primary color

const currenttab=(history,path)=>{
  if (history.location.pathname === path) {
    return { color: "#4A89DC",textDecoration: 'none' ,backgroundColor:"#ffffff" };
  } else {
    return { color: "black",textDecoration: 'none' ,backgroundColor:"#ffffff" };
  }
}

const Menu = ({history}) => {

  const notification=(mode,field)=>{
    if(mode == 'error'){
        return  NotificationManager.error(field);
    }
    else if(mode== 'success'){
        return  NotificationManager.success(field+' 🙌');
    }
}
  const user =useSelector(selectUsers);
  const dispatch=useDispatch();
    return (
        <div className="nav nav-row">
        <input type="checkbox" id="nav-check"/>
        <div className="nav-links nav-col nav-col-alt" >
          <li><Link style={currenttab(history,'/')} to='/'> 
          Home
          </Link></li>
          <li><Link style={currenttab(history,'/user/dashboard')} to='/user/dashboard'> 
          Dashboard
          </Link> </li>

          {
            user!=null?
            <li onClick={
           ()=>{
             signout(()=>{
               dispatch(logout())
               notification('success',"See you soon!")
             })
           }
            }>
            Logout
            </li> 
            :<li>
            <Link style={currenttab(history,'/signin')} to='/signin'> 
            Signin
            </Link>
            </li>
          }

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
        <NotificationContainer/>
      </div>
     
    );
}

export default withRouter(Menu);

