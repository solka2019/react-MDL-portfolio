import React, {Component} from 'react';
import {Grid, Cell,    } from 'react-mdl';
import "./contact.css";
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';



class Contact extends Component {

    render(){
        return(
          <div style={{width: '100%', margin: 'auto'}}>

          <Grid className="landing-grid">

              <Cell col={12}>

<div className="banner-contact">

<h1 style={{color:'white'}}>Marissol Karczeski</h1>
                            
                          
                            
                            <h2> Phone Number: 425-457-6040</h2>
                            <h2>Email: marfkar@gmail.com</h2>
                            
                            {/* <h2>My LinkedIn</h2>
                            <h2>My Github</h2> */}

                            <div className="social-links">

                                {/* Linkedin */}
                                <a href="https://www.linkedin.com/in/marissol-k-603962113/" rel="noopener noreferrer" alt='Linkedin link' target="_blank"
                                
                                style={{ color:'rgb(116, 16, 16)',  fontSize:'90px', marginTop:'150px', float: 'center', position: 'flex'}}>
                                    <FaLinkedin/>
                                </a>

                                {/* Github */}
                                <a href="https://github.com/solka2019?tab=repositories" rel="noopener noreferrer" alt='Github link'  target="_blank" style={{ color:'rgb(116, 16, 16)',  fontSize:'90px',  marginTop:'150px', float: 'center', position: 'flex'}}>
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

export default Contact;