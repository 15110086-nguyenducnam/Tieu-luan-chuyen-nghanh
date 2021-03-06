﻿import React from 'react';
import cx from 'classnames';

const Footer = props => {
    return (
        <div id={"footer"} className={cx("jsx-1045551551", "footer-section")}>
            <div className={cx("jsx-1045551551", "container")}>
                <div className={cx("jsx-1045551551", "upper")}>
                    <div className={cx("jsx-1045551551", "row")}>
                        <div className={cx("jsx-1045551551", "col-md-2", "social-links")}>
                            <a className={cx("jsx-1045551551", "logo")}>
                                <img src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAABSCAQAAACV6XKiAAAH6klEQVR42u2deWwVRRjAp8UiCNhyypVWCBJaUcSriAcWCaRBU6OiNCRWkENpCEpJFZWgokBbgoJYKirKZcXKEbQaUAIU0IgJBsEL5RCNiqgkXHLZn38gZd/O7L7dt+/t8dxv/uvO8c38Orsz3/fNPMFP+iR8LKRyNeOooJo69rCy4e/DpH6UieQ.jpg')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"} className={cx("jsx-1045551551", "image")} />
                            </a>
                            <ul className={cx("jsx-1045551551", "list-inline")}>
                                <li className={cx("jsx-1045551551", "list-inline-item")}>
                                    <a href={"https://www.facebook.com/LeflairVN"} className={"jsx-1045551551"}>
                                        <svg width={32} height={32} viewBox={"0 0 32 32"}>
                                            <title>facebook</title>
                                            <path d={"M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"}></path>
                                        </svg>
                                    </a>
                                </li>
                                <li className={cx("jsx-1045551551", "list-inline-item")}>
                                    <a href={"https://instagram.com/leflairvietnam"} className={"jsx-1045551551"}>
                                        <svg width={32} height={32} viewBox={"0 0 32 32"}>
                                            <title>instagram</title>
                                            <path d={"M16 2.881c4.275 0 4.781.019 6.462.094 1.563.069 2.406.331 2.969.55a4.952 4.952 0 0 1 1.837 1.194 5.015 5.015 0 0 1 1.2 1.838c.219.563.481 1.412.55 2.969.075 1.688.094 2.194.094 6.463s-.019 4.781-.094 6.463c-.069 1.563-.331 2.406-.55 2.969a4.94 4.94 0 0 1-1.194 1.837 5.02 5.02 0 0 1-1.837 1.2c-.563.219-1.413.481-2.969.55-1.688.075-2.194.094-6.463.094s-4.781-.019-6.463-.094c-1.563-.069-2.406-.331-2.969-.55a4.952 4.952 0 0 1-1.838-1.194 5.02 5.02 0 0 1-1.2-1.837c-.219-.563-.481-1.413-.55-2.969-.075-1.688-.094-2.194-.094-6.463s.019-4.781.094-6.463c.069-1.563.331-2.406.55-2.969a4.964 4.964 0 0 1 1.194-1.838 5.015 5.015 0 0 1 1.838-1.2c.563-.219 1.412-.481 2.969-.55 1.681-.075 2.188-.094 6.463-.094zM16 0c-4.344 0-4.887.019-6.594.094-1.7.075-2.869.35-3.881.744-1.056.412-1.95.956-2.837 1.85a7.833 7.833 0 0 0-1.85 2.831C.444 6.538.169 7.7.094 9.4.019 11.113 0 11.656 0 16s.019 4.887.094 6.594c.075 1.7.35 2.869.744 3.881.413 1.056.956 1.95 1.85 2.837a7.82 7.82 0 0 0 2.831 1.844c1.019.394 2.181.669 3.881.744 1.706.075 2.25.094 6.594.094s4.888-.019 6.594-.094c1.7-.075 2.869-.35 3.881-.744 1.05-.406 1.944-.956 2.831-1.844s1.438-1.781 1.844-2.831c.394-1.019.669-2.181.744-3.881.075-1.706.094-2.25.094-6.594s-.019-4.887-.094-6.594c-.075-1.7-.35-2.869-.744-3.881a7.506 7.506 0 0 0-1.831-2.844A7.82 7.82 0 0 0 26.482.843C25.463.449 24.301.174 22.601.099c-1.712-.081-2.256-.1-6.6-.1z"}></path>
                                            <path d={"M16 7.781c-4.537 0-8.219 3.681-8.219 8.219s3.681 8.219 8.219 8.219 8.219-3.681 8.219-8.219A8.221 8.221 0 0 0 16 7.781zm0 13.55a5.331 5.331 0 1 1 0-10.663 5.331 5.331 0 0 1 0 10.663zM26.462 7.456a1.919 1.919 0 1 1-3.838 0 1.919 1.919 0 0 1 3.838 0z"}></path>
                                        </svg>
                                    </a>
                                </li>
                                <li className={cx("jsx-1045551551", "list-inline-item")}>
                                    <a href={"https://www.linkedin.com/company/leflair"} className={"jsx-1045551551"}>
                                        <svg width={32} height={32} viewBox={"0 0 32 32"}>
                                            <title>linkedin2</title>
                                            <path d={"M12 12h5.535v2.837h.079c.77-1.381 2.655-2.837 5.464-2.837C28.92 12 30 15.637 30 20.367V30h-5.769v-8.54c0-2.037-.042-4.657-3.001-4.657-3.005 0-3.463 2.218-3.463 4.509V30H12V12zM2 12h6v18H2V12zM8 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"}></path>
                                        </svg>
                                    </a>
                                </li>
                                <li className={cx("jsx-1045551551", "list-inline-item")}>
                                    <a href={"https://zalo.me/3159399474223916820"} className={"jsx-1045551551"}>
                                        <svg width={24} height={24} viewBox={"0 0 24 24"}>
                                            <title>ic-zalo</title>
                                            <path d={"M7.198 23.822zm-.119-.084l.05.031-.05-.031zM23.972 17.5c.047.075.021.154.021.228.002 1.022.002 2.044.001 3.066a3.165 3.165 0 0 1-3.168 3.19c-1.886.011-3.773.003-5.659.003H7.596c-.105 0-.209-.007-.314-.009-1.432.001-2.865.048-4.295-.008-1.692-.065-2.986-1.487-2.986-3.182.001-5.467.012-10.934.001-16.4-.004-1.873 1.456-3.178 3.139-3.221 1.763-.046 3.528-.012 5.292-.011.031 0 .071-.015.092.036-.011.093-.104.103-.165.139-1.038.609-1.986 1.338-2.782 2.237C4.26 5.056 3.352 6.767 3.044 8.749c-.546 3.509.548 6.481 3.03 8.966.442.443.499.792.144 1.39-.425.717-1.069 1.206-1.753 1.651-.073.047-.149.091-.216.146-.112.092-.042.142.051.182 1.338.263 2.641.082 3.927-.312.434-.133.869-.262 1.308-.375.299-.077.595-.065.9.039 3.323 1.145 6.605 1.042 9.828-.377a11.557 11.557 0 0 0 3.53-2.421c.051-.052.089-.129.181-.136zM8.095 12.252c.793 0 1.533-.005 2.273.002.416.004.64.18.678.508.048.414-.193.689-.642.695-.847.009-1.694.004-2.541.004-.244 0-.489.008-.733-.006-.304-.017-.601-.077-.746-.391-.146-.314-.044-.596.157-.852.809-1.03 1.62-2.058 2.429-3.087l.142-.185c-.05-.089-.128-.049-.189-.05-.567-.004-1.135 0-1.703-.004a1.577 1.577 0 0 1-.388-.044c-.264-.069-.423-.28-.425-.531s.153-.465.416-.54c.124-.035.258-.047.388-.047.934-.004 1.869-.004 2.803 0 .165 0 .331.004.491.06.354.122.51.449.366.795-.125.301-.325.557-.525.811-.685.872-1.373 1.741-2.059 2.612l-.191.251zm6.079-2.758c.128-.161.254-.312.47-.356.412-.084.802.184.808.602.014 1.047.009 2.095.003 3.142a.618.618 0 0 1-.436.593.641.641 0 0 1-.732-.203c-.089-.111-.126-.131-.25-.031-.477.387-1.015.455-1.597.266-.933-.303-1.317-1.03-1.419-1.921-.109-.957.209-1.778 1.066-2.281.711-.418 1.433-.383 2.087.188zm-1.853 1.916c.005.18.065.423.221.633a.86.86 0 0 0 1.374-.001c.294-.396.293-1.053-.002-1.449a.796.796 0 0 0-.622-.334c-.574-.034-.977.41-.971 1.151zm7.583-2.36c1.334-.041 2.313.856 2.353 2.164.04 1.324-.772 2.264-2.025 2.389-1.36.137-2.445-.855-2.426-2.163-.04-1.346.843-2.351 2.099-2.389zm.801 3.008c.305-.396.306-1.069.005-1.469a.8.8 0 0 0-.623-.331c-.566-.03-.961.403-.963 1.054a1.19 1.19 0 0 0 .223.736.861.861 0 0 0 1.358.01zm-3.359-1.661c0 .812.004 1.623-.002 2.435a.676.676 0 0 1-.853.667c-.265-.067-.463-.348-.463-.674-.002-1.388-.001-2.776-.001-4.164 0-.244-.003-.489.001-.733.007-.402.264-.664.649-.668.398-.004.665.259.668.676.005.821.001 1.641.001 2.462z"}></path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className={cx("jsx-1045551551", "col-md-2", "col-4", "contact")}>
                            <h4 className={cx("jsx-1045551551", "title")}>Liên hệ</h4>
                            <div className={cx("jsx-1045551551", "body")}>
                                <ul className={cx("jsx-1045551551", "list-unstyled")}>
                                    <li className={"jsx-1045551551"}>
                                        <a href={"tel:19006710"} className={cx("jsx-1045551551", "phone")}>19006710</a>
                                    </li>
                                    <li className={"jsx-1045551551"}>
                                        <a href={"mailto:help@leflair.vn"} className={cx("jsx-1045551551", "email")}>help@leflair.vn</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={cx("jsx-1045551551", "col-md-2", "col-4", "company")}>
                            <h4 className={cx("jsx-1045551551", "title")}>Doanh nghiệp</h4>
                            <div className={cx("jsx-1045551551", "body")}>
                                <ul className={cx("jsx-1045551551", "list-unstyled")}>
                                    <li className={"jsx-1045551551"}>
                                        <a href={"https://pages.leflair.vn/about-us"} className={"jsx-1045551551"}>Về Leflair</a>
                                    </li>
                                    <li className={"jsx-1045551551"}>
                                        <a href={"http://styleguide.leflair.vn/"} className={"jsx-1045551551"}>Style Guide</a>
                                    </li>
                                    <li className={"jsx-1045551551"}>
                                        <a href={"https://pages.leflair.vn/partners"} className={"jsx-1045551551"}>Hợp tác</a>
                                    </li>
                                    <li className={"jsx-1045551551"}>
                                        <a href={"https://pages.leflair.vn/genuine-guarantee"} className={"jsx-1045551551"}>Chính hãng</a>
                                    </li>
                                    <li className={"jsx-1045551551"}>
                                        <a href={"https://careers.leflair.vn/"} className={"jsx-1045551551"}>Tuyển dụng</a>
                                    </li>
                                    <li className={"jsx-1045551551"}>
                                        <a className={"jsx-1045551551"} href={"/vn/brands"}>Thương hiệu</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={cx("jsx-1045551551", "col-md-2", "col-4", "customer-service")}>
                            <h4 className={cx("jsx-1045551551", "title")}>Chăm sóc khách hàng</h4>
                            <div className={cx("jsx-1045551551", "body")}>
                                <ul className={cx("jsx-1045551551", "list-unstyled")}>
                                    <li className={"jsx-1045551551"}>
                                        <a href={"https://support.leflair.vn/hc/vi"} className={"jsx-1045551551"}>Hỏi đáp</a>
                                    </li>
                                    <li className={"jsx-1045551551"}>
                                        <a href={"https://support.leflair.vn/hc/vi/articles/214167448-Ch%C3%ADnh-s%C3%A1ch-tr%E1%BA%A3-h%C3%A0ng-v%C3%A0-ho%C3%A0n-ti%E1%BB%81n"} className={"jsx-1045551551"}>Đổi trả</a>
                                    </li>
                                    <li className={"jsx-1045551551"}>
                                        <a href={"https://support.leflair.vn/hc/vi/articles/214857097-%C4%90i%E1%BB%81u-kho%E1%BA%A3n-v%C3%A0-quy-%C4%91%E1%BB%8Bnh-chung"} className={"jsx-1045551551"}>Điều khoản &amp; quy định</a>
                                    </li>
                                    <li className={"jsx-1045551551"}>
                                        <a href={"https://support.leflair.vn/hc/vi/articles/214167378-Ch%C3%ADnh-s%C3%A1ch-giao-v%C3%A0-nh%E1%BA%ADn-h%C3%A0ng"} className={"jsx-1045551551"}>Giao hàng</a>
                                    </li>
                                    <li className={"jsx-1045551551"}>
                                        <a href={"https://support.leflair.vn/hc/vi/articles/214113678-T%C3%B4i-c%C3%B3-nh%E1%BA%ADn-%C4%91%C6%B0%E1%BB%A3c-h%C3%B3a-%C4%91%C6%A1n-GTGT-trong-b%C6%B0u-ki%E1%BB%87n-kh%C3%B4ng-"} className={"jsx-1045551551"}>Thuế</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx("jsx-1045551551", "lower")}>
                    <div className={cx("jsx-1045551551", "row")}>
                        <div className={cx("jsx-1045551551", "col-md-8")}>
                            <div className={cx("jsx-1045551551", "row")}>
                                <div className={cx("jsx-1045551551", "col-md-6", "copyright")}>
                                    <span className={cx("jsx-1045551551", "text")}>Copyright @ 2018 leflair.vn</span>
                                </div>
                                <div className={cx("jsx-1045551551", "col-md-6", "address")}>Công ty Cổ phần Leflair  - Tầng 16, Tháp A2, Tòa nhà Viettel, 285 Cách Mạng Tháng Tám, P.12, Q.10, TP.HCM</div>
                            </div>
                        </div>
                        <div className={cx("jsx-1045551551", "col-md-4")}>Cơ quan cấp: Sở Kế hoạch và Đầu tư Thành phố Hồ Chí Minh</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;