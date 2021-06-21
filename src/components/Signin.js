import React from 'react';
import Menu from '../core/Menu';
import '../styles/signin.css'
const Signin = () => {
    return (
        <div>
        <Menu/>
       <div className="signin_wrapper">
       <div className="container1">
           <p className="signin_head">SignIn</p>
           <p className="form_label">Email</p>
           <input type="text" className="form_input" />
           <p className="form_label">Password</p>
           <input type="password" className="form_input" />
        </div>
       </div>
        </div>
    );
}

export default Signin;
