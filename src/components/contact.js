import React, {Component} from 'react';
import {Grid, Cell,    } from 'react-mdl';
import "./contact.css";

class Contact extends Component {

    render(){
        return(
          <div style={{width: '100%', margin: 'auto'}}>
          <Grid className="landing-grid">
              <Cell col={12}>

<div className="banner-contact">
<h1>Marissol Karczeski</h1>
<hr></hr>

<h3>
Phone:
425-457-6040
</h3>

<h3>
email:
marfkar@gmail.com
</h3>

<h3>
Github:
https://github.com/solka2019?tab=repositories
</h3>


<h3>
Linkedin:
https://www.linkedin.com/in/marissolkarczeski/	
</h3>

{/* <div className="social-links">

  {/* Linkedin */}
  <a href="https://www.linkedin.com/in/marissol-k-603962113/" rel="noopener noreferrer"  target="_blank">
      <i className="fa fa-linkedin-square" aria-hidden="true"/>
  </a>

  {/* Github */}
  <a href="https://github.com/solka2019/Updated-Portfolio-Page-2" rel="noopener noreferrer"  target="_blank">
      <i className="fa fa-github-square" aria-hidden="true"/>
  </a>

</div> */}
{/* </div> */}
              </Cell>
          </Grid>
      </div>
  )
}
}

export default Contact;