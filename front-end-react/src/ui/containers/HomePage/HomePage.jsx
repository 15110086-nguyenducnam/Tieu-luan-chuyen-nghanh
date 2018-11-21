import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import HomePageComponent from '../../components/HomePage/HomePage';

class HomePage extends Component {

    constructor(props) {
        super(props);

        this.newSalesList = [
            {
                "name": "Điện thoại Oppo",
                "images": "./images/oppo.jpg",
                "out_of_date": "Còn 7 ngày",
                "url": "/product/123"
            },
            {
                "name": "Điện thoại Huawei",
                "images": "./images/huawei.jpg",
                "out_of_date": "Còn 7 ngày",
                "url": "/product/123"
            },
             {
                "name": "Điện thoại Oppo",
                "images": "./images/oppo.jpg",
                "out_of_date": "Còn 7 ngày",
                "url": "/product/123"
            },
            {
                "name": "Điện thoại Huawei",
                "images": "./images/huawei.jpg",
                "out_of_date": "Còn 7 ngày",
                "url": "/product/123"
            },
             {
                "name": "Điện thoại Oppo",
                "images": "./images/oppo.jpg",
                "out_of_date": "Còn 7 ngày",
                "url": "/product/123"
            },
            {
                "name": "Điện thoại Huawei",
                "images": "./images/huawei.jpg",
                "out_of_date": "Còn 7 ngày",
                "url": "/product/123"
            },
             {
                "name": "Điện thoại Oppo",
                "images": "./images/oppo.jpg",
                "out_of_date": "Còn 7 ngày",
                "url": "/product/123"
            },
            {
                "name": "Điện thoại Huawei",
                "images": "./images/huawei.jpg",
                "out_of_date": "Còn 7 ngày",
                "url": "/product/123"
            }
        ];

        this.bestSellerList = [
            {
                "images": "./images/loa.jpg",
                "url": "/product/123"
            },
            {
                "images": "./images/loa.jpg",
                "url": "/product/123"
            },
            {
                "images": "./images/loa.jpg",
                "url": "/product/123"
            },
            {
                "images": "./images/loa.jpg",
                "url": "/product/123"
            },
            {
                "images": "./images/loa.jpg",
                "url": "/product/123"
            },
            {
                "images": "./images/loa.jpg",
                "url": "/product/123"
            }
        ]
    }
    render() {
        return (
          <HomePageComponent newSalesList={this.newSalesList} bestSellerList={this.bestSellerList}/>
        );
    }
}

export default withRouter(HomePage);