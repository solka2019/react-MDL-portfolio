import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        // <div className="projects-grid">

        <div style={{width: '80%', margin: 'auto'}}>

            <Grid className="projects-grid">
            <Cell col={4}>
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '400px', background: 'url(/images/recipe-search.png'}} >Project #1</CardTitle>
            <CardText>
              This was our first group project at UW coding bootcamp. An app to search for recipes based on ingredients that the user may have at home.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Heroku</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          </Cell>
          <Cell col={4}>
          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '550', margin: 'auto'}}>
            <CardTitle expand style={{alignItems: 'stretch', height: '400px', background: 'url(./images/recipe-search.png'}} >React Project #2</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Heroku</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
                  </Card>
                  </Cell>
                 
                  <Cell col={4}>
                      
                  <Card shadow={0} style={{width: '400px', height: '256px', background: 'url(/images/recipe-search.png) center / cover', margin: 'auto'}}>
                  <CardTitle expand style={{alignItems: 'flex-start', color: '#fff'}}>

    <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
        <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
            Image.jpg
        </span>
        </CardActions>
        <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Heroku</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
</CardTitle>
    
   
</Card> 
</Cell>
</Grid>
</div>

      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>This is Express</h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>This is HTML/CSS</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>This is MySQL/MongoDB</h1></div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Group Projects</Tab>
          <Tab>Express</Tab>
          <Tab>HTML/CSS</Tab>
          <Tab>MySQL/MongoDB</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
