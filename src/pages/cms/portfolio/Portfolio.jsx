import React, { useState } from 'react';
import { Container, Grid, Button, Typography, Box, Card, CardMedia, CardContent } from '@mui/material';
import "./Portfolio.css";

import image1 from "../../img/firstdiv.jpg";
import image2 from "../../img/secdiv.jpg";
import image3 from "../../img/thirdiv.jpg";
import image4 from "../../img/bird.jpg";
import image5 from "../../img/fifthdiv.jpg";
import image6 from "../../img/sixdiv.jpg";
import image7 from "../../img/sevendiv.jpg";
import image8 from "../../img/eightdiv.jpg";
import image9 from "../../img/ninediv.jpg";



// Sample project data
const projects = [
{ 
    id: 1, 
    name: "Project Name 1", 
    category: "Web Design", 
    image: image1
},
{ 
    id: 2, 
    name: "Project Name 2", 
    category: "Photography", 
    image: image2
},
{ 
    id: 3, 
    name: "Project Name 3", 
    category: "Print", 
    image: image3
},
  { 
   id: 4, 
   name: "Project Name 4",
   category: "Web Design", 
   image: image4
  },
  { 
    id: 5,
    name: "Project Name 5",
    category: "Photography", 
    image: image5
},
{ 
    id: 6, 
    name: "Project Name 6", 
    category: "Print", 
    image: image6
},
{ 
    id: 7, 
    name: "Project Name 7", 
    category: "Web Design", 
    image: image7
},
{ 
    id: 8, 
    name: "Project Name 8", 
    category: "Photography", 
    image: image8
  
},
{
    id: 9,
    name: "Project Name 9",
    category: "print",
    image: image9
  },
];

const Portfolio = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === category));
    }
  };


  return (
    <div className='div'>
    <Container maxWidth="lg" style={{ marginTop: '2rem' }} >
    
    <div className="portfolio-container">
        <h1>Portfolio</h1>
        <p>
          At lorem Ipsum available, but the majority have suffered alteration in
          some form by injected humour.{" "}
        </p>
    </div>
    



      {/* Filter Buttons */}
      <div className='filter-buttons'>
      <Box display="flex" justifyContent="center" mb={4}>
      
        <Button 
          variant={selectedCategory === 'All' ? 'contained' : 'outlined'} 
          onClick={() => handleFilterChange('All')} 
          sx={{ margin: 1 }}>
          All
        </Button>
      
    
        <Button 
          variant={selectedCategory === 'Web Design' ? 'contained' : 'outlined'} 
          onClick={() => handleFilterChange('Web Design')} 
          sx={{ margin: 1 }}>
          Web Design
        </Button>

        <Button 
          variant={selectedCategory === 'Photography' ? 'contained' : 'outlined'} 
          onClick={() => handleFilterChange('Photography')} 
          sx={{ margin: 1 }}>
          Photography
        </Button>

        <Button 
          variant={selectedCategory === 'Print' ? 'contained' : 'outlined'} 
          onClick={() => handleFilterChange('Print')} 
          sx={{ margin: 1 }}>
          Print
        </Button>
        
      </Box>
      </div>
      
      
    


      {/* Projects Grid */}
      <Grid container spacing={4}>
        {filteredProjects.map(project => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <Card>
              <CardMedia
                   sx={{ height: 280, objectFit: "contain" }}
                   image={project.image}
              />
 
              {/* <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {project.name}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {project.category}
                </Typography>

              </CardContent>  */}

            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
      </div>
  );
};

export default Portfolio;
