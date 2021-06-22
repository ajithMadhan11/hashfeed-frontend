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
       
            <div className="container">
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
  <Card/>
  </SplideSlide>
  <SplideSlide>
  <Card/>
  </SplideSlide>  
  <SplideSlide>
  <Card/>
  </SplideSlide>  
  <SplideSlide>
  <Card/>
  </SplideSlide> 
   <SplideSlide>
   <Card/>
  </SplideSlide> 
</Splide>
            </div>
           
       
    );
}

export default Home;
