import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import SaleComponent from '../../components/SalePage/SalePage';

class SalePage extends Component {
    constructor(props) {
        super(props);

        this.name = "Paul's Boutique Ví & Túi Xách Nữ"
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

        this.total = 23;
        this.items = [
            {
                'image1': './images/product-front.jpg',
                'image2': './images/product-back.jpg',
                'label': 'Gucci',
                'name': 'Túi xách tay xanh',
                'saleOff': '47',
                'oldPrice': '2.500.000',
                'price': '1.900.000',
                'url': '/product/123'
            },
            {
                'image1': './images/product-front.jpg',
                'image2': './images/product-back.jpg',
                'label': 'Gucci',
                'name': 'Túi xách tay xanh',
                'saleOff': '47',
                'oldPrice': '2.500.000',
                'price': '1.900.000',
                'url': '/product/123'
            },
            {
                'image1': './images/product-front.jpg',
                'image2': './images/product-back.jpg',
                'label': 'Gucci',
                'name': 'Túi xách tay xanh',
                'saleOff': '47',
                'oldPrice': '2.500.000',
                'price': '1.900.000',
                'url': '/product/123'
            },
            {
                'image1': './images/product-front.jpg',
                'image2': './images/product-back.jpg',
                'label': 'Gucci',
                'name': 'Túi xách tay xanh',
                'saleOff': '47',
                'oldPrice': '2.500.000',
                'price': '1.900.000',
                'url': '/product/123'
            },
        ]
    }

    render() {
        return (
            <SaleComponent name={this.name} classifies={this.classifies} total={this.total} items={this.items}/>
        )
    }
}

export default withRouter(SalePage);