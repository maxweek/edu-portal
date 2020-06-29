export const QUIZ_ADD_NEW_QUESTION = 'QUIZ_ADD_NEW_QUESTION';
export const QUIZ_ADD_NEW_OPTION = 'QUIZ_ADD_NEW_OPTION';
export const QUIZ_SET_QUESTION_TEXT = 'QUIZ_SET_QUESTION_TEXT';
export const QUIZ_SET_OPTION_TEXT = 'QUIZ_SET_OPTION_TEXT';
export const QUIZ_SET_QUIZ_TITLE = 'QUIZ_SET_QUIZ_TITLE';
export const QUIZ_SET_OPTION_AS_ANSWER = 'QUIZ_SET_OPTION_AS_ANSWER';
export const QUIZ_SET_QUIZ = 'QUIZ_SET_QUIZ';
export const QUIZ_SET_QUIZES = 'QUIZ_SET_QUIZES';
export const QUIZ_PASS_QUESTION = 'QUIZ_PASS_QUESTION';
export const QUIZ_SET_CURR_QUIZ = 'QUIZ_SET_CURR_QUIZ';

export const addNewQuestion = data => ({
    type: QUIZ_ADD_NEW_QUESTION,
    payload: {
        id: data.id,
        text: '',
        add: true,
        options: [{
            id: 1,
            text: '',
            add: true,
            isAnswer: true,
            questionId: data.id
        },
        {
            id: 2,
            text: '',
            add: true,
            isAnswer: false,
            questionId: data.id
        }
        ]
    },
    isNew: data.isNew
});
export const addNewOption = data => ({
    type: QUIZ_ADD_NEW_OPTION,
    questionId: data.questionId,
    payload: {
        id: data.id,
        text: '',
        isNew: true,
        isAnswer: false,
        questionId: data.questionId
    },
    isNew: data.isNew
});
export const setQuestionText = data => ({
    type: QUIZ_SET_QUESTION_TEXT,
    questionId: data.questionId,
    payload: data.value,
    isNew: data.isNew
});
export const setOptionText = data => ({
    type: QUIZ_SET_OPTION_TEXT,
    questionId: data.questionId,
    id: data.id,
    payload: data.value,
    isNew: data.isNew
});
export const setQuizTitle = data => ({
    type: QUIZ_SET_QUIZ_TITLE,
    payload: data.value,
    isNew: data.isNew
});
export const setOptionAsAnswer = data => ({
    type: QUIZ_SET_OPTION_AS_ANSWER,
    id: data.id,
    questionId: data.questionId,
    payload: data.value,
    isNew: data.isNew
});
export const setQuiz = data => ({
    type: QUIZ_SET_QUIZ,
    payload: data.quiz,
    isNew: data.isNew
});
export const setQuizes = data => ({
    type: QUIZ_SET_QUIZES,
    payload: data,
});
export const passQuestion = data => ({
    type: QUIZ_PASS_QUESTION,
    questionId: data.questionId,
    optionId: data.optionId,
});
export const setPassQuiz = data => ({
    type: QUIZ_SET_CURR_QUIZ,
    payload: data,
});

