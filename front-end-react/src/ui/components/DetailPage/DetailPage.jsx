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
        this.state = {
            id: '',
            name: '',
            price: 0,
            image: '',
            alert: '',
        }

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
        this.expected_delivery = "Thứ 7 26/12 - Thứ 6 30/12"
        this.insertCart = this.insertCart.bind(this);
    }

    componentDidMount() {
        fetch(backendAPI+'/api/v1/sanphams/'+this.item_id).then(
            response => {
                return response.json();
            }
        ).then(
            data => {
                this.setState({
                    id: data.sanpham.id,
                    name: data.sanpham.tensp,
                    price: data.sanpham.gia.gia,
                    image: backendAPI+data.sanpham.photos[0]['image_file_name']
                });
            }
        )
    }

    insertCart() {
        let item = {
            id: this.state.id,
            name: this.state.name, 
            price: this.state.price, 
            image: this.state.image
        }

        let cart = JSON.parse(localStorage.getItem('cart'));

        if (cart == null) {
            cart = new Array();
            cart.push({item: item, total: 1})
            localStorage.setItem('cart', JSON.stringify(cart))
        } else {
            let isExist = false;
            for (let element in cart) {
                if (cart[element]['item']['name'] == item['name']) {
                    cart[element]['total'] += 1;
                    isExist = true;
                    break;
                }
            }
            if (!isExist) {
                cart.push({item: item, total: 1})
            }
            localStorage.setItem('cart', JSON.stringify(cart))
        }
        this.setState({'alert': 'Thêm vào thành công'})
    }

    render() {
        return (
            <div className={"container"}>
                <div className={cx("row", "mt-5")}>
                    <div className="col-md-7">
                        <LeftDetail image={this.state.image} logo={this.logo} description={this.description} slogan={this.slogan}/>
                    </div>
                    <div className="col-md-5">
                        <RightDetail label={this.label} name={this.state.name} price={this.state.price}/>
                        <div className={cx("add-button", "pt-4")}>
                            <button className={cx("btn", "btn-primary")} onClick={this.insertCart}>Thêm vào giỏ hàng</button>
                        </div>
                        <p>{this.state.alert}</p>
                        <PromotionTime expected_delivery={this.expected_delivery}/>
                        <hr/>
                        <ul className={cx("flex-column", "nav", "nav-pills", "info-right")}>
                            <DetailedInformation name="THÔNG TIN SẢN PHẨM" collapse="collapseSkin" info={[1,2]} />
                        </ul>
                    </div>
                </div>
                <div className={"col-md-12"}>
                    <hr/>
                    <BottomDetail />
                    <br/>
                </div>
            </div>
        )
    }
}

export default DetailPage