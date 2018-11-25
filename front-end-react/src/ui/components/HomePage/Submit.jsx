import React from 'react';
import cx from 'classnames';

class Submit extends React.Component {

    render() {
        return (
            <div className={cx("jsx-350614096", "subscribe-container")}> 
                <div className={cx("jsx-350614096", "container")}>
                    <div className={cx("jsx-350614096", "content-wrap")}>
                        <div className={cx("jsx-350614096", "title")}>
                            <h3 className={"jsx-350614096"}>Đăng ký ngay!</h3>
                            <p className={"jsx-350614096"}>Nhận bản tin từ Leflair mỗi ngày</p>
                        </div>
                        <form name={"form"} className={cx("jsx-350614096", "form")}>
                            <div className={cx("jsx-350614096", "row")}>
                                <div className={cx("jsx-350614096", "col-md-8", "col-12", "form-group", "mb-md-0", "pl-md-0")}>
                                    <input name={"email"} placeholder={'Email của bạn...'} required={''} className={cx("jsx-350614096", "form-control")} type={"email"} />
                                </div>
                                <div className={cx("jsx-350614096", "col-md-4", "col-12", "form-group", "mb-md-0", "pl-md-0", "pr-md-0")}>
                                    <button type={"submit"} className={cx("btn", "btn-primary", "btn-block")}>Đăng Ký</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Submit