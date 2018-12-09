import React from 'react';
import cx from 'classnames';
import './style.css';

class PromotionTime extends React.Component {
    constructor(props) {
        super(props);
        this.expected_delivery = props.expected_delivery
    }

    render() {
        return (
            <React.Fragment>
                <div className={"pt-2"} style={{"marginLeft": "60px"}}>
                    <p>Ưu đãi này sẽ kết thúc trong:</p>
                    <div style={{"marginLeft": "15px"}}>
                        <ul className={cx("list-inline", "count")}>
                            <li className="list-inline-item">23</li>
                            <li className="list-inline-item">14</li>
                            <li className="list-inline-item">54</li>
                            <li className="list-inline-item">12</li>
                        </ul>
                        <ul className={"list-inline"} style={{"marginTop": "-10px"}}>
                            <li className="list-inline-item">Ngày</li>
                            <li className="list-inline-item">Giờ</li>
                            <li className="list-inline-item">Phút</li>
                            <li className="list-inline-item">Giây</li>
                        </ul>
                    </div>
                </div>
                <div className={cx("icon-branch", "text-left")}>
                    <ul style={{"listStyleType": "none"}}>
                        <li><i className={cx("fas", "fa-shield-alt")}></i>&nbsp;Cam kết 100% chính hãng</li>
                        <li><i className={cx("fas", "fa-truck")}></i>&nbsp;Giao hàng dự kiến:<strong>{this.expected_delivery}</strong></li>
                        <li><i className={cx("fas", "fa-sync-alt")}></i>&nbsp;Sản phẩm này được đổi trả</li>
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}

export default PromotionTime;