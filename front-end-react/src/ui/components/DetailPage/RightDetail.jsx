import React from 'react';
import RightInfoDetail from './RightInfoDetail';
import './style.css';

class RightDetail extends React.Component {

    render() {
        return (
            <React.Fragment>
                <RightInfoDetail label={this.props.label} name={this.props.name} price={this.props.price} />
            </React.Fragment>
        )
    }
}

export default RightDetail;