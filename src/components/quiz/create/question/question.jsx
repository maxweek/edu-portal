import React from 'react';
// import Input from '../_shared/input/input';
import QuestionOption from './questionOption';
import Input from '../../../_shared/input/input';
import ModuleSubTitle from '../../../_shared/moduleSubTitle/moduleSubTitle';

export default class Question extends React.Component {
    constructor(props) {
        super(props)

        this.addNewOption = this.addNewOption.bind(this)
        this.setQuestionText = this.setQuestionText.bind(this)

        this.state = {

        }
    }
    addNewOption() {
        this.props.addNewOption({
            id: this.prepareId(),
            questionId: this.props.id,
            isNew: this.props.isNew
        });
    }
    prepareId() {
        let arr = this.props.options;
        let lastEl = 1;
        if (arr.length > 0) {
            lastEl = arr[arr.length - 1].id + 1;
        }
        return lastEl;
    }
    setQuestionText(event) {
        this.props.setQuestionText({
            questionId: this.props.id,
            value: event.target.value,
            isNew: this.props.isNew
        })
    }

    render() {
        let i = 0;
        return (
            <div className="question" id={this.props.id}>
                {this.props.edit === true ?
                    <div className="question">
                        <Input
                            type="text"
                            id={"q_text_" + this.props.id}
                            label={"Вопрос " + this.props.number}
                            required={true}
                            value={this.props.text}
                            onChange={this.setQuestionText}
                        />
                        <div className="options">
                            <div className="moduleRow jc-space-between">
                                <ModuleSubTitle value="Ответы" classSuffix="flex_10" />
                                <ModuleSubTitle value="Правильный" classSuffix="flex_2" align="center" />
                            </div>
                            {this.props.options.map((el, index) => {
                                i++;
                                return (
                                    <QuestionOption
                                        key={index}
                                        id={el.id}
                                        text={el.text}
                                        number={i}
                                        edit={true}
                                        isAnswer={el.isAnswer}
                                        questionId={this.props.id}
                                        setOptionText={this.props.setOptionText}
                                        setOptionAsAnswer={this.props.setOptionAsAnswer}
                                        isNew={this.props.isNew}
                                    />)
                            })}
                            <div className="btn btn-secondary btn-add" onClick={this.addNewOption}>Добавить ответ</div>
                        </div>
                    </div>
                    :
                    <div className="questionText">
                        <div className="question">{this.props.text}<span className="questionNumber">{this.props.number}</span></div>
                        <div className="options">
                            {this.props.options.map((el, index) => {
                                i++;
                                return (
                                    <QuestionOption
                                        key={index}
                                        id={el.id}
                                        text={el.text}
                                        number={i}
                                        isAnswer={el.isAnswer}
                                        questionId={this.props.id}
                                        passQuestion={this.props.passQuestion}
                                    />)
                            })}
                        </div>
                    </div>
                }
            </div>
        )
    }
}
