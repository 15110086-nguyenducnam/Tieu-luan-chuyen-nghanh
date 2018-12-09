import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'


const ShoppingCart = (props) => {
    return (
        <div>
            <div className="navigation" style={{right: props.show?"-300px":"0"}}>
                <div className="abc" style={{height: '800px', width: '300px', backgroundColor: 'white'}}>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart;
        