import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import HomePageComponent from '../../components/HomePage/HomePage';

class HomePage extends Component {
    render() {
        return (
          <HomePageComponent/>
        );
    }
}

export default withRouter(HomePage);