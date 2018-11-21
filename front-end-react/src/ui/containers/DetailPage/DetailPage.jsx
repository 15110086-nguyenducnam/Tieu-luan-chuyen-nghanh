import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import DetailComponent from '../../components/DetailPage/DetailPage';

class DetailPage extends Component {
    constructor(match, props) {
        super(props)
    }

    render() {
        return (
            <DetailComponent />
        )
    }
}

export default withRouter(DetailPage)