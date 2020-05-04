import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent, } from 'react-mdl';
import "./contact.css";

class Contact extends Component {

    render(){
        return(
            <div className="contact-body">
              <Grid className="contact-grid" >
                  <Cell col={12} >
                    <h2 className="h2">Marissol Karczeski</h2> 
                    </Cell>

                  <Cell col={12}><br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  
                    <h2 className="h2">CONTACT ME</h2> 
                    {/* ESTE CONTACT INFO SOH FICA RESPONSIVE SE NAO MUDAR PRO MEIO, SE MUDAR, DEIXA DE SER RESPONSIVE!!!!!!!!!!!!!! */}
                    <hr/>
      <div className="contact-banner">
        <Grid>

          <Cell
            col={8}
            style={{
              backgroundColor: "lightgray",
              border: "8px solid black",
              marginTop: "100px",
              paddingLeft: "30px",
            }}
          >
            <h5 style={{ fontWeight: "bold", fontSize: "3.0rem" }}>
              email
            </h5>
            <br></br>
            <p style={{ fontSize: "2.5rem" }}>
              marfkar@gmail.com
            </p>
            <br></br>
            <h5 style={{ fontWeight: "bold", fontSize: "3.0rem" }}>
              {" "}
              Phone Number
            </h5>
            <br></br>
            <p style={{ fontSize: "2.5rem" }}>
              425-457-6040
            </p>
            <br></br>
            <br></br>

            <h5 style={{ fontWeight: "bold", fontSize: "3.0rem" }}>
              Linkedin
            </h5>
            <br></br>
            <p style={{ fontSize: "2.5rem" }}>
            https://www.linkedin.com/in/marissolkarczeski/	
              <br></br>
              <br></br>
            </p>

            <h5 style={{ fontWeight: "bold", fontSize: "3.0rem" }}>
              Github
            </h5>
            <br></br>
            <p style={{ fontSize: "2.5rem" }}>
            https://github.com/solka2019
            </p>
          </Cell>
        </Grid>
      </div>
    );
  }
}


                    
                  </Cell>
              </Grid>
            </div>
        )
    }
}

export default Contact;