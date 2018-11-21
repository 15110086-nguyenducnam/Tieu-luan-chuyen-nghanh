import React from 'react';
import cx from 'classnames';
import Classify from './Classify'
import Item from './Item'

class SalePage extends React.Component {
    constructor(props){
        super(props);
        this.name = this.props.name
        this.classifies = this.props.classifies
        this.total = this.props.total
        this.items = this.props.items
    }

    render() {
        return (
            <div className={"container"}>
                <p>Sales / {this.name}</p>
                <div className={"row"}>
                    <div className={"col-md-3"}>
                        <Classify classifies={this.classifies} />
                    </div>
                    <div className={"col-md-9"}>
                        <div className={"row"}>
                            <div className={"col-md-9"}>
                                <p>{this.total} Sản phẩm</p>
                            </div>
                            <div className={"col-md-3"}>
                                <select className={cx("custom-select", "custom-select-md")}>
                                    <option selected>Sắp xếp</option>
                                    <option value={"1"}>Giảm giá nhiều nhất</option>
                                    <option value={"2"}>Giá, thấp đến cao</option>
                                    <option value={"3"}>Giá, cao đến thấp</option>
                                </select>
                            </div>
                        </div>
                        <div className={"row"}>
                            <Item items={this.items} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SalePage