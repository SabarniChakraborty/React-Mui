
import React from 'react';
import './Team.css';


import image1 from "../../img/James_Rally.jpg"
import image2 from "../../img/Kristen_Viller.jpg"
import image3 from "../../img/Johanna_Care.jpg"
import image4 from "../../img/Bruce_Willamson.jpg"


import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const Team = () => {
  const teamMembers = [
    {
      name: "James Rally",
      title: "CEO",
      imgSrc: image1, 
    },
    {
      name: "Kristen Viller",
      title: "TRAINER",
      imgSrc: image2, 
    },
    {
      name: "Johanna Care",
      title: "TRAINER",
      imgSrc: image3, 
    },
    {
      name: "Bruce Willamson",
      title: "TRAINER",
      imgSrc: image4, 
    },
  ];

  return (
    <div className="team-container">
      <h2>Our Team</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      
      <div className="grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.imgSrc} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.title}</p>

        <div className="social-icons" >
        <IconButton href="https://facebook.com" target="_blank" color="inherit" sx={{ '&:hover': { color: '#1877f2' } }}>
          <Facebook />
        </IconButton>

        <IconButton href="https://twitter.com" target="_blank" color="inherit" sx={{ '&:hover': { color: '#1da1f2' } }}>
          <Twitter />
        </IconButton>

        <IconButton href="https://instagram.com" target="_blank" color="inherit" sx={{ '&:hover': { color: '#e1306c' } }}>
          <Instagram />
        </IconButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
