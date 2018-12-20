import React from 'react';
import cx from 'classnames';
import './style.css';
import * as PATH from '../../../constants/routeConstants';
import {withRouter} from 'react-router-dom';

class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        if (localStorage.getItem('username') !== null) {
            this.props.history.push(PATH.HOME_URL);
        }
        this.state = {
            'email': '',
            'password': '',
            'error': '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
    }
    
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value});
    }

    login(e) {
        e.preventDefault();

        let data = {
            'email': this.state.email,
            'password': this.state.password
        }

        fetch('https://gory-pirate-68036.herokuapp.com/api/v1/auths/login/', {
            method: 'POST',
            body:  JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(response => response.json()
        ).then(
            result => {
                if (result['status'] == true) {
                    localStorage.setItem('username', `${result['khachhang']['ho']} ${result['khachhang']['ten']}`);
                    localStorage.setItem('token', result['khachhang']['api_key']['token']);
                    this.props.history.push(PATH.HOME_URL);
                } else {
                    this.setState({'error': 'Tài khoản và mật khẩu không hợp lệ'})
                }
            }
        )
    }

    render() {
        return (
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-md-3"}></div>
                    <div className={"col-md-6"}>
                        <div className={"text-center"}>
                            <h3>Đăng nhập</h3>
                        </div>
                        <div className={"frame"}>
                            <form className={"form-login"}>
                                <button className={cx("loginBtn", "loginBtn--facebook", "mt-2")}>
                                    Đăng nhập bằng Facebook
                                </button>
                                <div className={"seperator"}>
                                    <hr/>
                                    <span className={"or-text"}>hoặc</span>
                                </div>
                                <div className={"form-group"}>
                                    <label htmlFor={"exampleInputEmail1"}>Địa chỉ email</label>
                                    <input type={"email"} className={"form-control"} id={"exampleInputEmail1"} aria-describedby={"emailHelp"}
                                        placeholder={"example@gmail.com"} onChange={this.handleChange} name={'email'} value={this.state.email} />
                                </div>
                                <div className={"form-group"}>
                                    <label htmlFor={"exampleInputPassword1"}>Mật khẩu</label>
                                    <span style={{"float": "right"}}><a href={" "}>Quên mật khẩu?</a></span>
                                    <input type={"password"} className={"form-control"} id={"exampleInputPassword1"} 
                                        onChange={this.handleChange} placeholder={" "} name={'password'} value={this.state.password} />
                                </div>
                                <div className="content" dangerouslySetInnerHTML={{__html: this.state.error}}></div>
                                <button className={cx("btn", "btn-primary", "d-block", "mx-auto", "mt-3", "custom-btn")} onClick={this.login}>Đăng nhập</button>
                                <div className={"text-center"}>
                                    <p className={"pt-3"}>Bạn chưa là thành viên?<a href="#"> Tạo tài khoản mới</a></p>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className={"col-md-3"}></div>
                </div>
            </div>
        )
    }
}

export default withRouter(LoginPage);