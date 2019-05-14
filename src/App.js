import React, {Component} from 'react';
import Main from './components/page/Main';
import AnotherAppBar from "./components/AnotherAppBar";
import {Menu} from 'antd';
import 'antd/dist/antd.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class App extends Component {

    render() {
        return (
            <div>
                <AnotherAppBar />
                <Main />
            </div>
        );
    }
}

export default App;
