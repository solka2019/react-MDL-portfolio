import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions,Button, CardMenu, IconButton} from 'react-mdl';
import "../App.css";

class Projects extends Component {
    constructor(){
        super();
        this.state = {
            activeTab: 0
        }
    }


    toggleCategories(){
        if(this.state.activeTab===0){
            return(
                <div className="projects-grid" style={{width: '80%', margin: 'auto',}}> 
                    
{/* PROJETO #1 FOI MODIFICADO COM MINHA FOTO, MAS NAO TA RESPONSIVE COMO O DA COPIA - VERIFICAR!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                  {/*Project #1*/}   
                <Grid>  
                    <Cell col={4}>         

                            <Card shadow={0} className="card">
                                    <CardTitle style={{color: '#fff', height: '400px',  width: '600px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' ,backgroundImage: 'url(/images/recipe-search.png'}} >Project #1</CardTitle>
                                    <CardText>
                                    This was our first group project at UW coding bootcamp.<br></br> An app to search for recipes based on ingredients that the user may have at home.
                                    
                                    </CardText>
                                    <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Heroku</Button>
              <Button colored>Live Demo</Button>
            </CardActions>

                                    <CardMenu style={{color: '#fff'}}>
                                        <IconButton name="share" />
                                    </CardMenu>
                            </Card>

                  </Cell>

                  <Cell col={4}>         

                            <Card shadow={0} className="card">
                            <CardTitle style={{color: '#fff', height: '400px',  width: '600px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' ,backgroundImage: 'url(/images/recipe-search.png'}} >Project #1</CardTitle>
                                    <CardText>
                                      This is my portfolio portal developed on ReactJS, React-MDL and CSS3.    
                                    </CardText>
                                    <CardActions border>
                                        <Button href="https://github.com/121371/MyPortfolio" target="_blank" colored>GitHub</Button>
                                    </CardActions>
                                    <CardMenu style={{color: '#fff'}}>
                                        <IconButton name="share" />
                                    </CardMenu>
                            </Card>

                  </Cell>

                  {/*Project #2*/}
                  <Cell col={4}>

                        <Card shadow={0} className="card">
                        <CardTitle style={{color: '#fff', height: '400px',  width: '600px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' ,backgroundImage: 'url(/images/recipe-search.png'}} >Project #1</CardTitle>
                                <CardText>
                                This is a user interactive application based on ReactJS where users can order a order online.
                                In this application users can add or remove the burder ingredients as per their chice.
                                </CardText>
                                <CardActions border>
                        <Button href="https://github.com/121371/BurgerBuilder" target="_blank" colored>GitHub</Button>
                                </CardActions>
                                <CardMenu style={{color: '#fff'}}>
                                    <IconButton name="share" />
                                </CardMenu>
                        </Card>
                  </Cell>
                  

                  {/*Project #3*/}

                  <Cell col={4}>           
                        <Card shadow={0} className="card">
                        <CardTitle style={{color: '#fff', height: '400px',  width: '600px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' ,backgroundImage: 'url(/images/recipe-search.png'}} >Project #1</CardTitle>
                                <CardText>
                                This is a user interactive Todo App developed on ReactJS and Redux in which you can add or delete your todo's.
                                You can also check wheich tasks you have completed earlier.
                                </CardText>
                                <CardActions border>
                                    <Button href="https://github.com/121371/ToDoAPP" target="_blank" colored>GitHub</Button>
                                </CardActions>
                                <CardMenu style={{color: '#fff'}}>
                                    <IconButton name="share" />
                                </CardMenu>
                         </Card>
                    </Cell>

                    <Cell col={4}>           
                        <Card shadow={0} className="card">
                        <CardTitle style={{color: '#fff', height: '400px',  width: '600px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' ,backgroundImage: 'url(/images/recipe-search.png'}} >Project #1</CardTitle>
                                <CardText>
                                This is a user interactive Todo App developed on ReactJS and Redux in which you can add or delete your todo's.
                                You can also check wheich tasks you have completed earlier.
                                </CardText>
                                <CardActions border>
                                    <Button href="https://github.com/121371/ToDoAPP" target="_blank" colored>GitHub</Button>
                                </CardActions>
                                <CardMenu style={{color: '#fff'}}>
                                    <IconButton name="share" />
                                </CardMenu>
                         </Card>
                    </Cell>

                    <Cell col={4}>           
                        <Card shadow={0} className="card">
                        <CardTitle style={{color: '#fff', height: '400px',  width: '600px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' ,backgroundImage: 'url(/images/recipe-search.png'}} >Project #1</CardTitle>
                                <CardText>
                                This is a user interactive Todo App developed on ReactJS and Redux in which you can add or delete your todo's.
                                You can also check wheich tasks you have completed earlier.
                                </CardText>
                                <CardActions border>
                                    <Button href="https://github.com/121371/ToDoAPP" target="_blank" colored>GitHub</Button>
                                </CardActions>
                                <CardMenu style={{color: '#fff'}}>
                                    <IconButton name="share" />
                                </CardMenu>
                         </Card>
                    </Cell>

                  </Grid>           

                </div>
                )
        }

        else if(this.state.activeTab===1){
            return(
                <div>
                <Grid>  
                 <Cell col={12} style={{justifyContent: 'center', display: 'flex'}}>
                    <Card shadow={0} className="card">
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ne-8im66o0UppT9cV3jAiCjkPSLPfi98IF-N7cxw_jz4sja8Og) center / cover'}}>EasyShopping</CardTitle>
                        <CardText>
                        This is a eCommerce application developed on Node.js and MongoDB. 
                        Users can purchase products and facility to pay online.
                        </CardText>
                        <CardActions border>
                            <Button href="https://github.com/121371/NodeJS---Easy-Shopping" target="_blank" colored>GitHub</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                 </Cell>  
                </Grid>
              </div>
                )
            
        }

        else if(this.state.activeTab===2){
            return(
                <div>
                        <Grid>  
                            <Cell col={12} style={{justifyContent: 'center', display: 'flex'}}> 
                                    <Card shadow={0} className="card">
                                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://techbeacon.scdn7.secure.raxcdn.com/sites/default/files/styles/article_hero_image/public/field/image/ultimate-android-guide.jpg?itok=WBKMaRoD) center / cover'}}>NoBorrowConflict</CardTitle>
                                        <CardText>
                                        This is android application developed in Java. This application keeps track your lending
                                        and borrowing money efficiently.
                                        </CardText>
                                        <CardActions border>
                                            <Button href="https://github.com/121371/NoBorrowConflict" target="_blank" colored>GitHub</Button>
                                        </CardActions>
                                        <CardMenu style={{color: '#fff'}}>
                                            <IconButton name="share" />
                                        </CardMenu>
                                    </Card>
                            </Cell>
                        </Grid>
                </div>
            )
            
        }
    }

    render(){
        return(
            <div className="category-Tabs">
            <Grid>
                <Cell col={12} style={{margin: 'auto'}}>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab style={{fontSize: '14px', fontWeight: 'bold'}}>ReactJS</Tab>
                    <Tab style={{fontSize: '14px', fontWeight: 'bold'}}>NodeJS</Tab>
                    <Tab style={{fontSize: '14px', fontWeight: 'bold'}}>Android</Tab>                  
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
        )
    }
}

export default Projects;