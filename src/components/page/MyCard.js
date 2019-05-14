import React, { Component } from "react";
import {Card, Row, Col} from "antd";
import 'antd/dist/antd.css';

const { Meta } = Card;

class MyCard extends Component{
    render(){
        return(
            <Card  
            bordered={true}
            style={{ width: 400 }}
            cover={<img alt="example" src={this.props.image} height="540px"/>}
            >
            <Meta 
                title={this.props.title}
                description={this.props.content}
            />
            </Card>
        );
    }
}

export default MyCard;