import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import LoginComponent from '../../components/UserPage/LoginPage';

class LoginPage extends Component {
    render() {
        return (
          <LoginComponent/>
        );
    }
}

export default withRouter(LoginPage);