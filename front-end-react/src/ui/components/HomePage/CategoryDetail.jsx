import React from 'react';
import cx from 'classnames';
import { Link } from "react-router-dom";

class CategoryDetail extends React.Component {
    constructor(props){
        super(props);
        this.itemList = this.props.items;
    }

    createIteamDetail = (item) => {
        return(
            <div className={"col-md-6"}>
                <Link to={item["url"]}>
                    <img src={require(`${item["images"]}`)} className={"img-fluid"}/>
                </Link>
                <h6>{item["name"]}</h6>
                <h6>{item["out_of_date"]}</h6>
            </div>
        )
    }

    createItemList = () => {
        let children = [];
        for (let i=0; i<this.itemList.length; i+=2) {
            children.push(
                <div className={cx("row", "row-item")} key={i}>
                    {this.createIteamDetail(this.itemList[i])}
                    {this.createIteamDetail(this.itemList[i+1])}
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
                <center><a className={"text-no-underline"} href={''}>Xem Tất Cả ({this.props.total}) ></a></center>
                {this.createItemList()}
            </div>
        )
    }
}

export default CategoryDetail;