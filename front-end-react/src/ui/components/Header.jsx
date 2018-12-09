import React from 'react';
import { Link } from "react-router-dom";
import * as PATH from '../../constants/routeConstants';
import ShoppingCart from './ShowShoppingCart/ShoppingCart';

class Header extends React.Component{
   state = {
        ShowShoppingCart: true,
    }
    handleShow = () => {
    this.setState({
        ShowShoppingCart: !this.state.ShowShoppingCart
    })
    }
    render(){
        return (
        <div className="container" style={{marginTop:'5px'}}>
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link to={PATH.HOME_URL}>
                    <img src='./images/logo.png' style={{width:"50px", height:"70px"}}/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="collapsingNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item" id="search_form">
                            <form className="form-inline">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to={PATH.LOGIN_URL}>Đăng nhập</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to={PATH.REGISTER_URL}>Đăng ký</Link>
                        </li>
                        <li>
                            <button className="btn btn-success" onClick={this.handleShow}>Giỏ hàng</button>
                            <ShoppingCart show={this.state.ShowShoppingCart}/>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
    }
}

export default Header;