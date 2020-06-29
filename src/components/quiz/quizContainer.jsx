import React from 'react';
import { connect } from 'react-redux';
import { addNewQuestion, addNewOption, setQuestionText, setOptionText, setQuizTitle, setOptionAsAnswer, setQuiz, setQuizes, passQuestion, setPassQuiz } from '../../store/quiz/actions';
import { URL_QUIZ_VIEW, URL_QUIZ_CREATE, URL_QUIZ_EDIT, URL_QUIZ_VIEW_ALL, URL_QUIZ_PASS } from '../../API';
import QuizCreate from './create/quizCreate';
import Quizes from './quizes';
import QuizEdit from './edit/quizEdit';
import QuizView from './view/quizView';
import QuizPass from './pass/quizPass';


class QuizContainer extends React.Component {
    render() {
        switch (this.props.match.path) {
            case URL_QUIZ_VIEW_ALL:
                return (
                    <Quizes
                        loadOptions={this.props.loadOptions}
                        quizes={this.props.quizes}
                        setQuizes={this.props.setQuizes}
                    />
                )
            case URL_QUIZ_VIEW:
                return (
                    <QuizView
                        loadOptions={this.props.loadOptions}
                        quiz={this.props.editQuiz}
                        setQuiz={this.props.setQuiz}
                        quizId={this.props.match.params.id}
                    />
                )
            case URL_QUIZ_CREATE:
                return (
                    <QuizCreate
                        loadOptions={this.props.loadOptions}
                        quiz={this.props.newQuiz}
                        addNewQuestion={this.props.addNewQuestion}
                        addNewOption={this.props.addNewOption}
                        setQuestionText={this.props.setQuestionText}
                        setOptionText={this.props.setOptionText}
                        setQuizTitle={this.props.setQuizTitle}
                        setOptionAsAnswer={this.props.setOptionAsAnswer}
                    />
                )
            case URL_QUIZ_EDIT:
                return (
                    <QuizEdit
                        loadOptions={this.props.loadOptions}
                        quiz={this.props.editQuiz}
                        addNewQuestion={this.props.addNewQuestion}
                        addNewOption={this.props.addNewOption}
                        setQuestionText={this.props.setQuestionText}
                        setOptionText={this.props.setOptionText}
                        setQuizTitle={this.props.setQuizTitle}
                        setOptionAsAnswer={this.props.setOptionAsAnswer}
                        getQuizById={this.props.getQuizById}
                        setQuiz={this.props.setQuiz}
                        quizId={this.props.match.params.id}
                    />
                )
            case URL_QUIZ_PASS:
                return (
                    <QuizPass
                        loadOptions={this.props.loadOptions}
                        quizId={this.props.match.params.id}
                        currQuiz={this.props.currQuiz}
                        passQuestion={this.props.passQuestion}
                        setPassQuiz={this.props.setPassQuiz}
                    />
                )
            default: console.log(this.props.match.path)
                return (
                    ""
                )
        }
    }
}

const mapStateToProps = state => {
    return {
        loadOptions: state.shared.loadOptions,
        newQuiz: state.quizReducer.newQuiz,
        editQuiz: state.quizReducer.editQuiz,
        currQuiz: state.quizReducer.currQuiz,
        quizes: state.quizReducer.quizes,
    }
}

const mapDispatchToProps = {
    addNewQuestion,
    addNewOption,
    setQuestionText,
    setOptionText,
    setQuizTitle,
    setOptionAsAnswer,
    setQuiz,
    setQuizes,
    passQuestion,
    setPassQuiz
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizContainer)
