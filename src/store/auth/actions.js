export const AUTH_CHANGE_LOGIN_VALUE = 'AUTH_CHANGE_LOGIN_VALUE';
export const AUTH_CHANGE_PASSWORD_VALUE = 'AUTH_CHANGE_PASSWORD_VALUE';

export const setLoginValue = value => ({
    type: AUTH_CHANGE_LOGIN_VALUE,
    payload: value
});

export const setPasswordValue = value => ({
    type: AUTH_CHANGE_PASSWORD_VALUE,
    payload: value
});