import React from 'react';
import s from '../quiz.module.scss';
import API, { API_POST_QUIZ_COLLECT, API_GET_QUIZ_EDIT } from '../../../API';
import Input from '../../_shared/input/input';
import MainSectionTitle from '../../_shared/mainSectionTitle/mainSectionTitle';
import ModuleTitle from '../../_shared/moduleTitle/moduleTitle';
import Question from '../create/question/question';

export default class QuizEdit extends React.Component {
    constructor(props) {
        super(props)

        this.addNewQuestion = this.addNewQuestion.bind(this)
        this.setQuizTitle = this.setQuizTitle.bind(this)
        this.collectQuiz = this.collectQuiz.bind(this)
        this.getCollectedState = this.getCollectedState.bind(this);

        this.state = {
            loadStatus: this.props.loadOptions.loadingClass,
            apiLoadStatus: this.props.loadOptions.apiLoadingClass,
        }
    }
    componentDidMount() {
        setTimeout(() => { this.setState({ loadStatus: this.props.loadOptions.loadedClass }) }, this.props.loadOptions.loadingDelay)
        API.get(API_GET_QUIZ_EDIT + this.props.quizId)
            .then((res) => {
                console.log('GOOD GET')
                console.log(res)
                this.props.setQuiz({
                    quiz: res.data,
                    isNew: false
                })
                setTimeout(() => { this.setState({ apiLoadStatus: this.props.loadOptions.apiLoadedClass }) }, this.props.loadOptions.loadingDelay)
            })
            .catch((res) => {
                console.log('GET ERROR')
                console.log(res)
            })
    }
    addNewQuestion() {
        this.props.addNewQuestion({
            id: this.prepareId(),
            isNew: false
        });
    }
    componentDidUpdate() {
        //console.log('componentDidUpdate' + this.props.quiz.title);

    }
    prepareId() {
        let arr = this.props.quiz.questions;
        let lastEl = 1;
        if (arr.length > 0) {
            lastEl = arr[arr.length - 1].id + 1;
        }
        return lastEl;
    }
    setQuizTitle(event) {
        this.props.setQuizTitle({
            value: event.target.value
        })
    }
    collectQuiz() {
        console.log(this.getCollectedState())
        API.post(API_POST_QUIZ_COLLECT, this.getCollectedState())
            .then(res => {
                console.log("Good POST")
                console.log(res);
            })
            .catch(res => {
                console.log("Catched ERROR")
                console.log(res)
            })
    }
    getCollectedState() {
        return {
            ...this.props.quiz,
            questions: this.props.quiz.questions.map((el) => {
                if (el.add === true) {
                    el.id = null;
                }
                el.options.map((elem) => {
                    if (elem.add === true) {
                        elem.id = null;
                    }
                    return elem;
                })
                return el;
            })
        }
    }

    render() {
        let i = 0;
        return (
            <div className={'com_box com_in_page preload ' + this.state.loadStatus + " " + this.state.apiLoadStatus}>
                <section>
                    <div className={s.inner}>
                        <MainSectionTitle value="Редактирование квиза" />
                        <div className="rowModules">
                            <div className="colModules">
                                <div className="module">
                                    <ModuleTitle value="Квиз" />
                                    <div className="body">
                                        <Input
                                            type="text"
                                            id="quiz_name"
                                            label="Название квиза"
                                            required={true}
                                            value={this.props.quiz.title}
                                            onChange={this.setQuizTitle}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rowModules">
                            <div className="colModules">
                                <div className="module">
                                    <ModuleTitle value="Вопросы" />
                                    <div className="body">
                                        <div className="questions">
                                            {this.props.quiz.questions.map((el, index) => {
                                                i++;
                                                return (
                                                    <Question
                                                        key={index}
                                                        id={el.id}
                                                        number={i}
                                                        edit={true}
                                                        text={el.text}
                                                        options={el.options}
                                                        addNewOption={this.props.addNewOption}
                                                        setQuestionText={this.props.setQuestionText}
                                                        setOptionText={this.props.setOptionText}
                                                        setOptionAsAnswer={this.props.setOptionAsAnswer}
                                                        isNew={false}
                                                    />)
                                            })}

                                            <div className="btn btn-secondary btn-add" onClick={this.addNewQuestion}>Добавить вопрос</div>
                                        </div>
                                    </div>
                                    <div className="btn btn-primary" onClick={this.collectQuiz}>Отправить</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
