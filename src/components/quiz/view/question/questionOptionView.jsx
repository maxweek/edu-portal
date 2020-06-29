import React from 'react';

export default class QuestionOption extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }

    }
    render() {
        return (
            <div className="option moduleRow jc-space-between" id={this.props.id}>
                <div className="qopTitle flex_10">
                    {this.props.text}
                    <span className="qopId">{this.props.id}</span>
                </div>
                <div className="flex_2 text-center">{this.props.isAnswer === true ? "Верный" : "-"}</div>
            </div>
        )
    }
}
