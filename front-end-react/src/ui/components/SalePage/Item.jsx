import React from 'react';
import cx from 'classnames';
import { Link } from "react-router-dom";
import './style.css'

class Item extends React.Component {
    constructor(props){
        super(props);
        this.itemList = this.props.items;
    }

    isExistSaleOff = (item) => {
        if (item['saleOff']) {
            return(
                <div className={"sales"}>
                    <span>{item["saleOff"]}% OFF</span>
                </div>
            )
        }
    }

    isExistOldPrice = (item) => {
        if (item["oldPrice"]) {
            return(<del>{item["oldPrice"]}đ</del>)
        }
    }

    createItem = () => {
        let children = []
        this.itemList.map(
            (item, index) => {
                children.push(
                    <div key={index} className={cx("col-md-4", "mt-3")}>
                        <div className={cx("card-product", "img-top")}>
                            <img src={require(`${item["image1"]}`)} alt={"Card Back"} />
                            <img src={require(`${item["image2"]}`)} className={"img-top"} alt={"Card Front"} />
                            {this.isExistSaleOff(item)}
                        </div>
                        <div className={"card-body"}>
                            <Link to={item["url"]} style={{color: "black"}}>
                                <span>{item["label"]}</span>
                                <p style={{"margin-bottom": "0"}}>{item["name"]}</p>
                            </Link>
                            {this.isExistOldPrice(item)}
                            <span style={{"color": "blue", "font-size": "1.5em;"}}>{item["price"]}đ</span>
                        </div>
                    </div>
                )
            }
        )
        return children
    }

    render() {
        return (
            <React.Fragment>
                {this.createItem()}
            </React.Fragment>
        )
    }
}

export default Item