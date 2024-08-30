import React from "react";
import Carousel from "react-material-ui-carousel";

// import image1 from "../../img/dragon-ball-landscape-1.jpg";
// import image3 from "../../img/shinchan3.webp";
// import image2 from "../../img/images (1).jpg";

import image2 from "../../img/bird.jpg";
import image4 from "../../img/images (2).jpg";
import img from "../../img/flower.jpg";
import img1 from "../../img/panda.jpeg";

import image9 from "../../img/windmills.jpg";
import image10 from "../../img/sea.jpg";
import image11 from "../../img/sea1.jpg";

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

import Team from './Team.jsx';

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";



const Home = () => {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      image: image9,
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      image: image10,
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      image: image11,
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
      image: img,
      buttonText1: "Share",
      buttonText2: "Learn More",
    },
    {
      id: 3,
      title: "Lizard3",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      image: img1,
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

    <Header/>


      <Carousel>
        {items.map((item) => {
          return (
            <>
              <img src={item.image} height="50%" width="100%" />
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

<Footer/>
 </>
  );
};

export default Home;
