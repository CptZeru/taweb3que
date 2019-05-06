import { Drawer, Menu, Icon } from 'antd';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import 'antd/dist/antd.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class AnotherAppBar extends Component {
  constructor(){
    super();
    this.state = {
        menu : [
            {url: '/home',name:'Home'},
            {url: '/profile',name:'Profile'},
            {url: '/portofolio',name:'Portofolio'},
            {url: '/contact',name:'Contact'},
        ]
    }
}
  state = {
    current: 'mail',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <nav className="menuBar">
                {/* <div className="logo">
                    <a href="">logo</a>
                </div> */}
                <div className="menuCon">
                    <div className="leftMenu">
                    <Menu mode="horizontal">
                {this.state.menu.map((data) => {
                    return(
                        <Menu.Item key={data.name}>
                            <Link to={data.url}>{data.name}</Link>
                        </Menu.Item>
                          )
                  })}

                        </Menu>
                    </div>
                </div>
      </nav>
      
    );
  }
}

AnotherAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default AnotherAppBar;

// ReactDOM.render(<App />, mountNode);