import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Main from './components/page/Main';
import MyAppBar from "./components/MyAppBar";
import AnotherAppBar from "./components/AnotherAppBar";
import { Row, Col, Menu, Icon } from 'antd';
import 'antd/dist/antd.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class App extends Component {

    render() {
        return (
            <div>
                <AnotherAppBar />
                <Row guter={8}>
                    <Col offset={4} span={16}>
                        <br/>
                        <Main/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default App;
