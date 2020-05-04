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
                    backgroundImage: "url(/images/recipe-search.png",
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
                    backgroundImage: "url(/images/project-2.png",
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
                    backgroundImage: "url(/images/kids.png",
                    color: "black",
                   
                  }}
                >
                  
                </CardTitle>
                <CardText>
                  This project was the result of a team collaboration. In this app, parents can create a list of chores that the kids may follow and earn points for it.
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
                    href="https:heroku!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
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
                    backgroundImage: "url(/images/eat-da-burger.png",
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
                    backgroundImage: "url(/images/password-generator.png",
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
                    backgroundImage: "url(/images/weather.png",
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
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <Grid>
            <Cell
              col={12}
              style={{ justifyContent: "center", display: "flex" }}
            >
              <Card shadow={0} className="card">
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ne-8im66o0UppT9cV3jAiCjkPSLPfi98IF-N7cxw_jz4sja8Og) center / cover",
                  }}
                >
                  EasyShopping
                </CardTitle>
                <CardText>
                  This is a eCommerce application developed on Node.js and
                  MongoDB. Users can purchase products and facility to pay
                  online.
                </CardText>
                <CardActions border>
                  <Button
                    href="https://github.com/121371/NodeJS---Easy-Shopping"
                    target="_blank"
                    colored
                  >
                    GitHub
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
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <Grid>
            <Cell
              col={12}
              style={{ justifyContent: "center", display: "flex" }}
            >
              <Card shadow={0} className="card">
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(https://techbeacon.scdn7.secure.raxcdn.com/sites/default/files/styles/article_hero_image/public/field/image/ultimate-android-guide.jpg?itok=WBKMaRoD) center / cover",
                  }}
                >
                  NoBorrowConflict
                </CardTitle>
                <CardText>
                  This is android application developed in Java. This
                  application keeps track your lending and borrowing money
                  efficiently.
                </CardText>
                <CardActions border>
                  <Button
                    href="https://github.com/121371/NoBorrowConflict"
                    target="_blank"
                    colored
                  >
                    GitHub
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
  }

  render() {
    return (
      <div className="category-Tabs">
        <Grid>
          <Cell col={12} style={{ margin: "auto" }}>
            <Tabs
              activeTab={this.state.activeTab}
              onChange={(tabId) => this.setState({ activeTab: tabId })}
              ripple
            >
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
