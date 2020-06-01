import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";
import "../App.css";

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: 0,
    };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid" style={{ width: "80%", margin: "auto"  }}>
          {/* PROJETO #1 FOI MODIFICADO COM MINHA FOTO, MAS NAO TA RESPONSIVE COMO O DA COPIA - VERIFICAR!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
         
          {/*Project #1*/}
          <Grid>
            <Cell col={4}>
              <Card shadow={0} className="card">
                <CardTitle
                  style={{
                    height: "400px",
                    width: "600px",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundImage: "url(./images/recipe-search.PNG)",
                    color: "black",
                  }}
                >
               
                </CardTitle>
                <CardText style={{whiteSpace: 'nowrap'}}>
                This project was the result of a team collaboration.<br>
                </br>This app allows us to search for recipes based on ingredients that we <br>
                </br>may have at home.

                </CardText>
                <CardActions border>
                  <Button
                    href="https://github.com/xzengeric/Project1.git"
                    target="_blank"
                    colored
                  >
                    GitHub
                  </Button>
                                {" "}
                  <Button
                    href="https://xzengeric.github.io/Project1/project1.html"
                    target="_blank"
                    colored
                  >
                    Deployed Project
                  </Button>
                               
                </CardActions>

                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>



                        {/*Project #2*/}

            <Cell col={4}>
              <Card shadow={0} className="card">


                <CardTitle
                  style={{
                    height: "400px",
                    width: "600px",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundImage: "url(./images/project-2.PNG)",
                    color: "black",
                  }}
                >
                 
                </CardTitle>
                <CardText>
                  This project was the result of a team collaboration. This app servers people in need and connect them with others whow want to help those in their community.
                </CardText>
                <CardActions border>
                <Button
                    href="https://github.com/solka2019/Project-2-help4u"
                    target="_blank"
                    colored
                  >
                    GitHub
                  </Button>
                                {" "}
                  <Button
                    href="https://four-us.herokuapp.com/"
                    target="_blank"
                    colored
                  >
                    Deployed Project
                  </Button>
                </CardActions>
                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>




            {/*Project #3*/}
            <Cell col={4}>
              <Card shadow={0} className="card">
                <CardTitle
                  style={{
                    height: "400px",
                    width: "600px",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundImage: "url(./images/choreZ.PNG)",
                    color: "black",
                   
                  }}
                >
                  
                </CardTitle>
                <CardText>
                  This project was the result of a team collaboration. With this app, parents can create a list of chores that the kids may follow and earn points for it.
                </CardText>
                <CardActions border>
                  <Button
                    href="https://github.com/solka2019/Project-3"
                    target="_blank"
                    colored
                  >
                    GitHub
                  </Button>
                                {" "}
                  <Button
                    href="https://chorezz.herokuapp.com/"
                    target="_blank"
                    colored
                  >
                    Deployed Project
                  </Button>
                               
                </CardActions>

                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>



            {/*Project #4*/}

            <Cell col={4}>
              <Card shadow={0} className="card">
                <CardTitle
                  style={{
                    height: "400px",
                    width: "600px",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundImage: "url(./images/eat-da-burger.PNG)",
                    color: "black",
                  }}
                >
                  
                </CardTitle>
                <CardText>
                   In this app, the user can order burgers and keep track of the list that was ordered.
                </CardText>
                <CardActions border>
                  <Button
                    href="https://github.com/solka2019/Burger"
                    target="_blank"
                    colored
                  >
                    GitHub
                  </Button>
                                {" "}
                  <Button
                    href="https://burger-heroku-app.herokuapp.com/"
                    target="_blank"
                    colored
                  >
                    Deployed Project
                  </Button>
                               
                </CardActions>

                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>


            {/* Project 5*/}

            <Cell col={4}>
              <Card shadow={0} className="card">
                <CardTitle
                  style={{
                    height: "400px",
                    width: "600px",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundImage: "url(./images/password-generator.PNG)",
                    color: "black",
                  }}
                >
                  
                </CardTitle>
                <CardText>
                 This is a random password generator.
                </CardText>
                <CardActions border>
                  <Button
                    href="https://github.com/solka2019/password-generator"
                    target="_blank"
                    colored
                  >
                    GitHub
                  </Button>
                                {" "}
                  <Button
                    href="https://solka2019.github.io/password-generator/"
                    target="_blank"
                    colored
                  >
                    Deployed Project
                  </Button>
                               
                </CardActions>

                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>

{/* Project # 6 */}
<Cell col={4}>
              <Card shadow={0} className="card">
                <CardTitle
                  style={{
                    height: "400px",
                    width: "600px",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundImage: "url(./images/weather.PNG)",
                    color: "black",
                  }}
                >
                  
                </CardTitle>
                <CardText>
                  In this app the user will be able to see the weather forecast for the following 5 days for many cities.
                </CardText>
                <CardActions border>
                  <Button
                    href="https://github.com/solka2019/Weather-Dashboard"
                    target="_blank"
                    colored
                  >
                    GitHub
                  </Button>
                                {" "}
                  <Button
                    href="https://solka2019.github.io/Weather-Dashboard/"
                    target="_blank"
                    colored
                  >
                    Deployed Project
                  </Button>
                               
                </CardActions>

                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
          </Grid>


        </div>
      );
    } 
    
    else if (this.state.activeTab === 1) {
      return (
        <div>
          <Grid>
            <Cell
              col={12}
              style={{ justifyContent: "center", display: "flex" }}
            >
            </Cell>
          </Grid>
        </div>
      );
      

    }
  }

  render() {
    return (
      <div className="category-Tabs">
        <Grid>
          <Cell col={12} style={{ margin: "auto" }}>
            <Tabs>
              <Tab style={{ fontSize: "14px", fontWeight: "bold" }}>
                My Projects
              </Tab>
            </Tabs>
          </Cell>
        </Grid>



        <section>
          <Grid>
            <Cell col={12}>
              <div>{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}

export default Projects;
