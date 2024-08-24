import React from "react";
import Carousel from "react-material-ui-carousel";
import image1 from "../../img/dragon-ball-landscape-1.jpg";
import image3 from "../../img/shinchan3.webp";
import image2 from "../../img/images (1).jpg";
import image4 from "../../img/images (2).jpg";
import image5 from "../../img/1697460957Barrel1d.svg";
import image6 from "../../img/Pumpkin_1724158720.svg";
import image7 from "../../img/man34_1723551172.svg";
import image8 from "../../img/1695216005Grapes19b.svg";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./home.css";
import { AppBar, Toolbar, Container, Link, IconButton, Box } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

import Team from './Team.jsx';



const Home = () => {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      image: image1,
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      image: image3,
    },
  ];



  var cardItems = [
    {
      id: 1,
      title: "Lizard1",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      image: image2,
      buttonText1: "Share",
      buttonText2: "Learn More",
    },
    {
      id: 2,
      title: "Lizard2",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      image: image2,
      buttonText1: "Share",
      buttonText2: "Learn More",
    },
    {
      id: 3,
      title: "Lizard3",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      image: image2,
      buttonText1: "Share",
      buttonText2: "Learn More",
    },
  ];

  
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };



  return (
    <>
      <Carousel>
        {items.map((item) => {
          return (
            <>
              <img src={item.image} height="100%" width="100%" />
            </>
          );
        })}
      </Carousel>

      <Grid
        container
        spacing={4} // Increase the spacing value
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ marginTop: "20px" }}
      >
        {cardItems.map((cardItem, index) => (
          <Grid
            item
            xs={12}
            ms={4}
            md={4}
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              objectFit: "contain",
            }}
          >
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 300, objectFit: "contain" }}
                image={cardItem.image}
                title={cardItem.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {cardItem.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {cardItem.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">{cardItem.buttonText1}</Button>
                <Button size="small">{cardItem.buttonText2}</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid
        container
        spacing={4} // Increase the spacing value
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ marginTop: "20px" }}
      >
        <Grid className="text-content" item xs={12} ms={12} md={7}>
          <Typography gutterBottom varient="h3" component="div">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
            dolorem deleniti ratione ea blanditiis! Quas, recusandae totam
            aliquid incidunt sint molestias. Optio quaerat laborum rerum
            similique reiciendis ea sit. Praesentium. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Maxime dolorem deleniti ratione
            ea blanditiis! Quas, recusandae totam aliquid incidunt sint
            molestias. Optio quaerat laborum rerum similique reiciendis ea sit.
            Praesentium. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Maxime dolorem deleniti ratione ea blanditiis! Quas,
            recusandae totam aliquid incidunt sint molestias. Optio quaerat
            laborum rerum similique reiciendis ea sit. Praesentium. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Maxime dolorem
            deleniti ratione ea blanditiis! Quas, recusandae totam aliquid
            incidunt sint molestias. Optio quaerat laborum rerum similique
            reiciendis ea sit. Praesentium.
          </Typography>
        </Grid>

        <Grid className="card" item xs={12} ms={12} md={5}>
          <img src={image4} height="50%" width="90%" />
        </Grid>
      </Grid>



      <Grid
        container
        spacing={4} // Increase the spacing value
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ marginTop: "20px" }}
      >


       <Grid className="card" item xs={12} ms={12} md={5}>
          <img src={image4} height="50%" width="90%" />
       </Grid>

        <Grid className="text-content" item xs={12} ms={12} md={7}>
          <Typography gutterBottom varient="h3" component="div">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
            dolorem deleniti ratione ea blanditiis! Quas, recusandae totam
            aliquid incidunt sint molestias. Optio quaerat laborum rerum
            similique reiciendis ea sit. Praesentium. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Maxime dolorem deleniti ratione
            ea blanditiis! Quas, recusandae totam aliquid incidunt sint
            molestias. Optio quaerat laborum rerum similique reiciendis ea sit.
            Praesentium. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Maxime dolorem deleniti ratione ea blanditiis! Quas,
            recusandae totam aliquid incidunt sint molestias. Optio quaerat
            laborum rerum similique reiciendis ea sit. Praesentium. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Maxime dolorem
            deleniti ratione ea blanditiis! Quas, recusandae totam aliquid
            incidunt sint molestias. Optio quaerat laborum rerum similique
            reiciendis ea sit. Praesentium.
          </Typography>
        </Grid>
     </Grid>



      
      
      <div>
        {/* <h2>Carousel Component</h2> */}
        <Slider {...settings} style={{ marginLeft: '20px', marginBottom: '50px', overflow: 'hidden', maxWidth: 'calc(100% - 40px)' }}>
          <div className= "img-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
           <img src={image5} height="30%" width="30%" />
          </div>
          <div className= "img-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
           <img src={image6} height="30%" width="30%" />
          </div>
          <div className= "img-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img src={image5} height="30%" width="30%" />
          </div>
          <div className= "img-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
           <img src={image8} height="30%" width="30%" />
          </div>
        </Slider>
      </div>
 
      
<div>
  <Team/>
</div>
<br></br>
<br></br>



<Box
  component="footer"
  sx={{
    background: 'linear-gradient(to right, #3f51b5, #1a237e)',
    color: 'white',
    paddingTop: 2,
    paddingBottom: 2,
  }}
>
  <Container maxWidth="md">
    <Grid container spacing={4} alignItems="center" justifyContent="space-between">
      {/* Pages Links */}
      <Grid item xs={12} md={3} justifyContent="center" className="footer-links">
        <Link href="/" color="inherit" sx={{ marginRight: 3, textDecoration: 'none', '&:hover': { textDecoration: 'none', color: '#1a237e' } }}>
          Home
        </Link>
        <Link href="/about" color="inherit" sx={{ marginRight: 3, textDecoration: 'none', '&:hover': { textDecoration: 'none', color: '#1a237e' } }}>
          About
        </Link>
        <Link href="/services" color="inherit" sx={{ marginRight: 3, textDecoration: 'none', '&:hover': { textDecoration: 'none', color: '#1a237e' } }}>
          Services
        </Link>
        <Link href="/contact" color="inherit" sx={{ marginRight: 3, textDecoration: 'none', '&:hover': { textDecoration: 'none', color: '#1a237e' } }}>
          Contact
        </Link>
      </Grid>

      {/* Social Media Icons */}
      <Grid item>
        <IconButton href="https://facebook.com" target="_blank" color="inherit" sx={{ '&:hover': { color: '#1877f2' } }}>
          <Facebook />
        </IconButton>
        <IconButton href="https://twitter.com" target="_blank" color="inherit" sx={{ '&:hover': { color: '#1da1f2' } }}>
          <Twitter />
        </IconButton>
        <IconButton href="https://instagram.com" target="_blank" color="inherit" sx={{ '&:hover': { color: '#e1306c' } }}>
          <Instagram />
        </IconButton>
        <IconButton href="https://linkedin.com" target="_blank" color="inherit" sx={{ '&:hover': { color: '#0077b5' } }}>
          <LinkedIn />
        </IconButton>
      </Grid>

      {/* Terms and Conditions */}
      <Grid item>
        <Link href="/terms" color="inherit" sx={{ '&:hover': { textDecoration: 'underline' } }}>
          Terms & Conditions
        </Link>
      </Grid>
    </Grid>

    {/* Copyright Section */}
    <Toolbar sx={{ justifyContent: 'center', borderTop: '1px solid rgba(255, 255, 255, 0.2)', paddingTop: 2 }}>
      <Typography variant="body2" color="inherit">
        © 2024 Your Company. All rights reserved.
      </Typography>
    </Toolbar>
  </Container>
</Box>

      
    </>
  );
};

export default Home;
