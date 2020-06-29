import React from 'react';
import s from '../quiz.module.scss';
import API, { API_GET_QUIZ_PASS, API_POST_QUIZ_PASS } from '../../../API';
import Input from '../../_shared/input/input';
import MainSectionTitle from '../../_shared/mainSectionTitle/mainSectionTitle';
import ModuleTitle from '../../_shared/moduleTitle/moduleTitle';
import Question from '../create/question/question';

export default class QuizPass extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            loadStatus: this.props.loadOptions.loadingClass,
            apiLoadStatus: this.props.loadOptions.apiLoadingClass,
        }
    }
    componentDidMount() {
        setTimeout(() => { this.setState({ loadStatus: this.props.loadOptions.loadedClass }) }, this.props.loadOptions.loadingDelay)
        API.get(API_GET_QUIZ_PASS + this.props.quizId)
            .then((res) => {
                console.log(res)
                this.props.setPassQuiz(res.data)
                setTimeout(() => { this.setState({ apiLoadStatus: this.props.loadOptions.apiLoadedClass }) }, this.props.loadOptions.loadingDelay)
            })
            .catch((res) => {
                console.log(res)
            })
    }
    componentDidUpdate() {
        //console.log('componentDidUpdate' + this.props.quiz.title);
    }
    checkQuiz = () => {
        API.post(API_POST_QUIZ_PASS, this.props.currQuiz)
            .then((res) => {
                console.log(res)
            })
            .catch((res) => {
                console.log(res)
            })
    }
    getQuiz = () => {
        let i = 0;
        if (this.props.currQuiz !== null) {
            return this.props.currQuiz.questions.map((el, index) => {
                i++;
                return (
                    <Question
                        key={index}
                        id={el.id}
                        number={i}
                        edit={false}
                        text={el.text}
                        options={el.options}
                        passQuestion={this.props.passQuestion}
                    />)
            })
        } else {
            return false
        }
    }

    render() {
        let i = 0;
        return (
            <div className={'com_box com_in_page preload ' + this.state.loadStatus + " " + this.state.apiLoadStatus}>
                <section>
                    <div className={s.inner}>
                        <MainSectionTitle value="Пройти квиз" />
                        <div className="rowModules">
                            <div className="colModules">
                                <div className="module">
                                    <ModuleTitle value="Вопросы" />
                                    <div className="body">
                                        <div className="questions">
                                            {this.getQuiz()}
                                        </div>
                                        <div className="btn btn-primary" onClick={this.checkQuiz}>Завершить</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
