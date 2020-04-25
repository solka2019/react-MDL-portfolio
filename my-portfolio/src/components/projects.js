import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';


class Projects extends Component {
  render() {
    return(
<div>
              <Grid className="project-section-1">
        <Cell col={6}>
<img src="./images/recipe-search.png"
alt="first-page website recipe search"
className="recipe-search"/>
<hr/>
<a href="https://github.com/xzengeric/Project1" target="_blank">
              <i className="fab fa-github-alt fa-2x"></i>
            </a>
 <a href=" https://xzengeric.github.io/Project1/project1.html" target="_blank">
              <i className="fab fa-github-alt fa-2x"></i>
            </a>
   
</Cell>




        <Cell col={6}>
        <img src="./images/project-2.png"
alt="first-page website connecting people"
className="connect-people"/>
</Cell>
    </Grid>



<Grid className="project-section-2">
        <Cell col={6}>
<img src="./images/recipe-search.png"
alt="first-page website recipe search"
className="recipe-search"/>
<hr/>
<a href="https://github.com/xzengeric/Project1" target="_blank">
              <i className="fab fa-github-alt fa-2x"></i>
            </a>
 <a href=" https://xzengeric.github.io/Project1/project1.html" target="_blank">
              <i className="fab fa-github-alt fa-2x"></i>
            </a>
   
</Cell>




        <Cell col={6}>
        <img src="./images/project-2.png"
alt="first-page website connecting people"
className="connect-people"/>
</Cell>
    </Grid>
</div>
      )
    
  }
}

export default Projects;
