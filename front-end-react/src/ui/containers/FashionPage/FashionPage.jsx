import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import FashionPageComponent from '../../components/FashionPage/FashionPage';

class FashionPage extends Component {
    render() {
        return (
          <FashionPageComponent/>
        );
    }
}

export default withRouter(FashionPage);