import  { Component } from 'react'
import './index.less';
import {
  Link
} from "react-router-dom";
export default class Header extends Component {
  render() { 
    return ( 
      <header className="layout_header">
        <div className="content">
          <nav className="header_navs">
            <Link className="header_nav" to="/">前端知识</Link>
            <Link className="header_nav" to="/blogs">精选博文</Link>
            <Link className="header_nav" to="/resume">简历模板</Link>    
          </nav>
        </div>
      </header>
     );
  }
}
