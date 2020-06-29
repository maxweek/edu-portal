import React from 'react';
// import Input from '../_shared/input/input';
import QuestionOptionView from './questionOptionView';
import ModuleSubTitle from '../../../_shared/moduleSubTitle/moduleSubTitle';

export default class Question extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="question" id={this.props.id}>
                <div className="qopTitle">
                    {this.props.text}
                    <span className="qopId">{this.props.id}</span>
                </div>

                <div className="options">
                    <div className="moduleRow jc-space-between">
                        <ModuleSubTitle value="Ответы" classSuffix="flex_10" />
                        <ModuleSubTitle value="Правильный" classSuffix="flex_2" align="center" />
                    </div>
                    {this.props.options.map((el, index) =>
                        <QuestionOptionView
                            key={index}
                            id={el.id}
                            text={el.text}
                            isAnswer={el.isAnswer}
                            questionId={this.props.id}
                        />)}
                </div>
            </div>
        )
    }
}
