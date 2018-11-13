import React from 'react';
import cx from 'classnames';
import './HomePage.css'
import Category from './Category'
import CategoryDetail from './CategoryDetail'
import BestSeller from './BestSeller'
import Submit from './Submit'
import Event from './Event'

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.newSalesList = [
            {
                "name": "Điện thoại Oppo",
                "images": "./images/oppo.jpg",
                "out_of_date": "Còn 7 ngày",
                "url": " "
            },
            {
                "name": "Điện thoại Huawei",
                "images": "./images/huawei.jpg",
                "out_of_date": "Còn 7 ngày",
                "url": " "
            },
             {
                "name": "Điện thoại Oppo",
                "images": "./images/oppo.jpg",
                "out_of_date": "Còn 7 ngày",
                "url": " "
            },
            {
                "name": "Điện thoại Huawei",
                "images": "./images/huawei.jpg",
                "out_of_date": "Còn 7 ngày",
                "url": " "
            },
             {
                "name": "Điện thoại Oppo",
                "images": "./images/oppo.jpg",
                "out_of_date": "Còn 7 ngày",
                "url": " "
            },
            {
                "name": "Điện thoại Huawei",
                "images": "./images/huawei.jpg",
                "out_of_date": "Còn 7 ngày",
                "url": " "
            },
             {
                "name": "Điện thoại Oppo",
                "images": "./images/oppo.jpg",
                "out_of_date": "Còn 7 ngày",
                "url": " "
            },
            {
                "name": "Điện thoại Huawei",
                "images": "./images/huawei.jpg",
                "out_of_date": "Còn 7 ngày",
                "url": " "
            }
        ];

        this.bestSellerList = [
            {
                "images": "./images/loa.jpg",
                "url": " "
            },
            {
                "images": "./images/loa.jpg",
                "url": " "
            },
            {
                "images": "./images/loa.jpg",
                "url": " "
            },
            {
                "images": "./images/loa.jpg",
                "url": " "
            },
            {
                "images": "./images/loa.jpg",
                "url": " "
            },
            {
                "images": "./images/loa.jpg",
                "url": " "
            }
        ]
    }

    render() {
        return (
            <React.Fragment>
                <center>
                    <a href={''}>
                        <img src={require('./images/homepage.png')} className={"img-fluid"}/>
                    </a>
                </center>
                <Category/>
                <CategoryDetail name={"Ưu Đãi Mới Nhất"} items={this.newSalesList} total={12}/>

                <BestSeller items={this.bestSellerList} />
                <hr/>

                <CategoryDetail name={"Nổi Bật từ Thời Trang"} items={this.newSalesList} total={14} />
                <br/>

                <CategoryDetail name={"Nổi Bật từ Túi Xách & Giày Dép"} items={this.newSalesList} total={20} />
                <br/>

                <CategoryDetail name={"Nổi Bật từ Phụ Kiện"} items={this.newSalesList} total={28} />
                <br/>

                <CategoryDetail name={"Nổi Bật từ Sức Khoẻ & Làm Đẹp"} items={this.newSalesList} total={38} />
                <br/>

                <CategoryDetail name={"Nổi Bật từ Nhà Cửa & Đời sống"} items={this.newSalesList} total={41} />
                <br/>

                <Event events={["Ngày mai", "Th3 16/10", "Th4 17/10"]} items={this.newSalesList} />

                <Submit />
                
            </React.Fragment>
        )
    }
}
export default HomePage;