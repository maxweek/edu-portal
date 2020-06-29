import React from 'react';
import s from '../quiz.module.scss';
import { NavLink } from 'react-router-dom';
import MainSectionTitle from '../../_shared/mainSectionTitle/mainSectionTitle';
import ModuleTitle from '../../_shared/moduleTitle/moduleTitle';
import QuestionView from './question/questionView';
import API, { API_GET_QUIZ_EDIT } from '../../../API';

export default class Quiz extends React.Component {
    constructor(props) {
        super(props)

        console.log(this)

        this.state = {
            loadStatus: this.props.loadOptions.loadingClass,
            apiLoadStatus: this.props.loadOptions.apiLoadingClass
        }

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

    componentDidMount() {
        setTimeout(() => { this.setState({ loadStatus: this.props.loadOptions.loadedClass }) }, this.props.loadOptions.loadingDelay)
    }

    render() {
        return (
            <div className={'com_bxo com_in_page preload ' + this.state.loadStatus + " " + this.state.apiLoadStatus}>
                <section>
                    <div className={s.inner}>
                        <MainSectionTitle value="Квиз" />
                        <div className="rowModules">
                            <div className="colModules">
                                <div className="module">
                                    <ModuleTitle value={this.props.quiz.title} />
                                    <div className="body">
                                        <NavLink to={"/quiz/" + this.props.quiz.id + '/edit'} className="btn btn-secondary">Редактировать</NavLink>
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
                                            {this.props.quiz.questions.map((el, index) =>
                                                <QuestionView
                                                    key={index}
                                                    id={el.id}
                                                    text={el.text}
                                                    options={el.options}
                                                />)}
                                        </div>
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
