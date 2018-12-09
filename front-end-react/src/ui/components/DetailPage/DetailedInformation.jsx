import React from 'react';
import Collapse from 'react-bootstrap/lib/Collapse'
import cx from 'classnames';
import './style.css'

class DetailedInformation extends React.Component {
    constructor(props) {
        super(props);
        this.collapse = props.collapse;
        this.name = props.name;
        this.info = props.info;

        this.state = {
            open: false
        };
    }

    createInfoList = () => {
        let children = []
        this.info.map(
            (item, index) => {
                children.push(
                    <li className={"sub-menu"} key={index}>
                        &gt;&nbsp;{item}
                    </li>
                )
            }
        )
        return children;
    }

    render() {
        return (
            <li>
                <a onClick={() => this.setState({ open: !this.state.open })} id={"mydown"} className={cx("mydown", "nav-link")} >
                    {this.name}
                    <label className={"down"} id={"downchange"}>
                        <i></i>
                    </label>
                </a>
                <Collapse in={this.state.open} timeout={null}>
                    <ul className={cx("nav", "flex-column")}>
                        {this.createInfoList()}
                    </ul>
                </Collapse>
                <hr/>
            </li>
        )
    }
}

export default DetailedInformation;