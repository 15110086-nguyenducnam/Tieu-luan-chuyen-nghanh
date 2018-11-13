import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import './App.css';
import * as PATH from '../constants/routeConstants';
import Header from '../ui/containers/Header';
import Footer from '../ui/containers/Footer';
import HomePageContainer from '../ui/containers/HomePage/HomePage';
import FashionPageContainer from '../ui/containers/FashionPage/FashionPage';

class App extends Component {
  render() {
    return (
        <div>
            <Header/>
            <div className="content-wrapper">
                <section className="content-header">
                    
                    <Switch>
                        <Route path={PATH.FASHION_URL} component={FashionPageContainer} />
                        <Route path={PATH.HOME_URL} extact component={HomePageContainer} />
                        <Route path={PATH.PROJECT_URL} extact render={ () => <h1>Project</h1>} />
                        <Route path={PATH.PROJECT_URL} extact render={ () => <h1>Project</h1>} />
                        <Route path={PATH.USERS_URL} extact render={ () => <h1>Users</h1>} />
                        <Route path={PATH.TEAM_URL} extact render={ () => <h1>Team</h1>} />
                    </Switch>
                    
                </section>
                { /**/}
                { /**/}
                <Switch>
                    <Route path={PATH.FASHION_URL} component={FashionPageContainer} />
                </Switch>
            </div>
            <Footer/>
        </div>
    );
  }
}

export default withRouter(App);