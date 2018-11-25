import React from 'react';
import cx from 'classnames';
import './style.css';

class RightSizeDetail extends React.Component {
    constructor(props) {
        super(props);
        this.sizeList = this.props.sizeList;
    }

    createChildern = (items) => {
        let childern = []
        items.map(
            (item, index) => {
                childern.push(
                    <tr key={index}>
                        <td>{item['name']}</td>
                        <td>{item['value']}</td>
                    </tr>
                )
            }
        )
        return childern
    }

    createSize = () => {
        let childern = [];
        this.sizeList.map(
            (item, index) => {
                if (item['childern'] !== null) {
                    childern.push(
                        <div className="dropdown" key={index}>
                            <button className={cx("btn", "btn-outline-secondary", "btn-custom")}>{item['name']}</button>
                            <div className={"dropdown-content"}>
                                <p scope={"col"} className={"text-center"} style={{"fontSize": "12px"}}><strong>Tương đương với</strong></p>
                                <table className={cx("table", "table-custom")}>
                                    <tbody>
                                        {this.createChildern(item['childern'])}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )
                } else {
                    childern.push(
                        <div className={"dropdown"} key={index}>
                            <button className={cx("btn", "btn-outline-secondary", "btn-custom")} style={{"position": "relative", "backgroundColor": "#d4e9f1"}}>{item['name']}</button>
                            <div className={"off-line"}></div>
                            <div className={"dropdown-content"}>
                                <p scope={"col"} className={"text-center"} style={{"fontSize": "12px"}}>
                                    <strong>Rất tiếc! Size này đã hết hàng</strong>
                                </p>
                            </div>
                        </div>
                    );
                }
            }
        );
        return childern
    }

    render() {
        return (
            <React.Fragment>
                <p>Kích cỡ</p>
                {this.createSize()}   
            </React.Fragment>
        )
    }
}

export default RightSizeDetail;