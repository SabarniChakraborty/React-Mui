
import React from 'react';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop , faCode, faLightbulb, faEarthAmericas, faMobileScreenButton} from '@fortawesome/free-solid-svg-icons';
import { faTv } from '@fortawesome/free-solid-svg-icons/faTv';
// import { icon } from '@fortawesome/fontawesome-svg-core';

const services = [
  {
    icon: <FontAwesomeIcon icon={faLaptop} />,
    title: 'Responsive Design',
    description: 'Nullam ac rhoncus sapien, non gravida purus. Alinon elit imperdiet congue. Integer elit imperdiet congue.'
  },
  {
    icon: <FontAwesomeIcon icon={faCode} />,
    title: 'HTML5/CSS3 Dev',
    description: 'Nullam ac rhoncus sapien, non gravida purus. Alinon elit imperdiet congue. Integer elit imperdiet congue.'
  },
  {
    icon: <FontAwesomeIcon icon={faLightbulb} />,
    title: 'JavaScript jQuery',
    description: 'Nullam ac rhoncus sapien, non gravida purus. Alinon elit imperdiet congue. Integer ultricies sed elit impe.'
  },
  {
    icon: <FontAwesomeIcon icon={faEarthAmericas} />,
    title: 'Web Designing',
    description: 'Nullam ac rhoncus sapien, non gravida purus. Alinon elit imperdiet congue. Integer elit imperdiet conempus.'
  },
  {
    icon: <FontAwesomeIcon icon={faTv} />,
    title: 'Wordpress Dev',
    description: 'Nullam ac rhoncus sapien, non gravida purus. Alinon elit imperdiet congue. Integer ultricies sed elit imperdiet congue. Integer ultricies sed ligula eget tempus.'
  },
  {
    icon: <FontAwesomeIcon icon={faMobileScreenButton} />,
    title: 'Mobile Dev',
    description: 'Nullam ac rhoncus sapien, non gravida purus. Alinon elit imperdiet congue. Integer elit imperdiet congue. Integer ultricies sed ultricies sed ligula eget tempus.'
  }
];

const Services = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: '2rem' }}>
    
    <div className="services">
        <h1>Services</h1>
        <p>
          At lorem Ipsum available, but the majority have suffered alteration in
          some form by injected humour.{" "}
        </p>
      </div>

    
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <div className='card'>
              <CardContent>
              
              <div className="icon-container"><h3>{service.icon}</h3></div>
              
          

                <Typography variant="h5" component="div" gutterBottom>
                  {service.title}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
                
              </CardContent>
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
