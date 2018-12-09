import React from 'react';
import cx from 'classnames';
import './style.css'
import LeftDetail from './LeftDetail';
import RightDetail from './RightDetail';
import PromotionTime from './PromotionTime';
import DetailedInformation from './DetailedInformation';
import BottomDetail from './BottomDetail';
import backendAPI from '../../../backend'

class DetailPage extends React.Component {
    constructor(props) {
        super(props);
        this.item_id = props.item_id;

        this.linkName = "Ưu đãi/ Guccii / Túi xách tay xanh"
        this.logo = "./images/logo-small.jpg"
        this.slogan = "Ngày mai đã là quá khứ từ giờ"
        this.description = "Guccii là tập đoàn thời trang thể thao đa quốc gia đến từ Đức, chuyên thiết kế và sản xuất\
        các sản phẩm giày, quần áo và phụ kiện thể thao nổi tiếng toàn cầu. Từ khởi đầu khiêm tốn vào\
        năm 1924, thương hiệu adidas ngày nay đã trở thành nhà sản xuất đồ thể thao lớn nhất châu Âu và\
        lớn thứ hai trên thế giới. Được xem là biểu tượng quyền năng của lĩnh vực thể thao chuyên dụng,\
        adidas xứng đáng là thương hiệu của những nhà vô địch, mang đến những sản phẩm tốt nhất cho các\
        các siêu sao thể thao nổi tiếng nhất thế giới và đưa họ đến đỉnh cao vinh quang của những điều\
        tưởng như 'không thể'"
        this.label = "Guccii"
        this.state = {
            name: '',
            price: 0,
            image: ''
        }
        this.expected_delivery = "Thứ 7 24/11 - Thứ 6 30/11"
    }

    componentDidMount() {
        fetch(backendAPI+'/sanphams/'+this.item_id).then(
            response => {
                return response.json();
            }
        ).then(
            data => {
                this.setState({
                    name: data.sanpham.tensp,
                    price: data.sanpham.gia,
                    image: data.sanpham.photos[0]['image_file_name']
                });
            }
        )
    }

    render() {
        return (
            <div className={"container"}>
                <p>{this.linkName}</p>
                <div className={cx("row", "mt-5")}>
                    <div className="col-md-7">
                        <LeftDetail image={this.state.image} logo={this.logo} description={this.description} slogan={this.slogan}/>
                    </div>
                    <div className="col-md-5">
                        <RightDetail label={this.label} name={this.state.name} oldPrice={this.oldPrice} price={this.state.price}/>
                        <div className={cx("add-button", "pt-4")}>
                            <button className={cx("btn", "btn-primary")}>Thêm vào giỏ hàng</button>
                        </div>
                        <PromotionTime expected_delivery={this.expected_delivery}/>
                        <hr/>
                        <ul className={cx("flex-column", "nav", "nav-pills", "info-right")}>
                            <DetailedInformation name="THÔNG TIN SẢN PHẨM" collapse="collapseSkin" info={[1,2]} />
                            <DetailedInformation name="CHẤT LIỆU & CÁCH SỬ DỤNG" collapse="collapseBody" info={[1,2]} />
                            <DetailedInformation name="CHI TIẾT KÍCH CƠ" collapse="collapseHair" info={[1,2]} />
                        </ul>
                    </div>
                </div>
                <div className={"col-md-12"}>
                    <hr/>
                    <BottomDetail />
                    <br/>
                </div>

                <div className={cx("col", "text-center")}>
                    <h3>Đã xem gần đây</h3>
                    "BỎ CAROUSEL VÔ ĐÂY"
                </div>
            </div>
        )
    }
}

export default DetailPage