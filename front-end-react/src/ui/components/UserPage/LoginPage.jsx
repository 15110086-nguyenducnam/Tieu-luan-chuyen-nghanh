import React from 'react';
import cx from 'classnames';
import './style.css'

class LoginPage extends React.Component {
    constructor(props){
        super(props);
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
                                    <label for={"exampleInputEmail1"}>Địa chỉ email</label>
                                    <input type={"email"} className={"form-control"} id={"exampleInputEmail1"} aria-describedby={"emailHelp"}
                                        placeholder={"example@gmail.com"} />
                                </div>
                                <div className={"form-group"}>
                                    <label for={"exampleInputPassword1"}>Mật khẩu</label>
                                    <span style={{"float": "right"}}><a href={" "}>Quên mật khẩu?</a></span>
                                    <input type={"password"} className={"form-control"} id={"exampleInputPassword1"} placeholder={" "}/>
                                </div>
                                <button className={cx("btn", "btn-primary", "d-block", "mx-auto", "mt-3", "custom-btn")}>Đăng nhập</button>
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

export default LoginPage;