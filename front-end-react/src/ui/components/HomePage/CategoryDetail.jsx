import React from 'react';
import cx from 'classnames';
import { Link } from "react-router-dom";
import backendAPI from '../../../backend';

class CategoryDetail extends React.Component {
    constructor(props){
        super(props);
    }

    createIteamDetail = (item) => {
        return(
            <div className={"col-md-6"}>
                <Link to={'/product/'+item['id']}>
                    <img src={`${backendAPI}/${item["image"]}`} className={"img-fluid"} style={{'width': '480px', 'height': '222px'}}/>
                </Link>
                <h6>{item["name"]}</h6>
                <h6>Ngày bắt đầu {item["begin"]}</h6>
                <h6>Ngày kết thúc {item["end"]}</h6>
            </div>
        )
    }

    createItemList = () => {
        let children = [];
        for (let i=0; i<this.props.items.length; i+=2) {
            children.push(
                <div className={cx("row", "row-item")} key={i}>
                    {this.createIteamDetail(this.props.items[i])}
                    {this.createIteamDetail(this.props.items[i+1])}
                </div>
            )
        }
        return children
    }

    render(){
        return (
            <div className={cx("container", "category")} >
                <div className={"header-label"}>
                    <center><h4>{this.props.name}</h4></center>
                </div>
                <center><a className={"text-no-underline"} href={''}>Xem Tất Cả></a></center>
                {this.createItemList()}
            </div>
        )
    }
}

export default CategoryDetail;