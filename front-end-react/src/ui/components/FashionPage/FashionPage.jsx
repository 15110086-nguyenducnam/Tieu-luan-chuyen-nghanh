import React, { Component } from 'react';
import cx from 'classnames';
import './FashionPage.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class FashionPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className={"container-fluid"} style={{padding: "0 0"}}>
                    <nav className={cx("navbar", "navbar-expand-lg", "navbar-light" ,"bg-light")}>
                        <a className={"navbar-brand"} href={"#"}></a>
                        <button className={"navbar-toggler"} type="button" data-toggle={"collapse"} data-target={"#navbarSupportedContent"}
                            aria-controls={"navbarSupportedContent"} aria-expanded={"false"} aria-label={"Toggle navigation"}>
                            <span className={"navbar-toggler-icon"}></span>
                        </button>
                        <div className={cx("collapse", "navbar-collapse", "d-flex", "justify-content-center")} id={"navbarSupportedContent"}>
                            <ul className={cx("navbar-nav", "list-menu")}>
                                <li className={"nav-item"}>
                                    <a className={"nav-link"} href={"#"}>Áo thun<span className={"sr-only"}>(current)</span></a>
                                </li>
                                <li className={"nav-item"}>
                                    <a className={"nav-link"} href={"#"}>Áo sơ mi</a>
                                </li>
                                <li className={"nav-item"}>
                                    <a className={"nav-link"} href={"#"}>Áo khoác</a>
                                </li>
                                <li className={"nav-item"}>
                                    <a className={"nav-link"} href={"#"}>Quần dài</a>
                                </li>
                                <li className={"nav-item"}>
                                    <a className={"nav-link"} href={"#"}>Quần short</a>
                                </li>
                                <li className={"nav-item"}>
                                    <a className={"nav-link"} href={"#"}>Quần dài</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className={cx("container", "pt-3", "category")}>
                    <div className={"header-label"}>
                        <center>
                            <h4>Giảm giá mạnh</h4>
                        </center>
                    </div>
                    <OwlCarousel className="owl-theme" loop margin={10} nav>
                        <div class="item">
                            <img src={require('./images/slider.jpg')} alt={"picture"}/>
                        </div>
                        <div class="item">
                            <img src={require('./images/slider.jpg')} alt={"picture"}/>
                        </div>
                        <div class="item">
                            <img src={require('./images/slider.jpg')} alt={"picture"}/>
                        </div>
                        <div class="item">
                            <img src={require('./images/slider.jpg')} alt={"picture"}/>
                        </div>
                        <div class="item">
                            <img src={require('./images/slider.jpg')} alt={"picture"}/>
                        </div>
                        <div class="item">
                            <img src={require('./images/slider.jpg')} alt={"picture"}/>
                        </div>
                        <div class="item">
                            <img src={require('./images/slider.jpg')} alt={"picture"}/>
                        </div>
                        <div class="item">
                            <img src={require('./images/slider.jpg')} alt={"picture"}/>
                        </div>
                        <div class="item">
                            <img src={require('./images/slider.jpg')} alt={"picture"}/>
                        </div>
                    </OwlCarousel>
                    <hr/>

                    <div className={"header-label"}>
                        <center>
                        <h4>Gợi ý mua hàng</h4>
                        </center>
                    </div>
                    <div className={cx("row", "row-item")}>
                        <div className={"col-md-6"}>
                        <a href={"#"}>
                            <img src={require('./images/men.jpg')} className={"img-fluid"} />
                        </a>
                        <h6>Ao khoác</h6>
                        <h6>Còn 7 ngày</h6>
                        </div>
                        <div className={"col-md-6"}>
                        <a href={"#"}>
                            <img src={require('./images/nu.jpg')} className={"img-fluid"} />
                        </a>
                        <h6>Điện thoại Huawei</h6>
                        <h6>Còn 7 ngày</h6>
                        </div>
                    </div>
                    <div className={cx("row", "row-item")}>
                        <div className={"col-md-6"}>
                        <a href={"#"}>
                            <img src={require('./images/men.jpg')} className={"img-fluid"} />
                        </a>
                        <h6>Ao khoác</h6>
                        <h6>Còn 7 ngày</h6>
                        </div>
                        <div className={"col-md-6"}>
                        <a href={"#"}>
                            <img src={require('./images/nu.jpg')} className={"img-fluid"} />
                        </a>
                        <h6>Điện thoại Huawei</h6>
                        <h6>Còn 7 ngày</h6>
                        </div>
                    </div>
                    <div className={cx("row", "row-item")}>
                        <div className={"col-md-6"}>
                        <a href={"#"}>
                            <img src={require('./images/men.jpg')} className={"img-fluid"} />
                        </a>
                        <h6>Ao khoác</h6>
                        <h6>Còn 7 ngày</h6>
                        </div>
                        <div className={"col-md-6"}>
                        <a href={"#"}>
                            <img src={require('./images/nu.jpg')} className={"img-fluid"} />
                        </a>
                        <h6>Điện thoại Huawei</h6>
                        <h6>Còn 7 ngày</h6>
                        </div>
                    </div>
                    <hr/>
                </div>
                
            </React.Fragment>
        
        );    
    }
}
export default FashionPage;