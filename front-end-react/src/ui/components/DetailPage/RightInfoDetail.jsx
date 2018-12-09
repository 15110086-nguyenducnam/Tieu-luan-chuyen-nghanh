import React from 'react';
import './style.css'

class RightInfoDetail extends React.Component {

    render() {
        return (
            <React.Fragment>
                    <h4>{this.props.label}</h4>
                    <h3>{this.props.name}</h3>
                    <del>{this.props.oldPrice}đ</del>
                    <span style={{color: "blue", "fontSize": "1.5em"}}>{this.props.price}đ</span>    
            </React.Fragment>
        )
    }
}

export default RightInfoDetail;