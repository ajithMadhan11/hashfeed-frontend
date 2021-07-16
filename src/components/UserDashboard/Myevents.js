import React, { useEffect , useState } from 'react';
import '../../styles/myEvents.css'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Card from '../Card';
import caro1 from '../../images/caro1.jpg'
import { getPostPhoto, getuserPosts ,getuniqueCategory } from './UserDashboardApiHelpers';
import { isAutheticated } from '../../auth/authhelpercalls';
import { useSelector } from 'react-redux';
import { selectUsers } from '../../redux/userSlice';
import Loader from '../Loader';
import MiniCards from '../MiniCards';





const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      display: 'flex',
      flexWrap:'wrap'
    },
    
  }));



const Myevents = () => {
  const user=useSelector(selectUsers);
  const {id,token} =user;
  // console.log(user);
  const [UserPosts, setUserPosts] = useState('')
  const [loading, setloading] = useState(true);
 

   useEffect(() => {
    getAllPost()
  }, [user]);
  

  const getAllPost = ()=>{

     getuserPosts(id,token).then((data)=>{
      if(data.error){
        console.log("ERROR FETCHING POSTS");
      }else{
        setUserPosts(data)
        setloading(!loading)

      }
    })
    .catch(()=>{
      console.log("CATCH FROM POST FETCHING");
    })
  }
  const loadComponent =()=>{
    return  loading && <Loader/>
  }

    const classes = useStyles();
    return (
        <div>
            <div className="sub_head">
                <p className="sub_head_title">Created Events</p>
            </div>
           
        {loadComponent()}
      <Container maxWidth="lg" className={classes.container}>
          {UserPosts &&
            UserPosts.map((post)=>{
              const participantsCount=post.participants.length
              let dateObj = new Date(post.date);
              let reqdate=dateObj.toDateString();
              return <MiniCards key={post._id} p_title={post.title} p_date={reqdate} 
               p_participants={participantsCount}  p_post_id={post._id} p_link={post.link}/>

            })
          }
      
        </Container>
    
     
        </div>
    );
}

export default Myevents;
