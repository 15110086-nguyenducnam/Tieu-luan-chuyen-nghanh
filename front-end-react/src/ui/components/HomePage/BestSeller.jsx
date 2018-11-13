import React from 'react';
import cx from 'classnames';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class BestSeller extends React.Component {
    constructor(props){
        super(props);
        this.itemList = this.props.items;
    }

    createItemList = () => {
        let children = [];

       this.itemList.map(
           (item, index) => {
               children.push(
                <div key={index}>
                    <a href={''}>
                        <img src={require(`${item['images']}`)}/>
                    </a>
                </div>
               )
           }
       );
       return children
    }

    render() {
        return (
            <div className={cx("container", "category")}>
                  <div className={"header-label"}>
                    <center><h4>Bán chạy nhất trong ngày</h4></center>
                  </div>
                  <div className={"show-list-banchay"}>
                    <OwlCarousel className="owl-theme" loop={true} margin={3} videoHeight={30}>
                        {this.createItemList()}
                    </OwlCarousel>
                  </div>
            </div>
        )
    }
}

export default BestSeller;