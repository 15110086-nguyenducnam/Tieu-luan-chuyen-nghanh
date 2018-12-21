import React from 'react';
import './style.css'
import cx from 'classnames'
import { Link } from "react-router-dom";
import * as PATH from '../../../constants/routeConstants';
import backendAPI from '../../../backend';

class ShoppingCart extends React.Component { 
    constructor(props) {
        super(props);
        
        let isLogin = false;
        if (localStorage.getItem('username') !== null) {
            isLogin = true;
        }
        this.state = {
            cart : JSON.parse(localStorage.getItem('cart')),
            isLogin: isLogin,
            alert: '',
            total: new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'vnd' }).format(0)
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.subItem = this.subItem.bind(this);
        this.payAction = this.payAction.bind(this);
    }

    showLogin = () => {
        if (!this.state.isLogin) {
            return (
                <Link to={PATH.LOGIN_URL}>
                    Đăng nhập để thanh toán
                </Link>
            )
        } else {
            if (this.state.cart !== null) {
                return (
                    <button className="btn" onClick={this.payAction}>Thanh toán</button>
                )
            }
        }
    }


    componentDidMount() {
        if (this.state.cart === null || this.state.cart.length === 0) {
            this.setState(
                {
                    alert: "Giỏ hàng bạn còn trống",
                    total: new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'vnd' }).format(0)
                }
            );
        } else {
            let total = this.getTotal(this.state.cart);
            total = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'vnd' }).format(total)
            this.setState({total:total});
        }
    }

    getTotal(cart) {
        let total = 0;
        for (let i = 0; i<cart.length; i++) {
            total += (parseFloat(this.state.cart[i]['item']['price']) * parseInt(this.state.cart[i]['total']));
        }
        return total
    }

    deleteItem(e) {
        e.preventDefault();
        let index = e.target.id;
        let array = [...this.state.cart];
        array.splice(index, 1);
        let total = 0;
        if (array.length === 0) {
            localStorage.removeItem('cart');
        } else {
            localStorage.setItem('cart', JSON.stringify(array));
            total = this.getTotal(array)
        }
        total = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'vnd' }).format(total);
        this.setState({cart: array, total:total});
    }

    subItem(e) {
        e.preventDefault();
        let index = parseInt(e.target.id.slice(-1));
        let array = [...this.state.cart];
        let total = 0;
        if (array[index]['total'] === 1) {
            return;
        } else {
            array[index]['total'] -= 1;
            total = this.getTotal(array)
        }
        total = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'vnd' }).format(total);
        localStorage.setItem('cart', JSON.stringify(array));
        this.setState({cart: array, total:total});
    }

    payAction(e) {
        e.preventDefault();
        let user_id = localStorage.getItem('user_id');
        let token = localStorage.getItem('token');

        for (let i = 0; i<this.state.cart.length; i++) {
            let data = {
                id_khachhang: user_id,
                so_luong: this.state.cart[i]['total'],
                don_gia: this.state.cart[i]['item']['price'],
                id_sanpham: this.state.cart[i]['item']['id']
            }
            fetch(backendAPI+'/api/v1/donhangs/donhang', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "Access-Token": token
                },
                body: JSON.stringify(data)
            })
        }
        this.setState({cart:null, total: new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'vnd' }).format(0)})
        localStorage.removeItem('cart');
        this.setState({alert: "Tạo đơn hàng thành công"})
    }

    addItem(e) {
        e.preventDefault();
        let index = parseInt(e.target.id.slice(-1));
        let array = [...this.state.cart];
        let total = 0;
        array[index]['total'] += 1;
        total = this.getTotal(array)
        total = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'vnd' }).format(total);
        localStorage.setItem('cart', JSON.stringify(array));
        this.setState({cart: array, total:total});
    }

    showCart = () => {
        let childern = [];
        if (this.state.cart != null) {
            for (let i = 0; i<this.state.cart.length; i++) {
                childern.push(
                    <div className="row" key={i}>
                        <div className="col-md-3">
                            <img src={this.state.cart[i]['item']['image']} height="150px" width="250px" />
                        </div>
                        <div className="col-md-4">
                            {this.state.cart[i]['item']['name']}
                            <br/>
                            {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'vnd' }).format(this.state.cart[i]['item']['price'])}
                            <br/>
                            <button id={i} className="btn" onClick={this.deleteItem}>Xóa</button>
                        </div>
                        <div className="col-md-3">
                            <div className="input-group">
                                <span className="input-group-btn">
                                    <button id={`sub${i}`} type="button" className={cx("btn", "btn-default", "btn-number")} data-type="minus" onClick={this.subItem}>
                                        -
                                    </button>
                                </span>
                                <input type="text" name="quant[1]" className={cx("form-control", "input-number")} value={this.state.cart[i]['total']} disabled={true}/>
                                <span className="input-group-btn">
                                    <button id={`add${i}`} type="button" className={cx("btn", "btn-default", "btn-number")} data-type="plus" onClick={this.addItem}>
                                        +
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                )
            }
        }
        return childern
    }

    render() {
        return (
            <div className={"container"} style={{marginBottom:'310px', marginTop:'35px'}}>
                <center>
                    <h4>Giỏ hàng của bạn</h4>
                    <h5>{this.state.alert}</h5>
                </center>
                {this.showCart()}
                <hr/>
                Tổng giá trị: {this.state.total}
                <br/>
                {this.showLogin()}
            </div>
        )
    }
}

export default ShoppingCart;