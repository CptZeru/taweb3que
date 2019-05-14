import React, {Component} from 'react';
import MyCarousel from './MyCarousel';
import MyCard from './MyCard';
import {Row, Col} from 'antd';
class Home extends Component {
    render() {
        return (
            <div>
                <MyCarousel 
                slide1="http://genchi.info/img/metal-gear-wallpaper-2.jpg"
                slide2="https://images.alphacoders.com/564/thumb-1920-564986.jpg"
                slide3="http://genchi.info/img/metal-gear-wallpaper-3.jpg"
                slide4="https://leviathyn.com/wp-content/uploads/2013/02/MGR_HD_Wallpaper_1080_2.jpg"
                />
                <div style={{ background: '#fff', padding: '30px', paddingLeft: '50px' }}>
                    <Row>
                        <Col span={8}>
                            <MyCard title="Metal Gear Solid 3 : Snake Eater" content="Playable in PS2" 
                            image="https://images-na.ssl-images-amazon.com/images/I/51C8A2YVZVL.jpg"/>
                        </Col>
                        <Col span={8}>
                            <MyCard title="Metal Gear Solid : Peace Walker" content="Playable in PSP"
                            image="https://vignette.wikia.nocookie.net/metalgear/images/2/2c/204261285328266.jpg/revision/latest?cb=20130510014632"/>
                        </Col>
                        <Col span={8}>
                            <MyCard title="Metal Gear Solid V : Ground Zeroes" content="Playable in PC" 
                            image="https://images.g2a.com/newlayout/323x433/1x1x0/4ab156d8330e/5912392cae653a57c51855c7"/>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Home;
