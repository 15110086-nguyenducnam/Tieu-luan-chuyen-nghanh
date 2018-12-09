import React from 'react';
import cx from 'classnames';
import Classify from './Classify';
import Item from './Item';
import backendAPI from '../../../backend'

class SalePage extends React.Component {
    constructor(props){
        super(props);
        this.classifies = this.props.classifies;
        this.category_id = this.props.category_id;
        this.state = {
            name: '',
            items: []
        }

    }

    componentDidMount() {
        fetch(backendAPI+'/loaisps/'+this.category_id).then(
            response => {
                return response.json();
            }
        ).then(
            data => {
                this.setState({
                    name: data.loaisp.ten,
                    items: data.loaisp.sanphams
                });
            }
        )
    }

    render() {
        return (
            <div className={"container"}>
                <p>{this.state.name}</p>
                <div className={"row"}>
                    <div className={"col-md-3"}>
                        <Classify classifies={this.classifies} />
                    </div>
                    <div className={"col-md-9"}>
                        <div className={"row"}>
                            <div className={"col-md-9"}>
                                <p>{this.state.items.length} Sản phẩm</p>
                            </div>
                            <div className={"col-md-3"}>
                                <select className={cx("custom-select", "custom-select-md")}>
                                    <option value>Sắp xếp</option>
                                    <option value={"1"}>Giảm giá nhiều nhất</option>
                                    <option value={"2"}>Giá, thấp đến cao</option>
                                    <option value={"3"}>Giá, cao đến thấp</option>
                                </select>
                            </div>
                        </div>
                        <div className={"row"}>
                            <Item items={this.state.items} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SalePage