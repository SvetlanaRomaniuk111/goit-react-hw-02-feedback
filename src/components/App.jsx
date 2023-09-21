import { Component } from "react"
import FeedBack from "./FeedBack"
import Statistic from "./Statisic"

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  }
  leaveFeedBack = (type) =>{
    this.setState(
      (prev)=>({[type]: prev[type] + 1, total: prev.total + 1})
    )
  }
  countPositiveFeedbackPercentage =()=>{
    return Math.round((this.state.good / this.state.total) * 100) || 0
  }
  render(){
    return(
      <>
        <FeedBack  leaveFeedBack={(type)=>this.leaveFeedBack(type)}/>
        <Statistic 
          statistic={
            {
              ...this.state, 
              positiveFeedBack: this.countPositiveFeedbackPercentage()
            }
          }
        />
      </>
    )
  }
}
