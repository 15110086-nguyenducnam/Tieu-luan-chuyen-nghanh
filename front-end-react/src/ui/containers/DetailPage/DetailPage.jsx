import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import DetailComponent from '../../components/DetailPage/DetailPage';

class DetailPage extends Component {
    constructor(props) {
        super(props);
        this.item_id = this.props.match.params.item_id;
    }

    render() {
        return (
            <DetailComponent item_id={this.item_id} />
        )
    }
}

export default withRouter(DetailPage)