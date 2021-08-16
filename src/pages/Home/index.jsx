import  { Component } from 'react'
import './index.less'
import QuestionItem from '../../components/QuestionItem'
import LeftNavs from '../../components/LeftNavs'
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: [
        {
          id:'1',
          name:'有没有使用过 react hooks，它带来了那些便利',
          link:'/'
        },
        {
          id:'2',
          name:'如何使用 react hooks 实现一个计数器的组件',
          link:'/'
        },
        {
          id:'3',
          name:'有没有使用过 react hooks，它带来了那些便利',
          link:'/'
        },
        {
          id:'4',
          name:'如何使用 react hooks 实现一个计数器的组件',
          link:'/'
        },
        {
          id:'5',
          name:'有没有使用过 react hooks，它带来了那些便利',
          link:'/'
        },
        {
          id:'6',
          name:'如何使用 react hooks 实现一个计数器的组件',
          link:'/'
        },
        {
          id:'7',
          name:'有没有使用过 react hooks，它带来了那些便利',
          link:'/'
        },
        {
          id:'8',
          name:'如何使用 react hooks 实现一个计数器的组件',
          link:'/'
        }
      ],
    }
  }
  
  render() {
    const questionItems = this.state.questions.map(
      (item) => <QuestionItem item={item} key={item.id}></QuestionItem>
    )
    return (
      <div className="main">
        <LeftNavs></LeftNavs>
        <div className="content_stream">
        {questionItems}
        </div>
      </div>
    );
  }
}

export default Home;