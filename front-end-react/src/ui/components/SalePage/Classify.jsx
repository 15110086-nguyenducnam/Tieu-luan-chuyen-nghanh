import React from 'react';
import cx from 'classnames';

class Classify extends React.Component {
    constructor(props){
        super(props);
        this.classifyList = this.props.classifies;
    }

    createItem = (items) => {
        let children = [];
        items.map(
            (item, index) => {
                children.push(
                    <button className="form-control btn btn-outline-secondary mt-2" key={index}>{item}</button>
                )
            }
        )
        return children
    }

    createClassify = () => {
        let children = []
        this.classifyList.map(
            (item, index) => {
                children.push(
                    <div key={index}>
                        <div className={"mt-2"}>
                            <p style={{display: "inline"}}>{item['label']}</p>
                            <span style={{float: "right", color: "grey"}}><i className={cx("fas", "fa-minus")}></i></span>
                        </div>
                        <hr/>
                        {this.createItem(item['children'])}
                    </div>
                )
            }
        )
        return children
    }

    render() {
        return (
            <React.Fragment>
                {this.createClassify()}
            </React.Fragment>
        )
    }
}

export default Classify