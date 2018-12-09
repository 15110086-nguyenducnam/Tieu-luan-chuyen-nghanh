import React from 'react';
import './style.css'

const BottomDetail = props => {
    return (
        <div className={"row"}>
            <div className={"col-md-6"} style={{"display": "inline-flex"}}>
                <div className={"guarantee-logo"}>
                    <img src={require("./images/guarantee.jpg")} alt={"guarantee"} style={{"width": "130px", "height": "130px"}}/>
                </div>
                <div className={"guarantee-info"} style={{"paddingLeft": "15px"}}>
                    <p>BẢO ĐẢM 100% CHÍNH HÃNG</p>
                    <ul>
                        <li>Leflair chỉ làm việc trực tiếp với các thương hiệu và nhà phân phối chính thức</li>
                        <li>Leflair kiểm soát chặt chẽ quy trình hàng hóa được hợp pháp giao dịch, nhập khẩu và
                            khai thuế</li>
                        <li>Leflair vận hành nghiêm ngặt quy trình kiểm soát chất lượng của từng sản phẩm trước
                            mỗi chương trình ưu đãi</li>
                    </ul>
                </div>
            </div>
            <div className={"col-md-6"}></div>
        </div>
    )
}

export default BottomDetail