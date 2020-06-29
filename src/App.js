import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './assets/App.scss';
import './API.js'

import rootReducer from './store/reducers';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Mainpage from './components/mainpage/mainpage';
import ProfileContainer from './components/profile/profileContainer';
import AuthContainer from './components/auth/authContainer';
import RegistrationContainer from './components/registration/registrationContainer';
import QuizContainer from './components/quiz/quizContainer';
import Sidebar from './components/sidebar/sidebar';




const store = createStore(rootReducer)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Header />
            <div className="layoutPage layoutPage_withSidebar">
              <Sidebar />
              <div className="content">
                <Route path="/" exact component={Mainpage} />
                <Route path="/profile" component={ProfileContainer} />
                <Route path="/auth" component={AuthContainer} />
                <Switch>
                  <Route exact path="/registration" component={RegistrationContainer} />
                  <Route path="/registration/await" component={RegistrationContainer} />
                  <Route path="/registration/confirm" component={RegistrationContainer} />
                </Switch>
                <Switch>
                  <Route exact path="/quiz" component={QuizContainer} />
                  <Route exact path="/quiz/create" component={QuizContainer} />
                  <Route exact path="/quiz/:id" component={QuizContainer} />
                  <Route exact path="/quiz/:id/edit" component={QuizContainer} />
                  <Route exact path="/quiz/:id/pass" component={QuizContainer} />
                </Switch>
              </div>
              <Footer />
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

