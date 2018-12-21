import React from 'react';
import './style.css'

class RightInfoDetail extends React.Component {

    render() {
        //<del>{this.props.oldPrice}đ</del>
        let price = this.props.price ? new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'vnd' }).format(this.props.price) : 0;

        return (
            <React.Fragment>
                    <h4>{this.props.label}</h4>
                    <h3>{this.props.name}</h3>
                    <span style={{color: "blue", "fontSize": "1.5em"}}>{price}</span>    
            </React.Fragment>
        )
    }
}

export default RightInfoDetail;