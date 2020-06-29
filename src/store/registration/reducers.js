import { REG_CHANGE_LOGIN_VALUE, REG_CHANGE_EMAIL_VALUE, REG_CHANGE_PASSWORD_VALUE, REG_CHANGE_REPEAT_PASSWORD_VALUE } from "./actions"

const defaultState = {
    login: '',
    email: '',
    password: '',
    repeatPassword: ''
}

export const registrationReducer = (state = defaultState, action) => {
    switch (action.type) {
        case REG_CHANGE_LOGIN_VALUE:
            return {
                ...state,
                login: action.payload
            }   
        case REG_CHANGE_EMAIL_VALUE:
            return {
                ...state,
                email: action.payload
            }   
        case REG_CHANGE_PASSWORD_VALUE:
            return {
                ...state,
                password: action.payload
            }
        case REG_CHANGE_REPEAT_PASSWORD_VALUE:
            return {
                ...state,
                repeatPassword: action.payload
            }
        default:
            return state
    }
}