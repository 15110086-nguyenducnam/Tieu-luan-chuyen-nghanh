import React from 'react';
import './style.css'

class RightInfoDetail extends React.Component {
    constructor(props) {
        super(props);
        this.label = this.props.label;
        this.name = this.props.name;
        this.oldPrice = this.props.oldPrice;
        this.price = this.props.price;
    }

    render() {
        return (
            <React.Fragment>
                    <h4>{this.label}</h4>
                    <h3>{this.name}</h3>
                    <del>{this.oldPrice}đ</del>
                    <span style={{color: "blue", "fontSize": "1.5em"}}>{this.price}đ</span>    
            </React.Fragment>
        )
    }
}

export default RightInfoDetail;