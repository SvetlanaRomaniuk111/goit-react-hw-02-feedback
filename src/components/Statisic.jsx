import { Component } from "react";
import Notification from "./Notification";

export default class Statistic extends Component {
    render() {
        const { good, neutral, bad, total, positiveFeedBack } = this.props.statistic
        return (
            <>
                {
                    total ? (
                        <>
                            <h2>Satatistics</h2>
                            <ul>
                                <li>Good: {good}</li>
                                <li>Netral: {neutral}</li>
                                <li>Bad: {bad}</li>
                                <li>Total: {total}</li>
                                <li>Positive feedback: {positiveFeedBack} %</li>
                            </ul>
                        </>

                    ) : <Notification message="There is no feedback"/>
                }
            </>
        )
    }
}