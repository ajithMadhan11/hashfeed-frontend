import React ,{useState,useEffect} from 'react';
import '../styles/miniCards.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt,faTrashAlt,faUser} from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { deletepost, updatepost } from './UserDashboard/UserDashboardApiHelpers';
import { useSelector } from 'react-redux';
import { selectUsers } from '../redux/userSlice';
import {NotificationContainer, NotificationManager} from 'react-notifications';


function getModalStyle() {
    const top = 50 ;
    const left = 50 ;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      top:'20%',
      marginTop:'8%',
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
    },
    modalStyle1:{
      marginTop:'40px',
      height:'550px',  
      overflow:'scroll',
    },

  }));

const MiniCards = ({p_title,p_date,p_participants,p_post_id,p_link}) => {

    const user=useSelector(selectUsers);
    const {id,token} =user;

    const history = useHistory()
    const [modalStyle] = React.useState(getModalStyle);
    const classes = useStyles();
    const [openModal, setOpenModal] = useState(false);
    const [state, setstate] = useState({
      title:p_title,
      date:'',
      formData:new FormData(),
      error:'',
      link:p_link,
      redirect:false
  });

  const {title,date,link,formData,redirect} = state;

  
    const handleChange =name=>e=>{
      formData.set(name,e.target.value)
        setstate({...state,[name]:e.target.value})
    }
    
    const updateChanges =(p_id)=>{
      console.log("came");
      updatepost(id,p_id,token,formData).then((data)=>{
        if(data.error){
          console.log("Error Updating event");
        }else{
          setOpenModal(false)
          setstate({...state,title:''})
          notification('success','Post Updated Successfully')
        }
      })
    }

    const  delPost= (p_id)=>{
      const res = window.confirm("Are you sure to delete this post?");
      if(res){
        deletepost(id,p_id,token).then((data)=>{
          if(data.error){
            console.log("Error Deleting Post");
          }else{
            console.log("Deleted Successfully");
            notification('success','Post Deleted Successfully')
            window.location.reload()
          }
        })
      }
    }

    const notification=(mode,field)=>{
      if(mode == 'error'){
          return  NotificationManager.error(field);
      }
      else if(mode== 'success'){
          return  NotificationManager.success( field+' 🙌');
      }
  }

    return (
        <div>
             <Modal
        open={openModal}
        className={classes.modalStyle1}
        onClose={()=>setOpenModal(false)}
        
      >
            <div style={modalStyle} className={classes.paper}>
            <div className="col">
            <div className="containerx">
            <p className="signin_head">Update Your Event</p>
            <p className="form_label">Update Title</p>
            <input type="text" className="form_input" placeholder="Enter Event Title"  value={title}  onChange={handleChange('title')} required/>
            <p className="form_label">Update Event date</p>
            <input type="date" className="form_input" placeholder="Enter Event Date"  value={date} onChange={handleChange('date')} required/>
            <p className="form_label">update Joining Link</p>
            <input type="text" className="form_input" placeholder="Enter Joining link" value={link || ''}  onChange={handleChange('link')} />
            <button className="signin_btn" onClick={()=>updateChanges(p_post_id)} >Update Changes</button>
         
    </div>
      </div>
      </div>
      </Modal>
        <div className="miniCards_container">
           <p className="miniCards_title">{p_title}</p> 
           <div className="mini_sec_cont">
               <p className="mini_event_data"><FontAwesomeIcon icon={faCalendarAlt}/> {p_date}</p>
               <p className="mini_event_participants"><FontAwesomeIcon icon={faUser}/> {p_participants}</p>
           </div>
           <div className="btn_cont">
           <button className="post_btn_minievent"  onClick={()=>history.push(`/post/${p_post_id}`)} >View Details</button>
           <button className="uppost_btn_minievent"onClick={()=> setOpenModal(true)} >Update Details</button>
           <button className="edpost_btn_minievent" >View Participants</button>
           <button className="delpost_btn_minievent" onClick={()=>{delPost(p_post_id)}}> <FontAwesomeIcon icon={faTrashAlt}/></button>
           </div>
        </div>
        <NotificationContainer/>
        </div>
    );
}

export default MiniCards;
