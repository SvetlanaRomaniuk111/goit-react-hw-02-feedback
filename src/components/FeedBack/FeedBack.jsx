import { Component } from 'react';
import css from './FeedBack.module.css';

export default class FeedbackOptions extends Component {
  render() {
    return (
      <>
        <h2>Please Leave Feedback</h2>
        <div className={css.feedBack}>
          <button onClick={() => this.props.onLeaveFeedBack('good')}>
            good
          </button>
          <button onClick={() => this.props.onLeaveFeedBack('neutral')}>
            neutral
          </button>
          <button onClick={() => this.props.onLeaveFeedBack('bad')}>bad</button>
        </div>
      </>
    );
  }
}
