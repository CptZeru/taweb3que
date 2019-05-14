import { Menu, Icon } from 'antd';
import {Helmet} from 'react-helmet';
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
            {url: '/profile',name:'Profile', icon: 'user'},
            {url: '/contact',name:'Contact', icon: 'contacts'},
            {url: '/portofolio',name:'Portofolio', icon: 'file-text'},
            {url: '/home',name:'Home', icon: 'home'}
        ]
    }
}
  state = {
    current: 'Home',
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
                    <div className="rightMenu">
                      <Menu
                      onClick={this.handleClick}
                      selectedKeys={[this.state.current]}
                      mode="horizontal"
                      >
                      {this.state.menu.map((data) => {
                          return(
                              <Menu.Item key={data.name} style={{float: 'right'}}>
                                  <Link to={data.url}><Icon type={data.icon}/>{data.name}</Link>
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