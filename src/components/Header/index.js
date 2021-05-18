import  { Component } from 'react'
import './index.less';
import {
  NavLink
} from "react-router-dom";
export default class Header extends Component {
  render() { 
    return ( 
      <header className="layout_header">
        <div className="content">
          <nav className="header_navs">
            <NavLink className="header_nav" exact to="/" activeClassName="selected">前端知识</NavLink>
            <NavLink className="header_nav" to="/blogs" activeClassName="selected">精选博文</NavLink>
            <NavLink className="header_nav" to="/resume" activeClassName="selected">简历模板</NavLink>    
          </nav>
        </div>
      </header>
     );
  }
}
