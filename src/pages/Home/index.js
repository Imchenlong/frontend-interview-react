import  { Component, Fragment } from 'react';
import QuestionItem from '../../components/QuestionItem'
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
        }
      ],
    }
  }
  render() {
    const questionItems = this.state.questions.map(
      (item) => <QuestionItem item={item} key={item.id}></QuestionItem>
    )
    return (
      <Fragment>
        {questionItems}
      </Fragment>
    );
  }
}

export default Home;