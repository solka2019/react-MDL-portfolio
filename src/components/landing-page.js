import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        
                        <div className="header-banner">  
                        
                        </div>            
                        <img 
                            src="./images/marissol-picture.jpg"
                            alt= "avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Marissol Karczeski</h1>
                            
                          
                            
                            <h2> Full Stack Developer</h2>
                            <p>
                                HTML/CSS| Bootstrap | Materialize |Javascript | React | Express | MySQL | MongoDB | MERN |
                            </p>

                            <div className="social-links">

                                {/* Linkedin */}
                                <a href="https://www.linkedin.com/in/marissol-k-603962113/" rel="noopener noreferrer"  target="_blank" style={{ color:'rgb(116, 16, 16)',  fontSize:'60px', marginBottom:'-220px', marginLeft: '90px',marginTop:'-130px', float: 'left', position: 'flex'}}>
                                    <FaLinkedin/>
                                    {/* <i className="fa fa-linkedin-square" aria-hidden="true"/> */}
                                </a>

                                {/* Github */}
                                <a href="https://github.com/solka2019?tab=repositories" rel="noopener noreferrer"  target="_blank" style={{ color:'rgb(116, 16, 16)',  fontSize:'60px', marginBottom:'-220px', marginRight: '90px',marginTop:'-130px', float: 'right', position: 'flex'}}>
                                   <FaGithubSquare/>
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;

