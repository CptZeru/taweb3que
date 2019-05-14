import { Carousel } from 'antd';
import React, {Component} from 'react';
import 'antd/dist/antd.css';
import './MyCarousel.css';

class MyCarousel extends Component{
    render(){
        return(
            <div>
                <Carousel autoplay>
                    <div><h3><img className="img-slide" src={this.props.slide1} /></h3></div>
                    <div><h3><img className="img-slide" src={this.props.slide2} /></h3></div>
                    <div><h3><img className="img-slide" src={this.props.slide3} /></h3></div>
                    <div><h3><img className="img-slide" src={this.props.slide4} /></h3></div>
                </Carousel>
            </div>
        )
    }
  
}

export default MyCarousel;