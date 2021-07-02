import React ,{Fragment, useState}from 'react';
import Menu from '../core/Menu';
import { Link ,Redirect } from 'react-router-dom';
import '../styles/signin.css'
import { authenticate, isAutheticated, signin } from '../auth/authhelpercalls';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice';

const Signin = () => {

    const dispatch=useDispatch();

const [state, setstate] = useState({
    email:'a@hashfeed.com',
    password:'aspirine',
    error:'',
    loading:false,
    isRedirected:false
});

const user =isAutheticated();
const {email,password,error,isRedirected}=state;

    const handleChange = name => e=>{
        setstate({...state, error:'',[name]:e.target.value})
    }

    const submitForm=(e)=>{
        e.preventDefault();
        setstate({...state,loading:true})
        if(!email || !password){
            return notification('error','please fill all fields');
        }
        signin({email,password})
        .then((data=>{
            console.log(data);
            if(data.error){
                notification('error',data.error);
              return setstate({...state,error:data.error,loading:false})
            }else{
               
                authenticate(data ,()=>{
                    setstate({...state,isRedirected:true})
                })
               
                dispatch(login(data))
                
                const m_name=data.name;
                notification('success',m_name);
            }
        }))
        .catch((err)=>{
            alert("error")
        })
    }

    const signInForm=()=>{
        return (
            <div className="signin_wrapper">
            <div className="container1">
                <p className="signin_head">SignIn</p>
                <p className="form_label">Email</p>
                <input type="email" className="form_input" placeholder="Enter your Email" value={email} onChange={handleChange("email")} required/>
                <p className="form_label">Password</p>
                <input type="password" className="form_input" placeholder="Enter your Password" value={password} onChange={handleChange("password")} required/>
                <p className="f_pass">Forget password?</p>
                <button className="signin_btn" onClick={submitForm}>SignIn</button>
                <hr/>
                <p className="f_last_mis">Already have a account? <span><Link style={{ textDecoration: 'none',backgroundColor:"#ffffff",color:"#4A89DC" }}  to='/signup'>Signup</Link></span></p>
             </div>
            </div>
        )
    }
    const redirectTo=()=>{
        return isRedirected && <Redirect to="/" />;
    }
   
    const notification=(mode,field)=>{
        if(mode == 'error'){
            return  NotificationManager.error(field);
        }
        else if(mode== 'success'){
            return  NotificationManager.success('welcome back '+field+' 🙌');
        }
    }



    return (
  
       <Fragment>
         <Menu/>
           {signInForm()}
            {redirectTo()}

           <NotificationContainer/>
          
       </Fragment>
  
   
   
    );
}

export default Signin;
