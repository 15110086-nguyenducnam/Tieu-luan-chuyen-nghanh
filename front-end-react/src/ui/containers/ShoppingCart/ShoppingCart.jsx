import React, { Component } from 'react';
import ShoppingCartComponent from '../../components/ShoppingCart/ShoppingCart';

class ShoppingCart extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ShoppingCartComponent/>
        );
    }
}

export default ShoppingCart;