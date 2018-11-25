import React from 'react';
import cx from 'classnames';
import './style.css'

class LeftDetail extends React.Component {
    constructor(props) {
        super(props);
        this.image = this.props.image;
        this.logo = this.props.logo;
        this.description = this.props.description;
    }

    render() {
        return (
            <React.Fragment>
                <img src={require(`${this.image}`)} alt={"product"} style={{width: "530px", height: "662px"}}/>
                <div className={cx("logo-branch", "mt-5")}>
                    <img src={require(`${this.logo}`)} alt={"logo"}/>
                </div>
                <div className={cx("info", "pt-2")}>
                    <p style={{"fontSize": "1.5em"}}>"{this.slogan}"</p>
                    <p>{this.description}</p>
                </div>
            </React.Fragment>
        )
    }
}

export default LeftDetail;