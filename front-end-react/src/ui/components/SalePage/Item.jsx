import React from 'react';
import cx from 'classnames';
import { Link } from "react-router-dom";
import './style.css'

class Item extends React.Component {
    constructor(props){
        super(props);
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
        this.props.items.map(
            (item, index) => {
                // <img src={item["photos"][1]['image_file_name']} className={"img-top"} alt={"Card Front"} />
                children.push(
                    <div key={index} className={cx("col-md-4", "mt-3")}>
                        <div className={cx("card-product", "img-top")}>
                        <img src={item["photos"][0]['image_file_name']} alt={"Card Back"} /> 
                            {this.isExistSaleOff(item)}
                        </div>
                        <div className={"card-body"}>
                            <Link to={'/product/'+item['id']} style={{color: "black"}}>
                                <span></span>
                                <p style={{"marginBottom": "0"}}>{item["tensp"]}</p>
                            </Link>
                            {this.isExistOldPrice(item)}
                            <span style={{"color": "blue", "fontSize": "1.5em"}}>{item["gia"]}đ</span>
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