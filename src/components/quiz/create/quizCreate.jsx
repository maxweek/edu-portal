import React from 'react';
import s from '../quiz.module.scss';
import API, { API_POST_QUIZ_COLLECT } from '../../../API';
import Input from '../../_shared/input/input';
import MainSectionTitle from '../../_shared/mainSectionTitle/mainSectionTitle';
import ModuleTitle from '../../_shared/moduleTitle/moduleTitle';
import Question from './question/question';

export default class QuizCreate extends React.Component {
    constructor(props) {
        super(props)

        this.addNewQuestion = this.addNewQuestion.bind(this)
        this.setQuizTitle = this.setQuizTitle.bind(this)
        this.collectQuiz = this.collectQuiz.bind(this)
        this.getCollectedState = this.getCollectedState.bind(this)



        this.state = {
            loadStatus: this.props.loadOptions.loadingClass,
        }

    }
    componentWillMount() {
    }
    componentDidMount() {
        setTimeout(() => { this.setState({ loadStatus: this.props.loadOptions.loadedClass }) }, this.props.loadOptions.loadingDelay)
    }
    addNewQuestion() {
        this.props.addNewQuestion({
            id: this.prepareId(),
            isNew: true
        });
    }
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps ')
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
            value: event.target.value,
            isNew: true
        })
    }
    collectQuiz() {
        console.log(this.getCollectedState());
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
        console.log(this.props)
        return {
            ...this.props.quiz,
            id: null,
            questions: this.props.quiz.questions.map((el) => {
                el.id = null;
                el.options.map((elem) => {
                    elem.id = null;
                    return elem;
                })
                return el;
            })

        }
    }

    render() {
        let i = 0;
        return (
            <div className={'com_in_page com_box preload ' + this.state.loadStatus}>
                <section>
                    <div className={s.inner}>
                        <MainSectionTitle value="Создание квиза" />
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
                                                        text={el.text}
                                                        number={i}
                                                        edit={true}
                                                        options={el.options}
                                                        addNewOption={this.props.addNewOption}
                                                        setQuestionText={this.props.setQuestionText}
                                                        setOptionText={this.props.setOptionText}
                                                        setOptionAsAnswer={this.props.setOptionAsAnswer}
                                                        isNew={true}
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
