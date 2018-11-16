import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import RegisterComponent from '../../components/UserPage/RegisterPage';

class RegisterContainer extends Component {
    render() {
        return (
          <RegisterComponent/>
        );
    }
}

export default withRouter(RegisterContainer);