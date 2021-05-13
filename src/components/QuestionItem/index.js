import { Component } from 'react';
import './index.less';
import {
  Link
} from "react-router-dom";
class QuestionItem extends Component {
  render() {
    return (
      <div className="question_item">
        <h2>
          <Link to={this.props.item.link}>{this.props.item.name}</Link>
        </h2>
      </div>
    );
  }
}

export default QuestionItem;