import React from 'react';
import Item from '../SalePage/Item'

class SearchPage extends React.Component {

    createSearchList = () => {
        if (this.props.items === false) {
            return (
                <center><h4>Không có sản phẩm nào</h4></center>
            )
        } else if (this.props.items.length !== 0) {
            return (
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col-md-3"}>
                            
                        </div>
                        <div className={"col-md-9"}>
                            <p>{this.props.items.length} Sản phẩm tìm được</p>
                            <div className={"row"}>
                                <Item items={this.props.items} />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.createSearchList()}
            </React.Fragment>
        )
    }
}

export default SearchPage;