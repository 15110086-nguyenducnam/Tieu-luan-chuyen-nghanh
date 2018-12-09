import React from 'react';
import cx from 'classnames';
import { Link } from "react-router-dom";

class Category extends React.Component {

    constructor(props) {
        super(props);
        this.category = [
            {
                "id": 1,
                "name": "Thời trang",
                "img": "./images/thoitrang.jpg",
                "url": "/sale/1"
            },
            {
                "id": 2,
                "name": "Túi xách & Giày dép",
                "img": "./images/tuixach&giaydep.jpg",
                "url": "/sale/2"
            },
            {
                "id": 3,
                "name": "Phụ kiện",
                "img": "./images/phukien.jpg",
                "url": "/sale/3"
            },
            {
                "id": 4,
                "name": "Sức khỏe & Làm đẹp",
                "img": "./images/suckhoe&lamdep.jpg",
                "url": "/sale/4"
            },
            {
                "id": 5,
                "name": "Nhà cửa & Đời sống",
                "img": "./images/nhacua&doisong.jpg",
                "url": "/sale/5"
            },
            {
                "id": 6,
                "name": "Hàng nhập khẩu",
                "img": "./images/hangnhapkhau.jpg",
                "url": "/sale/6"
            }
        ]   
    }
    
    createCategory = () => {
        let children = []
        this.category.forEach(
            (element) => {
                children.push(
                    <div className={"col-2"} key={element["id"]}>
                        <center>
                            <Link to={element['url']}>
                                <img src={require(`${element["img"]}`)} className={"img-fluid"} />
                            </Link>
                            <h6>{element["name"]}</h6>
                        </center>
                    </div>
                )
            }
        );
        return children
    }

    render() {
        return (
            <div className={"parent_body"}>
                <div className={cx("container", "category", "c_parent_body")}>
                    <div className={"header-label"}>
                        <center>
                            <h4>Mua theo Danh Mục</h4>
                        </center>
                    </div>
                    <div className={cx("row", "row-item")}>
                        {this.createCategory()}
                    </div>
                </div>
            </div>
        )
    }
}
export default Category;