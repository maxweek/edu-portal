import { QUIZ_ADD_NEW_QUESTION, QUIZ_ADD_NEW_OPTION, QUIZ_SET_QUESTION_TEXT, QUIZ_SET_OPTION_TEXT, QUIZ_SET_QUIZ_TITLE, QUIZ_SET_OPTION_AS_ANSWER, QUIZ_SET_QUIZ, QUIZ_SET_QUIZES, QUIZ_PASS_QUESTION, QUIZ_SET_CURR_QUIZ } from "./actions"

export const defaultState = {
    newQuiz: {
        id: 1,
        title: '',
        add: true,
        questions: [
        ]
    },
    editQuiz: {
        id: 1,
        title: '',
        add: true,
        questions: [
        ]
    },
    currQuiz: {
        id: 1,
        title: '',
        questions: [
        ]
    },
    quizes: []
}

export const quizReducer = (state = defaultState, action) => {
    console.log(action)
    console.log(state)
    switch (action.type) {
        case QUIZ_SET_QUIZ_TITLE:
            if (action.isNew === true) {
                return {
                    ...state,
                    newQuiz: {
                        ...state.newQuiz,
                        title: action.payload
                    }
                }
            } else {
                return {
                    ...state,
                    editQuiz: {
                        ...state.editQuiz,
                        title: action.payload
                    }
                }
            }

        case QUIZ_ADD_NEW_QUESTION:
            if (action.isNew === true) {
                return {
                    ...state,
                    newQuiz: {
                        ...state.newQuiz,
                        questions: [...state.newQuiz.questions, action.payload]
                    }
                }
            } else {
                return {
                    ...state,
                    editQuiz: {
                        ...state.editQuiz,
                        questions: [...state.editQuiz.questions, action.payload]
                    }
                }
            }

        case QUIZ_ADD_NEW_OPTION:
            if (action.isNew === true) {
                return {
                    ...state,
                    newQuiz: {
                        ...state.newQuiz,
                        questions: state.newQuiz.questions.map((el) => {
                            if (el.id === action.questionId) {
                                if (el.options.length > 0) {
                                    el.options.push(action.payload);
                                } else {
                                    action.payload.isAnswer = true
                                    el.options.push(action.payload);
                                }
                                return el;
                            } else {
                                return el;
                            }
                        })
                    }
                }
            } else {
                return {
                    ...state,
                    editQuiz: {
                        ...state.editQuiz,
                        questions: state.editQuiz.questions.map((el) => {
                            if (el.id === action.questionId) {
                                if (el.options.length > 0) {
                                    el.options.push(action.payload);
                                } else {
                                    action.payload.isAnswer = true
                                    el.options.push(action.payload);
                                }
                                return el;
                            } else {
                                return el;
                            }
                        })
                    }
                }
            }

        case QUIZ_SET_QUESTION_TEXT:
            if (action.isNew === true) {
                return {
                    ...state,
                    newQuiz: {
                        ...state.newQuiz,
                        questions: state.newQuiz.questions.map((el) => {
                            if (el.id === action.questionId) {
                                el.text = action.payload;
                            }
                            return el;
                        })
                    }
                }
            } else {
                return {
                    ...state,
                    editQuiz: {
                        ...state.editQuiz,
                        questions: state.editQuiz.questions.map((el) => {
                            if (el.id === action.questionId) {
                                el.text = action.payload;
                            }
                            return el;
                        })
                    }
                }
            }

        case QUIZ_SET_OPTION_TEXT:
            if (action.isNew === true) {
                return {
                    ...state,
                    newQuiz: {
                        ...state.newQuiz,
                        questions: state.newQuiz.questions.map((el) => {
                            el.options.map((elem) => {
                                if (el.id === action.questionId && elem.id === action.id) {
                                    elem.text = action.payload;
                                }
                                return elem;
                            })
                            return el;
                        })
                    }
                }
            } else {
                return {
                    ...state,
                    editQuiz: {
                        ...state.editQuiz,
                        questions: state.editQuiz.questions.map((el) => {
                            el.options.map((elem) => {
                                if (el.id === action.questionId && elem.id === action.id) {
                                    elem.text = action.payload;
                                }
                                return elem;
                            })
                            return el;
                        })
                    }
                }
            }

        case QUIZ_SET_OPTION_AS_ANSWER:
            if (action.isNew === true) {
                return {
                    ...state,
                    newQuiz: {
                        ...state.newQuiz,
                        questions: state.newQuiz.questions.map((el) => {
                            if (el.id === action.questionId) {
                                el.options.map((elem) => {
                                    if (elem.id === action.id) {
                                        elem.isAnswer = true;
                                    } else {
                                        elem.isAnswer = false;
                                    }
                                    return elem;
                                })
                            }
                            return el;
                        })
                    }
                }
            } else {
                return {
                    ...state,
                    editQuiz: {
                        ...state.editQuiz,
                        questions: state.editQuiz.questions.map((el) => {
                            if (el.id === action.questionId) {
                                el.options.map((elem) => {
                                    if (elem.id === action.id) {
                                        elem.isAnswer = true;
                                    } else {
                                        elem.isAnswer = false;
                                    }
                                    return elem;
                                })
                            }
                            return el;
                        })
                    }
                }
            }
        case QUIZ_SET_QUIZ:
            if (action.isNew === true) {
                return {
                    ...state,
                    newQuiz: action.payload
                }
            } else {
                return {
                    ...state,
                    editQuiz: action.payload
                }
            }
        case QUIZ_SET_CURR_QUIZ:
            return {
                ...state,
                currQuiz: action.payload
            }

        case QUIZ_SET_QUIZES:
            return {
                ...state,
                quizes: action.payload
            }
        case QUIZ_PASS_QUESTION:
            return {
                ...state,
                currQuiz: {
                    ...state.currQuiz,
                    questions: state.currQuiz.questions.map((el) => {
                        if (el.id === action.questionId) {
                            el.options.map((elem) => {
                                if (elem.id === action.optionId) {
                                    elem.isAnswer = true;
                                } else {
                                    elem.isAnswer = false;
                                }
                                return elem;
                            })
                        }
                        return el;
                    })
                }

            }

        default:
            return state
    }
}