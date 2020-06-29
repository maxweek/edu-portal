import { combineReducers } from 'redux';
import { authReducer } from './auth/reducers';
import { registrationReducer } from './registration/reducers';
import { sharedReducer } from './_shared/reducers';
import { quizReducer } from './quiz/reducers';

export default combineReducers({
    auth: authReducer,
    registration: registrationReducer,
    quizReducer,
    shared: sharedReducer,
})