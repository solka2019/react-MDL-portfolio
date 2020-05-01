import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import './contact.css';
import "../App.css";

class Resume extends Component {

    render(){
        return(
            <div>
              <Grid>

                  <Cell col={4}>
                     {/* <div style={{textAlign: 'center'}}>
                     <img src="../assets/dp.png" alt="Avater" style={{height: '200px', borderRadius: '100px'}}/>
                     </div> */}
                     <h3 style={{paddingTop: '2em'}}>Marissol Karczeski</h3>
                     <h4 style={{color: 'grey', fontWeight: 'bold'}}>Full Stack Web Developer</h4>
                     <hr style={{border: '3px solid red', width: '50%'}}/>
                     <p className="para"> Full Stack developer with a background in education and a passion for learning. 

        <br></br>
        Graduate of the University of Washington Coding Bootcamp. Always seeking new solutions to problem-solving to contribute to the company's success and maintain or improve customer satisfaction.        <br></br>
                     </p>

                     <hr style={{border: '3px solid red', width: '50%'}}/>  
                     
                     <h5 style={{fontWeight: 'bold'}}>Location</h5>
                     <p className="para">Seattle, WA</p>
                     <h5 style={{fontWeight: 'bold'}}>Phone</h5>
                     <p className="para">425-457-6040</p>
                     <h5 style={{fontWeight: 'bold'}}>E-Mail</h5>
                     <p className="para">marfkar@gmail.com</p>
                     <h5 style={{fontWeight: 'bold'}}>Web Address</h5>
                     <p className="para">https://AFTER-DEPLOYMENT!!!!!!!!!!!!!</p>
                     <hr style={{border: '3px solid red', width: '50%'}}/>  
                     

                     
                  </Cell>

                  <Cell col={8} style={{backgroundColor: 'black', border: '2px solid red'}}>
                    <h3 className="h3">Education</h3>
                    <Education />
                    <h3 className="h3">Experience</h3>                    
                    <Experience />
                  </Cell>

              </Grid>
            </div>
        )
    }
}

export default Resume;