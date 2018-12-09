import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import SaleComponent from '../../components/SalePage/SalePage';

class SalePage extends Component {
    constructor(props) {
        super(props);
        this.category_id = this.props.match.params.category_id
        this.classifies = [
            {
                'label': 'Phân loại',
                'children': [
                    'Túi Xách Tay',
                    'Túi Xách Tay'
                ]
            },
            {
                'label': 'Thương hiệu',
                'children': [
                    'Gucci'
                ]
            },
            {
                'label': 'TYPE',
                'children':[
                    'Túi Xách Tay'
                ]
            }
        ];

    }

    render() {
        return (
            <SaleComponent category_id={this.category_id} classifies={this.classifies}/>
        )
    }
}

export default withRouter(SalePage);