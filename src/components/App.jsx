import { Component } from 'react';
import FeedbackOptions from './FeedBack/FeedBack';
import Statistic from './Statistics/Statistics';
import css from './FeedBack/FeedBack.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  };
  onLeaveFeedBack = type => {
    this.setState(prev => ({ [type]: prev[type] + 1, total: prev.total + 1 }));
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.state.total) * 100) || 0;
  };
  render() {
    return (
      <div className={css.conteiner}>
        <FeedbackOptions onLeaveFeedBack={type => this.onLeaveFeedBack(type)} />
        <Statistic
          statistic={{
            ...this.state,
            positiveFeedBack: this.countPositiveFeedbackPercentage(),
          }}
        />
      </div>
    );
  }
}
