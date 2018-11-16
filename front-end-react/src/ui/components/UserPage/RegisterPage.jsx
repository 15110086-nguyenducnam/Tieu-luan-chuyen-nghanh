import React from 'react';
import cx from 'classnames';
import './style.css'

class RegisterPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {selectedOption: 'male'}
        this.handleOptionChange = this.handleOptionChange.bind(this)
    }

    handleOptionChange(e) {
        this.setState({
            selectedOption: e.currentTarget.value
            });
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
                                    Tạo mới bằng Facebook
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
                                    <input type={"password"} className={"form-control"} id={"exampleInputPassword1"} placeholder={" "}/>
                                </div>
                                <div className={cx("btn-group", "btn-group-toggle", "d-flex", "justify-content-center")} data-toggle={"buttons"}>
                                    <label className={this.state.selectedOption === 'male'? cx("btn", "btn-outline-secondary", "active") : cx("btn", "btn-outline-secondary")}>
                                        <input type={"radio"} name={"options"} id={"option1"} autocomplete={"off"} value={'male'}
                                         checked={this.state.selectedOption === 'male'} onChange={this.handleOptionChange}  /> Nam
                                    </label>
                                    <label className={this.state.selectedOption === 'female'? cx("btn", "btn-outline-secondary", "active") : cx("btn", "btn-outline-secondary")}>
                                        <input type={"radio"} name={"options"} id={"option3"} autocomplete={"off"} value={'female'}
                                         checked={this.state.selectedOption === 'female'} onChange={this.handleOptionChange} /> Nữ
                                    </label>
                                </div>
                                <button className={cx("btn", "btn-primary", "d-block", "mx-auto", "mt-3", "custom-btn")}>Tạo tài khoản mới</button>
                                <div className={"text-center"}>
                                    <small id={"emailHelp"} className={cx("form-text", "text-muted", "mt-2")}>Bằng việc tiếp tục, bạn đồng ý với <a
                                            href={"#"}>điều khoản sử dụng</a> của Leflair Vietnam
                                    </small>
                                    <p class={"pt-3"}>Bạn đã là thành viên?<a href={"#"}> Đăng nhập</a></p>
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

export default RegisterPage