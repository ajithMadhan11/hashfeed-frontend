import React,{Fragment, useState} from 'react';
import { Link ,Redirect} from 'react-router-dom';
import Menu from '../core/Menu';
import '../styles/signin.css'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { signup,authenticate } from '../auth/authhelpercalls';

const Signup = () => {
const [state, setstate] = useState({
    name:'',
    email:'',
    password:'',
    phone_number:'',
    error:'',
    isRedirected:false,
    loading:false
});
const {name,email,password,error,isRedirected,loading,phone_number}=state;
const handleChange =name=>event=>{
    setstate({...state,[name]:event.target.value})
}

const submitSignUpForm=(e)=>{
e.preventDefault();
setstate({...state,loading:true})
if(!email || !password || !name ||!phone_number){
    return notification('error','Please fill all the fields')
}
signup({name,email,phone_number,password}).then((data)=>{
    if(data.error){
        notification('error',data.error)
        return  setstate({...state,error:data.error,loading:false})
         
    }else{
        authenticate(data ,()=>{
            setstate({...state,isRedirected:true})
        })
        const m_name=data.name;
        notification('success',m_name);
    }
})

}
const redirectTo=()=>{
    return isRedirected && <Redirect to="/" />;
}

const notification=(mode,field)=>{
    if(mode == 'error'){
        return  NotificationManager.error(field);
    }
    else if(mode== 'success'){
        return  NotificationManager.success('welcome to #feed '+field+' 🙌');
    }
}
const signupForm =()=>{
   return (<div className="signin_wrapper">
    <div className="container1">
        <p className="signin_head">SignUp</p>
        <p className="form_label">Name</p>
        <input type="text" className="form_input" placeholder="Enter your Name" value={name} onChange={handleChange('name')}  required />
        <p className="form_label">Email</p>
        <input type="email" className="form_input" placeholder="Enter your Email" value={email} onChange={handleChange('email')} required />
        <p className="form_label">Phone Number</p>
         <input type="number" className="form_input" placeholder="Enter your Phone number" value={phone_number} onChange={handleChange("phone_number")} required/>
        <p className="form_label">Password</p>
        <input type="password" className="form_input" placeholder="Enter your Password" value={password} onChange={handleChange('password')} required/>
        <button className="signin_btn"style={{ marginTop: '20px'}} onClick={submitSignUpForm}>SignUp</button>
        <hr />
        <p className="f_last_mis">Already have a account? <span><Link style={{ textDecoration: 'none',backgroundColor:"#ffffff",color:"#4A89DC" }}  to='/signin'>SignIn</Link></span></p>
     </div>
    </div>)
}

    return (
   
     <Fragment>
         {signupForm()}
         {redirectTo()}
         <NotificationContainer/>
     </Fragment>
 
    );
}

export default Signup;
