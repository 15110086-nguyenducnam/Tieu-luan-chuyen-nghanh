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