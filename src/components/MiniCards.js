import React ,{useState} from 'react';
import '../styles/miniCards.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt,faUser} from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';



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
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 5),
      
    },
  }));

const MiniCards = ({title,date,participants,post_id}) => {
    const history = useHistory()
    const [modalStyle] = React.useState(getModalStyle);
    const classes = useStyles();

    const [openModal, setOpenModal] = useState(false);

    return (
        <div>
             <Modal
        open={openModal}
        onClose={()=>setOpenModal(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
       
      </div>
      </Modal>
        <div className="miniCards_container">
           <p className="miniCards_title">{title}</p> 
           <div className="mini_sec_cont">
               <p className="mini_event_data"><FontAwesomeIcon icon={faCalendarAlt}/> {date}</p>
               <p className="mini_event_participants"><FontAwesomeIcon icon={faUser}/> {participants}</p>
           </div>
           <div className="btn_cont">
           <button className="post_btn_minievent"  onClick={()=>history.push(`/post/${post_id}`)} >View Details</button>
           <button className="uppost_btn_minievent"onClick={()=>setOpenModal(true)} >Update event</button>
           <button className="edpost_btn_minievent" >View Participants</button>
           </div>
        </div>
        </div>
    );
}

export default MiniCards;
