import React from 'react';
import Menu from './Menu';
import '../styles/home.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import logo from '../images/logo.png'
import caro1 from '../images/caro1.jpg'
import caro2 from '../images/caro2.jpg'
import caro3 from '../images/caro3.jpg'
import caro4 from '../images/caro4.jpg'
import caro5 from '../images/caro5.jpg'
import Card from '../components/Card';

const Home = () => {
    
    return (
       <div>
            <Menu/>
            <div className="sub_head">
                <p className="sub_head_title">Featured</p>
                <hr style={{
                    width: '1100px',
                    border: 'none',
                    height: '5px',
                    background: '#c9c6c6'
                }}/>
            </div>
            <div className="container_for_home_splide">
            <Splide
				options={ {
					type         : 'loop',
					gap          : '1rem',
                    autoWidth: true,
			        perPage   : 4,
                    pagination:false,
					autoplay     : true,
					pauseOnHover : true,
					resetProgress: false,
					arrows       : 'slider',
				} }
				
				hasAutoplayProgress
			>
  <SplideSlide>
  <Card title={"Impact of Cryptography in environment"} category={"Technology"} date={"11.03.2021"} time={"11:30"} participants={"75"} image={caro1}/>
  </SplideSlide>
  <SplideSlide>
  <Card title={"Impact of Cryptography in environment"} category={"Technology"} date={"11.03.2021"} time={"11:30"} participants={"75"} image={caro5}/>
  </SplideSlide>  
  <SplideSlide>
  <Card title={"Impact of Cryptography in environment"} category={"Technology"} date={"11.03.2021"} time={"11:30"} participants={"75"} image={caro4}/>
  </SplideSlide>  
  <SplideSlide>
  <Card title={"Impact of Cryptography in environment"} category={"Technology"} date={"11.03.2021"} time={"11:30"} participants={"75"} image={caro3}/>
  </SplideSlide> 
   <SplideSlide>
   <Card title={"Impact of Cryptography in environment"} category={"Technology"} date={"11.03.2021"} time={"11:30"} participants={"75"} image={caro2}/>
  </SplideSlide> 
</Splide>
            </div>
            <div className="sub_head">
                <p className="sub_head_title">All Events</p>
                <hr style={{
                    width: '1100px',
                    border: 'none',
                    height: '5px',
                    background: '#c9c6c6'
                }}/>
            </div>
       </div>
       
    );
}

export default Home;
