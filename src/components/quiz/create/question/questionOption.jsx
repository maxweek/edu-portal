import React from 'react';
import Input from '../../../_shared/input/input';
// import Input from '../_shared/input/input';

export default class QuestionOption extends React.Component {
    constructor(props) {
        super(props)

        this.setOptionText = this.setOptionText.bind(this)
        this.setOptionAsAnswer = this.setOptionAsAnswer.bind(this)
        this.passQuestion = this.passQuestion.bind(this)

        this.state = {

        }

    }
    setOptionText(event) {
        this.props.setOptionText({
            id: this.props.id,
            questionId: this.props.questionId,
            value: event.target.value,
            isNew: this.props.isNew
        })
    }
    setOptionAsAnswer(event) {
        this.props.setOptionAsAnswer({
            id: this.props.id,
            questionId: this.props.questionId,
            value: event.target.checked,
            isNew: this.props.isNew
        })
    }
    passQuestion = () => {
        console.log({
            questionId: this.props.questionId,
            optionId: this.props.id,
        })
        this.props.passQuestion({
            questionId: this.props.questionId,
            optionId: this.props.id,
        })
    }
    render() {
        if (this.props.edit === true) {
            return (
                <div className="option moduleRow jc-space-between" id={this.props.id}>
                    <Input
                        type="text"
                        id={"o_text_" + this.props.questionId + "_" + this.props.id}
                        label={"Вариант ответа " + this.props.id}
                        required={true}
                        value={this.props.text}
                        onChange={this.setOptionText}
                        classSuffix="flex_10"
                    />
                    <Input
                        type="checkbox"
                        id={"o_cbx_" + this.props.questionId + "_" + this.props.id}
                        required={false}
                        value={this.props.isAnswer}
                        onChange={this.setOptionAsAnswer}
                        classSuffix="flex_2 jc-center ai-center"
                    />
                </div>
            )
        } else {
            return (
                <div className="option moduleRow jc-space-between" id={this.props.id}>
                    <div class="optionText flex_10">
                        {this.props.text}<span className="optionNumber">{this.props.number}</span>
                    </div>
                    <Input
                        type="checkbox"
                        id={"o_cbx_" + this.props.questionId + "_" + this.props.id}
                        required={false}
                        value={this.props.isAnswer}
                        onChange={this.passQuestion}
                        classSuffix="flex_2 jc-center ai-center"
                    />
                </div>
            )
        }
    }
}
