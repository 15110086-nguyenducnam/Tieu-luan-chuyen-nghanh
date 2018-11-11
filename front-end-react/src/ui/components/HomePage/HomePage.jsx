import React, { Component } from 'react';
import Slider from "react-slick";
import cx from 'classnames';
import './HomePage.css'

class HomePage extends React.Component {

    render() {
        let settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1
        };
        return (
            <React.Fragment>
                <center>
                    <a href={''}>
                        <img src={require('./images/homepage.png')} className={"img-fluid"}/>
                    </a>
                </center>

                <div className={"parent_body"}>
                    <div className={cx("container", "category", "c_parent_body")}>
                        <div className={"header-label"}>
                            <center>
                                <h4>Mua theo Danh Mục</h4>
                            </center>
                        </div>
                        <div className={cx("row", "row-item")}>
                            <div className={"col-2"}>
                                <center>
                                    <a href={''}>
                                        <img src={require('./images/thoitrang.jpg')} className={"img-fluid"} />
                                    </a>
                                    <h6>Thời trang</h6>
                                </center>
                            </div>
                            <div className={"col-2"}>
                                <center>
                                    <a href={''}>
                                        <img src={require('./images/tuixach&giaydep.jpg')} className={"img-fluid"} />
                                    </a>
                                    <h6>Túi xách & Giày dép</h6>
                                </center>
                            </div>
                            <div className={"col-2"}>
                                <center>
                                    <a href={''}>
                                        <img src={require('./images/phukien.jpg')} className={"img-fluid"} />
                                    </a>
                                    <h6>Phụ kiện</h6>
                                </center>
                            </div>
                            <div className={"col-2"}>
                                <center>
                                    <a href={''}>
                                    <img src={require('./images/suckhoe&lamdep.jpg')} className={"img-fluid"} />
                                    </a>
                                    <h6>Sức khỏe & Làm đẹp</h6>
                                </center>
                            </div>
                            <div className={"col-2"}>
                                <center>
                                    <a href={''}>
                                    <img src={require('./images/nhacua&doisong.jpg')} className={"img-fluid"} />
                                    </a>
                                    <h6>Nhà cửa & Đời sống</h6>
                                </center>
                            </div>
                            <div className={"col-2"}>
                                <center>
                                    <a href={''}>
                                    <img src={require('./images/hangnhapkhau.jpg')} className={"img-fluid"} />
                                    </a>
                                    <h6>Hàng nhập khẩu</h6>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div className={cx("container", "category")} >
                  <div className={"header-label"}>
                    <center><h4>Ưu Đãi Mới Nhất</h4></center>
                  </div>
                  <div className={cx("row", "row-item")}>
                    <div className={"col-md-6"}>
                      <a href={''}>
                        <img src={require('./images/oppo.jpg')} className={"img-fluid"}/>
                      </a>
                      <h6>Điện thoại Oppo</h6>
                      <h6>Còn 7 ngày</h6>
                    </div>
                    <div className={"col-md-6"}>
                      <a href={''}>
                        <img src={require('./images/huawei.jpg')} className={"img-fluid"}/>
                      </a>
                      <h6>Điện thoại Huawei</h6>
                      <h6>Còn 7 ngày</h6>
                    </div>
                  </div>
                  <div className={cx("row", "row-item")}>
                    <div className={"col-md-6"}>
                      <a href={''}>
                          <img src={require('./images/oppo.jpg')} className={"img-fluid"}/>
                      </a>
                      <h6>Điện thoại Oppo</h6>
                      <h6>Còn 7 ngày</h6>
                    </div>
                    <div className={"col-md-6"}>
                        <a href={''}>
                            <img src={require('./images/huawei.jpg')} className={"img-fluid"}/>
                        </a>
                        <h6>Điện thoại Huawei</h6>
                        <h6>Còn 7 ngày</h6>
                    </div>
                  </div>
                  <div className={cx("row", "row-item")}>
                    <div className={"col-md-6"}>
                      <a href={''}>
                          <img src={require('./images/oppo.jpg')} className={"img-fluid"}/>
                      </a>
                      <h6>Điện thoại Oppo</h6>
                      <h6>Còn 7 ngày</h6>
                    </div>
                    <div className={"col-md-6"}>
                      <a href={''}>
                          <img src={require('./images/huawei.jpg')} className={"img-fluid"}/>
                      </a>
                      <h6>Điện thoại Huawei</h6>
                      <h6>Còn 7 ngày</h6>
                    </div>
                  </div>
                  <div className={cx("row", "row-item")}>
                    <div className={"col-md-6"}>
                      <a href={''}>
                          <img src={require('./images/oppo.jpg')} className={"img-fluid"}/>
                      </a>
                      <h6>Điện thoại Oppo</h6>
                      <h6>Còn 7 ngày</h6>
                    </div>
                    <div className={"col-md-6"}>
                        <a href={''}>
                            <img src={require('./images/huawei.jpg')} className={"img-fluid"}/>
                        </a>
                        <h6>Điện thoại Huawei</h6>
                        <h6>Còn 7 ngày</h6>
                    </div>
                  </div>
                </div>

                <div className={cx("container", "category")}>
                  <div className={"header-label"}>
                    <center><h4>Bán chạy nhất trong ngày</h4></center>
                  </div>
                  <div className={"show-list-banchay"}>
                    <Slider {...settings}>
                        <div>
                          <a href={''}>
                              <img src={require('./images/loa.jpg')}/>
                          </a>
                        </div>
                        <div>
                          <a href={''}>
                              <img src={require('./images/loa.jpg')}/>
                          </a>
                        </div>
                        <div>
                          <a href={''}>
                              <img src={require('./images/loa.jpg')}/>
                          </a>
                        </div>
                        <div>
                          <a href={''}>
                              <img src={require('./images/loa.jpg')}/>
                          </a>
                        </div>
                        <div>
                          <a href={''}>
                              <img src={require('./images/loa.jpg')}/>
                          </a>
                        </div>
                    </Slider>
                  </div>
                </div>
                <hr/>

                <div className={cx("container", "category")}>
                  <div className={"header-label"}>
                    <center><h4>Nổi Bật từ Thời Trang</h4></center>
                  </div>
                  <center><a className={"text-no-underline"} href={''}>Xem Tất Cả (14) ></a></center>
                    <div className={cx("row", "row-item")} >
                        <div className={"col-md-6"}>
                            <a href={''}>
                                <img src={require('./images/oppo.jpg')} className={"img-fluid"}/>
                            </a>
                            <h6>Điện thoại Oppo</h6>
                            <h6>Còn 7 ngày</h6>
                        </div>
                        <div className={"col-md-6"}>
                            <a href={''}>
                                <img src={require('./images/oppo.jpg')} className={"img-fluid"}/>
                            </a>
                            <h6>Điện thoại Huawei</h6>
                            <h6>Còn 7 ngày</h6>
                        </div>
                    </div>
                    <div className={cx("row", "row-item")}>
                      <div className={"col-md-6"}>
                        <a href={''}>
                          <img src={require('./images/oppo.jpg')} className={"img-fluid"} />
                        </a>
                        <h6>Điện thoại Oppo</h6>
                        <h6>Còn 7 ngày</h6>
                      </div>
                      <div className={"col-md-6"}>
                        <a href={''}>
                          <img src={require('./images/huawei.jpg')} className={"img-fluid"} />
                        </a>
                        <h6>Điện thoại Huawei</h6>
                        <h6>Còn 7 ngày</h6>
                      </div>
                    </div>
                      <div className={cx("row", "row-item")}>
                        <div className={"col-md-6"}>
                          <a href={''}>
                            <img src={require('./images/oppo.jpg')} className={"img-fluid"} />
                          </a>
                          <h6>Điện thoại Oppo</h6>
                          <h6>Còn 7 ngày</h6>
                        </div>
                        <div className={"col-md-6"}>
                          <a href={''}>
                            <img src={require('./images/huawei.jpg')} className={"img-fluid"} />
                          </a>
                          <h6>Điện thoại Huawei</h6>
                          <h6>Còn 7 ngày</h6>
                        </div>
                      </div>
                </div>
                <br/>

                <div className={cx("container", "category")}>
                  <div className={"header-label"}>
                    <center><h4>Nổi Bật từ Túi Xách & Giày Dép</h4></center>
                  </div>
                    <center><a className={"text-no-underline"} href={''}>Xem Tất Cả (20) ></a></center>
                    <div className={cx("row", "row-item")}>
                        <div className={"col-md-6"}>
                            <a href={''}>
                                <img src={require('./images/oppo.jpg')} className={"img-fluid"}/>
                            </a>
                            <h6>Điện thoại Oppo</h6>
                            <h6>Còn 7 ngày</h6>
                        </div>
                        <div className={"col-md-6"}>
                            <a href={''}>
                                <img src={require('./images/huawei.jpg')} className={"img-fluid"}/>
                            </a>
                            <h6>Điện thoại Huawei</h6>
                            <h6>Còn 7 ngày</h6>
                        </div>
                    </div>
                    <div className={cx("row", "row-item")}>
                      <div className={"col-md-6"}>
                        <a href={''}>
                          <img src={require('./images/oppo.jpg')} className={"img-fluid"} />
                        </a>
                        <h6>Điện thoại Oppo</h6>
                        <h6>Còn 7 ngày</h6>
                      </div>
                      <div className={"col-md-6"}>
                        <a href={''}>
                          <img src={require('./images/huawei.jpg')} className={"img-fluid"} />
                        </a>
                        <h6>Điện thoại Huawei</h6>
                        <h6>Còn 7 ngày</h6>
                      </div>
                    </div>
                </div>
                <br/>

                <div className={cx("container", "category")}>
                  <div className={"header-label"}>
                    <center><h4>Nổi Bật từ Phụ Kiện</h4></center>
                  </div>
                    <center><a className={"text-no-underline"} href={''}>Xem Tất Cả (28) ></a></center>
                    <div className={cx("row", "row-item")}>
                        <div className={"col-md-6"}>
                            <a href={''}>
                                <img src={require('./images/oppo.jpg')} className={"img-fluid"}/>
                            </a>
                            <h6>Điện thoại Oppo</h6>
                            <h6>Còn 7 ngày</h6>
                        </div>
                        <div className={"col-md-6"}>
                            <a href={''}>
                                <img src={require('./images/huawei.jpg')} className={"img-fluid"}/>
                            </a>
                            <h6>Điện thoại Huawei</h6>
                            <h6>Còn 7 ngày</h6>
                        </div>
                    </div>
                </div>
                <br/>

                <div className={cx("container", "category")}>
                  <div className={"header-label"}>
                    <center><h4>Nổi Bật từ Sức Khoẻ & Làm Đẹp</h4></center>
                  </div>
                    <center><a className={"text-no-underline"} href={''}>Xem Tất Cả (38) ></a></center>
                    <div className={cx("row", "row-item")}>
                        <div className={"col-md-6"}>
                            <a href={''}>
                                <img src={require('./images/oppo.jpg')} className={"img-fluid"}/>
                            </a>
                            <h6>Điện thoại Oppo</h6>
                            <h6>Còn 7 ngày</h6>
                        </div>
                        <div className={"col-md-6"}>
                            <a href={''}>
                                <img src={require('./images/huawei.jpg')} className={"img-fluid"}/>
                            </a>
                            <h6>Điện thoại Huawei</h6>
                            <h6>Còn 7 ngày</h6>
                        </div>
                    </div>
                    <div className={cx("row", "row-item")}>
                      <div className={"col-md-6"}>
                        <a href={''}>
                          <img src={require('./images/oppo.jpg')} className={"img-fluid"} />
                        </a>
                        <h6>Điện thoại Oppo</h6>
                        <h6>Còn 7 ngày</h6>
                      </div>
                      <div className={"col-md-6"}>
                        <a href={''}>
                          <img src={require('./images/huawei.jpg')} className={"img-fluid"} />
                        </a>
                        <h6>Điện thoại Huawei</h6>
                        <h6>Còn 7 ngày</h6>
                      </div>
                    </div>
                </div>
                <br/>

                <div className={cx("container", "category")}>
                  <div className={"header-label"}>
                      <center><h4>Nổi Bật từ Nhà Cửa & Đời sống</h4></center>
                  </div>
                  <center><a className={"text-no-underline"} href={''}>Xem Tất Cả (41) ></a></center>
                  <div className={cx("row", "row-item")}>
                      <div className={"col-md-6"}>
                          <a href={''}>
                              <img src={require('./images/oppo.jpg')} className={"img-fluid"}/>
                          </a>
                          <h6>Điện thoại Oppo</h6>
                          <h6>Còn 7 ngày</h6>
                      </div>
                      <div className={"col-md-6"}>
                          <a href={''}>
                              <img src={require('./images/huawei.jpg')} className={"img-fluid"}/>
                          </a>
                          <h6>Điện thoại Huawei</h6>
                          <h6>Còn 7 ngày</h6>
                      </div>
                  </div>
                    <div className={cx("row", "row-item")}>
                      <div className={"col-md-6"}>
                        <a href={''}>
                          <img src={require('./images/oppo.jpg')} className={"img-fluid"} />
                        </a>
                        <h6>Điện thoại Oppo</h6>
                        <h6>Còn 7 ngày</h6>
                      </div>
                      <div className={"col-md-6"}>
                        <a href={''}>
                          <img src={require('./images/huawei.jpg')} className={"img-fluid"} />
                        </a>
                        <h6>Điện thoại Huawei</h6>
                        <h6>Còn 7 ngày</h6>
                      </div>
                    </div>
                </div>
                <br/>


                <div className={cx("container", "category")}>
                  <div className={"header-label"}>
                    <center><h4>Sắp Diễn Ra</h4></center>
                  </div>
                  <center>
                      <span className={"event"}>Ngày mai</span>
                      <span className={"event"}>Th3 16/10</span>
                      <span className={"event"}>Th4 17/10</span>
                  </center>
                  <div className={cx("row", "row-item")}>
                      <div className={"col-3"}>
                          <a href={''}>
                              <img src={require('./images/oppo.jpg')} className={"img-fluid"}/>
                          </a>
                          <h6>Điện thoại Oppo</h6>
                          <h6>Còn 7 ngày</h6>
                      </div>
                      <div className={"col-3"}>
                          <a href={''}>
                              <img src={require('./images/huawei.jpg')} className={"img-fluid"}/>
                          </a>
                          <h6>Điện thoại Huawei</h6>
                          <h6>Còn 7 ngày</h6>
                      </div>
                      <div className={"col-3"}>
                          <a href={''}>
                              <img src={require('./images/huawei.jpg')} className={"img-fluid"}/>
                          </a>
                          <h6>Điện thoại Huawei</h6>
                          <h6>Còn 7 ngày</h6>
                      </div>
                      <div className={"col-3"}>
                          <a href={''}>
                              <img src={require('./images/huawei.jpg')} className={"img-fluid"}/>
                          </a>
                          <h6>Điện thoại Huawei</h6>
                          <h6>Còn 7 ngày</h6>
                      </div>
                  </div>
                  <div className={cx("row", "row-item")}>
                      <div className={"col-3"}>
                          <a href={''}>
                              <img src={require('./images/oppo.jpg')} className={"img-fluid"}/>
                          </a>
                          <h6>Điện thoại Oppo</h6>
                          <h6>Còn 7 ngày</h6>
                      </div>
                      <div className={"col-3"}>
                          <a href={''}>
                              <img src={require('./images/huawei.jpg')} className={"img-fluid"}/>
                          </a>
                          <h6>Điện thoại Huawei</h6>
                          <h6>Còn 7 ngày</h6>
                      </div>
                      <div className={"col-3"}>
                          <a href={''}>
                              <img src={require('./images/huawei.jpg')} className={"img-fluid"}/>
                          </a>
                          <h6>Điện thoại Huawei</h6>
                          <h6>Còn 7 ngày</h6>
                      </div>
                      <div className={"col-3"}>
                          <a href={''}>
                              <img src={require('./images/huawei.jpg')} className={"img-fluid"}/>
                          </a>
                          <h6>Điện thoại Huawei</h6>
                          <h6>Còn 7 ngày</h6>
                      </div>
                  </div>
                </div>


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
            </React.Fragment>
        )
    }
}
export default HomePage;