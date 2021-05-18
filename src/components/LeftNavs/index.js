import  { Component} from 'react'
import './index.less';
class LeftNavs extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="dock">
        <nav className="dock-nav">
          <ul className="nav-list">
            <li className="nav-item active">
              热门
            </li>
            <li className="nav-item">热门</li>
            <li className="nav-item">热门</li>
          </ul>
        </nav>
      </div>
     );
  }
}
 
export default LeftNavs;