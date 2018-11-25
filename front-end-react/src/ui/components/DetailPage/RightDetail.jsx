import React from 'react';
import RightInfoDetail from './RightInfoDetail';
import RightSizeDetail from './RightSizeDetail';
import './style.css';

class RightDetail extends React.Component {
    constructor(props) {
        super(props);
        this.label = this.props.label;
        this.name = this.props.name;
        this.oldPrice = this.props.oldPrice;
        this.price = this.props.price;
        this.sizeList = this.props.sizeList
    }

    render() {
        return (
            <React.Fragment>
                <RightInfoDetail label={this.label} name={this.name} oldPrice={this.oldPrice} price={this.price} />
                <RightSizeDetail sizeList={this.sizeList}/>
            </React.Fragment>
        )
    }
}

export default RightDetail;