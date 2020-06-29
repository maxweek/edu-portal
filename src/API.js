import axios from 'axios';
import Cookies from 'js-cookie';

export let AUTH_TOKEN = '';

export const URL_MAINPAGE = '/';

export const URL_QUIZ_VIEW_ALL = '/quiz';
export const URL_QUIZ_VIEW = '/quiz/:id';
export const URL_QUIZ_CREATE = '/quiz/create';
export const URL_QUIZ_EDIT = '/quiz/:id/edit';
export const URL_QUIZ_PASS = '/quiz/:id/pass';

export const URL_USER_PROFILE = '/profile';

export const URL_REGISTRATION_AWAIT = '/registration/await';
export const URL_REGISTRATION_CONFIRM = '/registration/confirm';

export const API_POST_QUIZ_COLLECT = 'api/quiz/';
export const API_POST_QUIZ_PASS = 'api/quiz/checking/';
export const API_GET_QUIZ_EDIT = 'api/quiz/';
export const API_GET_QUIZ_PASS = 'api/quiz/checking/';

export const API_GET_CHECK_EXIST_USERNAME = 'api/user/username';
export const API_GET_CHECK_EXIST_EMAIL = 'api/user/email';
export const API_POST_REGISTRATION = 'api/user/sign-up';
export const API_POST_AUTH = 'api/user/sign-in';


export function apiSetAuthToken(token) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    Cookies.set('token', token);
    window.location.reload();
}
export function apiRemoveAuthToken() {
    axios.defaults.headers.common['Authorization'] = '';
    Cookies.set('token', '');
    window.location.replace(URL_MAINPAGE)
}

export default axios.create({
    // baseURL: `http://192.168.0.12:8081/`,
    baseURL: `localhost:8081/`,
    headers: Cookies.get('token') !== undefined && Cookies.get('token') !== '' ? { 'Authorization': 'Bearer ' + Cookies.get('token') } : '',
});
// export default axios.create({
//     baseURL: `http://192.168.0.21:8080/`,
//     headers: { 'Authorization': 'Bearer ' + Cookies.get('token') }
// });