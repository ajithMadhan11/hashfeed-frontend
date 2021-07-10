import React, { useEffect, useState ,Suspense} from 'react';
import { getPostById, getPostPhoto } from './UserDashboard/UserDashboardApiHelpers';
import defaultPic from '../images/default.jpg'
import Menu from '../core/Menu'
import '../styles/eventPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faCalendarAlt, faShare, faTag, faUser} from '@fortawesome/free-solid-svg-icons'
import ReactHtmlParser from 'react-html-parser'; 
import Loader from './Loader';



const EventPage = () => {

    const PostID = String(window.location.href.split("/").pop());
    const [Post, setPost] = useState('');
    const [Category, setcategory] = useState('');
    const [Participants, setParticipants] = useState();
    const postphoto = getPostPhoto(PostID)  


    useEffect(() => {
        getPostById(PostID).then((data)=>{
            if(data.error){
                console.log("ERROR");
            }
            setPost(data)
            setcategory(data.category)
            setParticipants(data.participants.length)
        })
    }, []);
    let dateObj = new Date(Post.date);
    let reqdate=dateObj.toDateString();

    return (
        <Suspense fallback={<Loader/>} >
            <Menu/>
            <div className="container_all">
                <div className="conatiner_n2">
                    <div className="conatiner_n3">
                        <img src={postphoto || defaultPic} className="event_photo"/>
                        <h1 className="post_title">{Post.title}</h1>
                        <div className="post_r_2">
                            <p className="post_category"><FontAwesomeIcon icon={faTag} />{Category.name}</p>
                            <p className="post_share"><FontAwesomeIcon icon={faShare} />Share</p>
                          
                        </div>
                        <div className="post_r_3">
                            <p className="post_date"><FontAwesomeIcon icon={faCalendarAlt} /> <span className="date_txt">{reqdate}</span></p>
                            <p className="post_participants"><FontAwesomeIcon icon={faUser} />  <span className="part_txt">{Participants}/100</span></p>
                        </div>
                       
                        <button className="join_btn">Join Event</button>
                        <br/>
                        { ReactHtmlParser (Post.description) }
                    </div>
                       
                </div> 
            </div>
          
            

        </Suspense>
    );
}

export default EventPage;
