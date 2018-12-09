import React from 'react';
import RightInfoDetail from './RightInfoDetail';
import RightSizeDetail from './RightSizeDetail';
import './style.css';

class RightDetail extends React.Component {

    render() {
        return (
            <React.Fragment>
                <RightInfoDetail label={this.props.label} name={this.props.name} oldPrice={this.props.oldPrice} price={this.props.price} />
            </React.Fragment>
        )
    }
}

export default RightDetail;