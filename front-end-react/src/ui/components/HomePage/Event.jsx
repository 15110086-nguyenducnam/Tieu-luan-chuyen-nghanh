import React from 'react';
import cx from 'classnames';

class Event extends React.Component {
    constructor(props){
        super(props);
        this.itemList = this.props.items
    }

    createEventDay = () => {
        let childern = [];
        this.props.events.map(
            (event) => {
                childern.push(
                    <span className={"event"} key={event.toString()}>{event}</span>
                )
            }
        )
        return childern
    }

    createItem = (item) => {
        return (
            <div className={"col-3"}>
               <a href=" ">
                    <img src={require(`${item["images"]}`)} className={"img-fluid"}/>
                </a>
                <h6>{item["name"]}</h6>
                <h6>{item["out_of_date"]}</h6>
            </div>
        )
    }

    createEventItems = () => {
        let childern = [];
        for (let i=0; i< this.itemList.length; i+=4) {
            childern.push(
                <div className={cx("row", "row-item")}>
                    {this.createItem(this.itemList[i])}
                    {this.createItem(this.itemList[i+1])}
                    {this.createItem(this.itemList[i+2])}
                    {this.createItem(this.itemList[i+3])}
                </div>
            )
        }
        return childern
    }

    render() {
        return (
            <div className={cx("container", "category")}>
                <div className={"header-label"}>
                <center><h4>Sắp Diễn Ra</h4></center>
                </div>
                <center>
                    {this.createEventDay()}
                </center>
                {this.createEventItems()}
            </div>
        )
    }
}

export default Event