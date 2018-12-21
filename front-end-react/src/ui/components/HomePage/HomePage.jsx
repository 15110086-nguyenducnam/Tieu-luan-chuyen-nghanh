import React from 'react';
import './HomePage.css'
import Category from './Category'
import CategoryDetail from './CategoryDetail'
import Submit from './Submit'
import moment from 'moment'
import backendAPI from '../../../backend';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'salesList': []
        }

    }

    componentDidMount() {
        fetch(backendAPI+'/api/v1/khuyenmais').then(
            response => {
                return response.json();
            }
        ).then(
            data => {
                let itemList = data['khuyenmais'].map(
                    (item) => {
                        return {
                            id: item['sanpham']['id'],
                            begin: moment(item['ngaybd']).format('h:mm:ss DD/MM/YYYY'),
                            end: moment(item['ngaykt']).format('h:mm:ss DD/MM/YYYY'),
                            name: item['sanpham']['tensp'],
                            price: item['sanpham']['gia']['gia'],
                            image: item['sanpham']['photos'][0]['image_file_name']
                        }
                    }
                )
                this.setState({salesList: itemList})
            }
        )
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
                <CategoryDetail name={"Ưu Đãi Mới Nhất"} items={this.state.salesList}/>

                <Submit />
                
            </React.Fragment>
        )
    }
}
export default HomePage;