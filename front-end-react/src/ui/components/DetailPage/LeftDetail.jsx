import React from 'react';
import cx from 'classnames';
import './style.css'

class LeftDetail extends React.Component {

    render() {
        return (
            <React.Fragment>
                <img src={this.props.image} alt={"product"} style={{width: "530px", height: "662px"}}/>
                <div className={cx("logo-branch", "mt-5")}>
                    <img src={require(`${this.props.logo}`)} alt={"logo"}/>
                </div>
                <div className={cx("info", "pt-2")}>
                    <p style={{"fontSize": "1.5em"}}>"{this.slogan}"</p>
                    <p>{this.props.description}</p>
                </div>
            </React.Fragment>
        )
    }
}

export default LeftDetail;