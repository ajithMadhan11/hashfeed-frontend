import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../core/Menu';
import '../styles/signin.css'

const Signup = () => {
    return (
   
       <div className="signin_wrapper">
       <div className="container1">
           <p className="signin_head">SignUp</p>
           <p className="form_label">Name</p>
           <input type="text" className="form_input" placeholder="Enter your Name" />
           <p className="form_label">Email</p>
           <input type="email" className="form_input" placeholder="Enter your Email" />
           <p className="form_label">Password</p>
           <input type="password" className="form_input" placeholder="Enter your Password"/>
           <button className="signin_btn"style={{ marginTop: '20px'}}>SignUp</button>
           <hr />
           <p className="f_last_mis">Already have a account? <span><Link style={{ textDecoration: 'none',backgroundColor:"#ffffff",color:"#4A89DC" }}  to='/signin'>SignIn</Link></span></p>


        </div>
       
       </div>
 
    );
}

export default Signup;
