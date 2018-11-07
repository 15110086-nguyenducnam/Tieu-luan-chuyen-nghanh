import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import './App.css';
import * as PATH from '../constants/routeConstants';
import Header from '../ui/containers/Header';
import HomePageContainer from '../ui/containers/HomePage/HomePage';

class App extends Component {
  render() {
    return (
        <div>
            <Header/>
            <div className="content-wrapper">
                <section className="content-header">
                    
                    <Switch>
                        <Route path={PATH.PROJECT_URL} extact render={ () => <h1>Project</h1>} />
                        <Route path={PATH.PROJECT_URL} extact render={ () => <h1>Project</h1>} />
                        <Route path={PATH.USERS_URL} extact render={ () => <h1>Users</h1>} />
                        <Route path={PATH.TEAM_URL} extact render={ () => <h1>Team</h1>} />
                    </Switch>
                    
                </section>
                { /**/}
                { /**/}
                <Switch>
                    <Route path={PATH.HOME_URL} extact component={HomePageContainer} />
                </Switch>
            </div>
        </div>
    );
  }
}

export default withRouter(App);