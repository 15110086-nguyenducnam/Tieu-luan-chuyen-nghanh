import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import './App.css';
import * as PATH from '../constants/routeConstants';
import Header from '../ui/containers/Header';
import Footer from '../ui/containers/Footer';
import HomePageContainer from '../ui/containers/HomePage/HomePage';
import LoginPageContainer from '../ui/containers/UserPage/LoginPage';
import RegisterPageContainer from '../ui/containers/UserPage/RegisterPage';
import SalePageContainer from '../ui/containers/SalePage/SalePage';
import DetailPageContainer from '../ui/containers/DetailPage/DetailPage';
import CartPageContainer from '../ui/containers/ShoppingCart/ShoppingCart';

class App extends Component {
  render() {
    return (
        <div>
            <Header/>
            <div className="content-wrapper">
                <section className="content-header">
                    
                    <Switch>
                        <Route path={PATH.LOGIN_URL} extact component={LoginPageContainer} />
                        <Route path={PATH.REGISTER_URL} extact component={RegisterPageContainer} />
                        <Route path={PATH.CART_URL} extact component={CartPageContainer} />
                        <Route path={PATH.SALE_URL} extact component={SalePageContainer} />
                        <Route path={PATH.PRODUCT_URL} extact component={DetailPageContainer} />
                        <Route path={PATH.HOME_URL} extact component={HomePageContainer} />
                    </Switch>
                </section>
                <Switch>
                </Switch>
            </div>
            <Footer/>
        </div>
    );
  }
}

export default withRouter(App);