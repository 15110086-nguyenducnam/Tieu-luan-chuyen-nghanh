import React from 'react';
import cx from 'classnames';
import { Link } from "react-router-dom";
import backendAPI from '../../../backend'
import './style.css'

class Item extends React.Component {

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
        let children = [];
        this.props.items.map(
            (item, index) => {
                let gia = item['gia'] ? new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'vnd' }).format(item['gia']['gia']) : 0;
                // <img src={item["photos"][1]['image_file_name']} className={"img-top"} alt={"Card Front"} />
                children.push(
                    <div key={index} className={cx("col-md-4", "mt-3")}>
                        <Link to={'/product/'+item['id']} style={{color: "black"}}>
                            <div className={cx("card-product", "img-top")}>
                                <img src={backendAPI+item["photos"][0]['image_file_name']} alt={"Card Back"} /> 
                                {this.isExistSaleOff(item)}
                            </div>
                            <div className={"card-body"}>
                                <p style={{"marginBottom": "0"}}>{item["tensp"]}</p>
                                {this.isExistOldPrice(item)}
                            <span style={{"color": "blue", "fontSize": "1.5em"}}>{gia}</span>
                        </div>
                        </Link>
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