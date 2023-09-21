import { Component } from "react";

export default class FeedBack extends Component {
    render(){
        return (
            <>
            <h2>Please Leave Feedback</h2>
                <button onClick={()=> this.props.leaveFeedBack('good')}>good</button>
                <button onClick={()=> this.props.leaveFeedBack('neutral')}>neutral</button>
                <button onClick={()=> this.props.leaveFeedBack('bad')}>bad</button>
            </>
        )
    }
}