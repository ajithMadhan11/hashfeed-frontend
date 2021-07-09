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
import { Suspense } from 'react';
import Loader from '../Loader';
import { logRoles } from '@testing-library/react';


// const user= isAutheticated();
// const {id,token} =user;

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
 

   useEffect(() => {
    getAllPost()
  }, [user]);
  

  const getAllPost = ()=>{

     getuserPosts(id,token).then((data)=>{
      if(data.error){
        console.log("ERROR FETCHING POSTS");
      }else{
        setUserPosts(data)
      }
    })
    .catch(()=>{
      console.log("CATCH FROM POST FETCHING");
    })
  }
    const classes = useStyles();
    return (
        <div>
            <div className="sub_head">
                <p className="sub_head_title">Created Events</p>
            </div>
      <Suspense fallback={<Loader/>}>
      <Container maxWidth="lg" className={classes.container}>
          {UserPosts &&
            UserPosts.map((post)=>{
              
              const participantsCount=post.participants.length
              let dateObj = new Date(post.date);
              let reqdate=dateObj.toDateString();
              const postphoto = getPostPhoto(post._id)
              const pstCategory="tech"
                //----------------------------------------------------->TODO
              // getuniqueCategory(post.category).then((data)=>{
              //   if(data.error) console.log("Error fetching data");
              //   else console.log(data);
              //   // else cat=data
              // })
             //----------------------------------------------------->TODO
              

              return <Card key={post._id} title={post.title} category={'category'} date={reqdate} 
               participants={participantsCount} image={postphoto} />

            })
          }
        </Container>
      </Suspense>
        </div>
    );
}

export default Myevents;
