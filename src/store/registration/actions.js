export const REG_CHANGE_LOGIN_VALUE = 'REG_CHANGE_LOGIN_VALUE';
export const REG_CHANGE_EMAIL_VALUE = 'REG_CHANGE_EMAIL_VALUE';
export const REG_CHANGE_PASSWORD_VALUE = 'REG_CHANGE_PASSWORD_VALUE';
export const REG_CHANGE_REPEAT_PASSWORD_VALUE = 'REG_CHANGE_REPEAT_PASSWORD_VALUE';

export const setLoginValue = value => ({
    type: REG_CHANGE_LOGIN_VALUE,
    payload: value
});
export const setEmailValue = value => ({
    type: REG_CHANGE_EMAIL_VALUE,
    payload: value
});

export const setPasswordValue = value => ({
    type: REG_CHANGE_PASSWORD_VALUE,
    payload: value
});

export const setRepeatPasswordValue = value => ({
    type: REG_CHANGE_REPEAT_PASSWORD_VALUE,
    payload: value
});
