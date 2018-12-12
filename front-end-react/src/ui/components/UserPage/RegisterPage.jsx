import React from 'react';
import { Link } from "react-router-dom";
import * as PATH from '../../../constants/routeConstants';
import backendAPI from '../../../backend';
import cx from 'classnames';
import './style.css'
import {withRouter} from 'react-router-dom';

class RegisterPage extends React.Component {
    constructor(props){
        super(props);
        if (localStorage.getItem('username') !== null) {
            this.props.history.push(PATH.HOME_URL);
        }
        this.state = {
            email: '',
            ho: '',
            ten: '',
            sdt: '',
            dayofbirth: '',
            diachi: '',
            matkhau: '',
            selectedOption: '1',
            error: ''
        }
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.register = this.register.bind(this);
    }

    handleOptionChange(e) {
        this.setState({
            selectedOption: e.currentTarget.value
        });
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value});
    }

    getKey(key) {
        switch (key) {
            case 'email':
                return 'Địa chỉ email';
            case 'password':
                return 'Mật khẩu';
            case 'diachi':
                return 'Địa chỉ';
            case 'ho':
                return 'Họ';
            case 'ten':
                return 'Tên';
            case 'sdt':
                return 'Số điện thoại'
            default:
                return key
        }

    }

    register(e) {
        e.preventDefault();
        let data = {
            email: this.state.email,
            ho: this.state.ho,
            ten: this.state.ten,
            sdt: this.state.sdt,
            dateofbirth : this.state.dayofbirth,
            diachi: this.state.diachi,
            password: this.state.matkhau,
            loaikh_id: this.state.selectedOption
        }

        fetch(backendAPI+'/api/v1/auths/signup', {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(
            response => response.json()
        ).then(result => {
            if (result['status'] == true) {
                alert("Đăng kí thành công");
                this.props.history.push(PATH.HOME_URL);
            } else {
                let children = ""
                for(let i in result.message) {
                    children += `<p>${this.getKey(i)}</p>`;
                    children += '<ul>'
                    result.message[i].forEach(element => {
                        children += `<li> ${element} </li>`;
                    });
                    children += '</ul>'
                }
                this.setState({error: children})
            }
        })

    }

    render() {
        return (
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-md-3"}></div>
                    <div className={"col-md-6"}>
                        <div className={"text-center"}>
                            <h3>Đăng kí</h3>
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
                                    <label htmlFor={"exampleInputEmail1"}>Địa chỉ email</label>
                                    <input name={"email"} className={"form-control"} id={"exampleInputEmail1"} aria-describedby={"emailHelp"}
                                        placeholder={"example@gmail.com"} value={this.state.email} onChange={this.handleChange}/>
                                </div>
                                <div className={"form-group"}>
                                    <label htmlFor={"exampleInputEmail1"}>Họ</label>
                                    <input name={"ho"} className={"form-control"} id={"exampleInputEmail1"} aria-describedby={"emailHelp"}
                                        placeholder={"Nguyễn Văn"} value={this.state.ho} onChange={this.handleChange}/>
                                </div>
                                <div className={"form-group"}>
                                    <label htmlFor={"exampleInputEmail1"}>Tên</label>
                                    <input name={"ten"} className={"form-control"} id={"exampleInputEmail1"} aria-describedby={"emailHelp"}
                                        placeholder={"A"} value={this.state.ten} onChange={this.handleChange}/>
                                </div>
                                <div className={"form-group"}>
                                    <label htmlFor={"exampleInputEmail1"}>Số điện thoại</label>
                                    <input name={"sdt"} className={"form-control"} id={"exampleInputEmail1"} aria-describedby={"emailHelp"}
                                        placeholder={"097293724"} value={this.state.sdt} onChange={this.handleChange}/>
                                </div>
                                <div className={"form-group"}>
                                    <label htmlFor={"exampleInputEmail1"}>Ngày sinh</label>
                                    <input name={"dayofbirth"} type="date" className={"form-control"} id={"exampleInputEmail1"} aria-describedby={"emailHelp"}
                                        placeholder={""} value={this.state.dayofbirth} onChange={this.handleChange}/>
                                </div>
                                <div className={"form-group"}>
                                    <label htmlFor={"exampleInputEmail1"}>Địa chỉ</label>
                                    <input name={"diachi"} className={"form-control"} id={"exampleInputEmail1"} aria-describedby={"emailHelp"}
                                        placeholder={"01 Võ Văn Ngân, Quận Thủ Đức, TP.HCM"} value={this.state.diachi} onChange={this.handleChange}/>
                                </div>
                                <div className={"form-group"}>
                                    <label htmlFor={"exampleInputPassword1"}>Mật khẩu</label>
                                    <input name={"matkhau"} type="password" className={"form-control"} id={"exampleInputPassword1"} placeholder={" "}
                                     value={this.state.matkhau} onChange={this.handleChange}/>
                                </div>
                                <div className={cx("btn-group", "btn-group-toggle", "d-flex", "justify-content-center")} data-toggle={"buttons"}>
                                    <label className={this.state.selectedOption === '1'? cx("btn", "btn-outline-secondary", "active") : cx("btn", "btn-outline-secondary")}>
                                        <input type={"radio"} name={"options"} id={"option0"} autoComplete={"off"} value={"1"}
                                         checked={this.state.selectedOption === '1'} onChange={this.handleOptionChange}  /> Học Sinh
                                    </label>
                                    <label className={this.state.selectedOption === '2'? cx("btn", "btn-outline-secondary", "active") : cx("btn", "btn-outline-secondary")}>
                                        <input type={"radio"} name={"options"} id={"option1"} autoComplete={"off"} value={"2"}
                                         checked={this.state.selectedOption === '2'} onChange={this.handleOptionChange} /> Sinh Viên
                                    </label>
                                    <label className={this.state.selectedOption === '3'? cx("btn", "btn-outline-secondary", "active") : cx("btn", "btn-outline-secondary")}>
                                        <input type={"radio"} name={"options"} id={"option2"} autoComplete={"off"} value={"3"}
                                         checked={this.state.selectedOption === '3'} onChange={this.handleOptionChange} /> Người đi làm
                                    </label>
                                </div>
                                <div className="content" dangerouslySetInnerHTML={{__html: this.state.error}}></div>
                                <button className={cx("btn", "btn-primary", "d-block", "mx-auto", "mt-3", "custom-btn")} onClick={this.register}>Tạo tài khoản mới</button>
                                <div className={"text-center"}>
                                    <small id={"emailHelp"} className={cx("form-text", "text-muted", "mt-2")}>Bằng việc tiếp tục, bạn đồng ý với <a
                                            href={"#"}>điều khoản sử dụng</a> của Leflair Vietnam
                                    </small>
                                    <p className={"pt-3"}>Bạn đã là thành viên?</p><Link to={PATH.LOGIN_URL}>Đăng nhập</Link>
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

export default withRouter(RegisterPage)