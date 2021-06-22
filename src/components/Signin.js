import React from 'react';
import Menu from '../core/Menu';
import { Link } from 'react-router-dom';

import '../styles/signin.css'

const Signin = () => {
    return (
   
       <div className="signin_wrapper">
       <div className="container1">
           <p className="signin_head">SignIn</p>
           <p className="form_label">Email</p>
           <input type="email" className="form_input" placeholder="Enter your Email" />
           <p className="form_label">Password</p>
           <input type="password" className="form_input" placeholder="Enter your Password"/>
           <p className="f_pass">Forget password?</p>
           <button className="signin_btn">SignIn</button>
           <hr />
           <p className="f_last_mis">Already have a account? <span><Link style={{ textDecoration: 'none',backgroundColor:"#ffffff",color:"#4A89DC" }}  to='/signup'>Signup</Link></span></p>

        </div>
       
       </div>
   
    );
}

export default Signin;
