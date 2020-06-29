import { AUTH_CHANGE_LOGIN_VALUE, AUTH_CHANGE_PASSWORD_VALUE } from "./actions"

const defaultState = {
    login: '',
    password: '',
}

export const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case AUTH_CHANGE_LOGIN_VALUE:
            return {
                ...state,
                login: action.payload
            }   
        case AUTH_CHANGE_PASSWORD_VALUE:
            return {
                ...state,
                password: action.payload
            }
        default:
            return state
    }
}