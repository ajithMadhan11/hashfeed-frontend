import React,{useState,useEffect} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../../styles/addEvent_dash.css';
import { addpost, getCategories } from './UserDashboardApiHelpers';
import deaultPic from '../../images/default.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt} from '@fortawesome/free-solid-svg-icons'
import ReactHtmlParser from 'react-html-parser'; 
import {isAutheticated} from '../../auth/authhelpercalls'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { useSelector } from 'react-redux';
import { selectUsers } from '../../redux/userSlice';
// const user=isAutheticated();
// const {id,token}= user;

const Addevents = () => {
    const user=useSelector(selectUsers);
    const {id,token} =user;
    console.log(id,token);
const [state, setstate] = useState({
    title:'Title',
    image:deaultPic,
    date:'2000-03-11',
    category:'',
    allcategories:'',
    temp_url:"",
    createdProduct:'',
    formData:new FormData(),
    error:''
});
const [description, setdescription] = useState('Description');
const{title,date,category,allcategories,image,temp_url,formData,createdProduct,error}=state;


const preload=()=>{
    getCategories().then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            setstate({...state
                ,allcategories:data
            })
        
        }
      });
}
useEffect(() => {
    preload();
}, []);

    const handleChange=name=>e=>{
        if(name==="image"){
            formData.set('photo',e.target.files[0])
            setstate({...state,
                image: e.target.files[0],
                temp_url:URL.createObjectURL(e.target.files[0])
            })
        }else{
            formData.set(name,e.target.value)
            setstate({...state,[name]:e.target.value})
        }
    }

   const onContentChange = (content) => {
    formData.set('description',content)
    setdescription( content );
    }

    const submitForm =(e)=>{
        e.preventDefault();

        addpost(id,token,formData).then((data)=>{
            if(data.error){
                setstate({...state,error:data.error})
                notification('error','Something went wrong')
            }else{
                setstate({...state,createdProduct:data,
                    title:'Title',
                    image:deaultPic,
                    date:'2000-03-11',
                    category:'',
                    temp_url:''
                })
                setdescription( 'Description' );
                notification('success','Event is created Successfully')
            }
        }).catch(()=>{
            console.log("NOT FETCHED PROPERLY");
            notification('error','Something went wrong')
        })
    }

    const notification=(mode,field)=>{
        if(mode == 'error'){
            return  NotificationManager.error(field);
        }
        else if(mode== 'success'){
            return  NotificationManager.success( field+' 🙌');
        }
    }

    const AddForm = ()=>{
        return ( <div className="row_add_eve">
      
      <div className="col">
      <div className="main_cont">
        <div className="signin_wrapper">
        <div className="containerx">
            <p className="signin_head">Add Event</p>
            <p className="form_label">Event poster</p>
            <input type="file" accept="image/*" className="form_input3" placeholder="Enter Event Title"  onChange={handleChange('image')} required/>
            <p className="form_label">Title</p>
            <input type="text" className="form_input" placeholder="Enter Event Title"  value={title} onChange={handleChange('title')} required/>
            <p className="form_label">Description</p>
            <ReactQuill theme="snow" className="form_input4" value={description} onChange={onContentChange}/>
            <p className="form_label">Select category</p>
            <select  className="form_input2" value={category} onChange={handleChange('category')}>
            <option>Select Category</option>
                {
                    allcategories && allcategories.map((item,key)=>
                       ( <option key={key} value={item._id}>{item.name}</option>)
                    )
                }
            </select>
            <p className="form_label">Event date</p>
            <input type="date" className="form_input" placeholder="Enter Event Title"  value={date} onChange={handleChange('date')} required/>
           
            <button className="signin_btn" onClick={submitForm} >Add event</button>
           
         </div>
        </div>
    </div>
      </div>
      <div className="col">
          <div className="container2">
             <div className="img_Cont">
                 <img src={ temp_url || deaultPic} className="preview_pic" />
             </div>
             <h2 className="preview_title">
                 {title}
             </h2>
             <div className="preview_mis">
             <p className="post_cat">technical</p>
             <span className="event_date">  <span className="icn"><FontAwesomeIcon icon={faCalendarAlt} /></span> {date}</span>
             </div>
             <div className="preview_desc" id="desc">
             <div> { ReactHtmlParser (description) } </div>
             </div>
          </div>
      </div>
  </div>
)
    }

    return (
        <>
         {AddForm()}
        <NotificationContainer/>
        </>
       
    );
}

export default Addevents;
