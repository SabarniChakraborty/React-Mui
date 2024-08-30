import React from 'react';
import './AboutUs.css';
import Header from '../home/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop, faCloud, faHome } from '@fortawesome/free-solid-svg-icons';
import Footer from '../home/Footer';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


import Services from './Services';
import Portfolio from '../portfolio/Portfolio';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-material-ui-carousel";

import image9 from "../../img/windmills.jpg";
import image10 from "../../img/sea.jpg";
import image11 from "../../img/sea1.jpg";

const AboutUs = () => {

  var items = [
    {
      name: "Technologies Include",
      description: "Probably the most random thing you have ever seen!",
      image: image9,
    },
    {
      name: "Multi Device Compitibility",
      description: "Hello World!",
      image: image10,
    },
    {
      name: "Responsive Website",
      description: "Hello World!",
      image: image11,
    },
  ];



  return (
    <>
    <Header/>

    <Carousel 
    indicatorIconButtonProps={{
        style: {
            visibility: 'hidden'
        }
    }}
    animation='slide'
    duration={1500}
    NextIcon={<ArrowForwardIosIcon/>}
    PrevIcon={<ArrowBackIosIcon/>}
    >
        {items.map((item) => {
          return (
            <div style={{position: "relative"}}>
              <img src={item.image} height="50%" width="100%" />

                      <h4 
                        className='carousel-description'
                        style={{
                        position: 'absolute',
                        fontSize:  '30px', // Smaller font size for mobile
                        top: '60%', // Adjusted position for better visual balance on mobile
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: 'white',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        padding: '8px', // Slightly less padding for mobile
                        borderRadius: '6px',
                        textAlign: 'center',
                        width:  '40%', // Adjust width for mobile
                        }}
                    >
                        {item.description}
                    </h4>
                    <h1
                        className='carousel-name'
                        style={{
                        position: 'absolute',
                        //   fontSize: '20px', // Smaller font size for mobile
                        top: '25%', // Adjusted position for better visual balance on mobile
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: 'white',
                        backgroundColor: 'rgba(128, 180, 33, 0.80)',
                        padding: '8px',
                        borderRadius: '6px',
                        textAlign: 'center',
                        width: '30%', // Limit text width to avoid overflow on small screens
                        }}
                    >
                        {item.name} 
                    </h1>
            </div>

          );
        })}
      </Carousel>



    

    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-subtitle">
        At lorem ipsum available, but the majority have suffered alteration humour or randomised
      </p>

      <div className="about-grid">
        <div className="about-item">
          <div className="icon" > <FontAwesomeIcon icon={faLaptop} style={{color:"green"}} />
          <h2>What we do?</h2>
        </div>
          
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit occaecat cupidatat non id est laborum.
          </p>
        </div>


        <div className="about-item">
          <div className="icon"><FontAwesomeIcon icon={faCloud} style={{color:"green"}}  />
          <h2>Why choose us?</h2>
        </div>
          
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit occaecat cupidatat non id est laborum.
          </p>
        </div>


        <div className="about-item">
          <div className="icon"><FontAwesomeIcon icon={faHome} style={{color:"green"}}/>
          <h2>Where are we?</h2></div>
         
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit occaecat cupidatat non id est laborum.
          </p>
        </div>
        
      </div>
    </div>
    <Services/>
    <Portfolio/>
    
    <Footer/>
    </>
  );
};

export default AboutUs;
