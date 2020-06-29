import React from "react";
import s from "./registration.module.scss";
import API, {
  API_GET_CHECK_EXIST_USERNAME,
  API_GET_CHECK_EXIST_EMAIL,
  API_POST_REGISTRATION,
  URL_REGISTRATION_AWAIT,
} from "../../API";
import Input from "../_shared/input/input";
import MainSectionTitle from "../_shared/mainSectionTitle/mainSectionTitle";
import { useHistory } from "react-router-dom";

export default class Registration extends React.Component {
  constructor(props) {
    super(props);

    this.setLoginValue = this.setLoginValue.bind(this);
    this.setEmailValue = this.setEmailValue.bind(this);
    this.setPasswordValue = this.setPasswordValue.bind(this);
    this.setRepeatPasswordValue = this.setRepeatPasswordValue.bind(this);
    this.onRegistrationFormSubmit = this.onRegistrationFormSubmit.bind(this);
    this.checkPasswordsValues = this.checkPasswordsValues.bind(this);

    this.timeoutLogin = 0;
    this.timeoutEmail = 0;
    this.timeoutPassword = 0;

    this.state = {
      loadStatus: this.props.loadOptions.loadingClass,
      apiLoadStatus: this.props.loadOptions.apiLoadedClass,
      checkLogin: false,
      checkEmail: false,
      checkPassword: null,
      loginChecking: false,
      loginMessage: "",
      loginMessageClass: "",
      emailChecking: false,
      emailMessage: "",
      emailMessageClass: "",
      repeatPasswordMessage: "",
      repeatPasswordMessageClass: "",
      formStatus: "",
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loadStatus: this.props.loadOptions.loadedClass });
    }, this.props.loadOptions.loadingDelay);
  }
  setLoginValue(event, type = false) {
    if (type) {
      this.props.setLoginValue("");
      return;
    }
    let value = event.target.value;
    this.setState(
      {
        checkLogin: false,
        loginChecking: true,
        loginMessage: "",
        loginMessageClass: "neutral",
      },
      () => {
        this.props.setLoginValue(value);
      }
    );

    clearTimeout(this.timeoutLogin);

    this.timeoutLogin = setTimeout(() => {
      API.get(API_GET_CHECK_EXIST_USERNAME, {
        params: { username: value },
      })
        .then((res) => {
          this.setState({ loginChecking: false });
          if (res.data === true) {
            this.setState({
              checkLogin: false,
              loginMessage: "Этот логин занят",
              loginMessageClass: "alert",
            });
          } else {
            this.setState({
              checkLogin: true,
              loginMessage: "Этот логин доступен",
              loginMessageClass: "success",
            });
          }
        })
        .catch((res) => {
          this.setState({
            checkLogin: false,
            loginMessage: "Ошибка соединения",
            loginMessageClass: "alert",
          });
        });
    }, 1000);
  }
  setEmailValue(event, type = false) {
    if (type) {
      this.props.setEmailValue("");
      return;
    }
    let value = event.target.value;
    this.setState(
      {
        checkEmail: false,
        emailChecking: true,
        emailMessage: "",
        emailMessageClass: "neutral",
      },
      () => {
        this.props.setEmailValue(value);
      }
    );

    clearTimeout(this.timeoutEmail);

    this.timeoutEmail = setTimeout(() => {
      API.get(API_GET_CHECK_EXIST_EMAIL, {
        params: { email: value },
      })
        .then((res) => {
          console.log(res);
          this.setState({ emailChecking: false });
          if (res.data === true) {
            this.setState({
              checkEmail: false,
              emailMessage: "Эта почта занята",
              emailMessageClass: "alert",
            });
          } else {
            this.setState({
              checkEmail: true,
              emailMessage: "Эта почта доступна",
              emailMessageClass: "success",
            });
          }
        })
        .catch((res) => {
          this.setState({
            checkEmail: false,
            emailMessage: "Ошибка соединения",
            emailMessageClass: "alert",
          });
        });
    }, 1000);
  }
  setPasswordValue(event, type = false) {
    if (type) {
      this.props.setPasswordValue("");
      return;
    }
    this.props.setPasswordValue(event.target.value);
    this.checkPasswordsValues();
  }
  setRepeatPasswordValue(event, type = false) {
    if (type) {
      this.props.setRepeatPasswordValue("");
      return;
    }
    this.props.setRepeatPasswordValue(event.target.value);
    this.checkPasswordsValues();
  }
  checkPasswordsValues(type = true) {
    clearTimeout(this.timeoutPassword);
    this.checkPasswordsValuesPromise = new Promise((resolve, reject) => {
      this.timeoutPassword = setTimeout(
        () => {
          if (this.props.password !== "" && this.props.repeatPassword !== "") {
            if (this.props.password === this.props.repeatPassword) {
              if (this.state.repeatPasswordMessage !== "") {
                this.setState({
                  repeatPasswordMessage: "Пароли совпадают",
                  repeatPasswordMessageClass: "success",
                });
              }
              resolve(true);
            } else {
              this.setState({
                repeatPasswordMessage: "Пароли не совпадают",
                repeatPasswordMessageClass: "alert",
              });
              resolve(false);
            }
          } else {
            this.setState({
              repeatPasswordMessage: "",
              repeatPasswordMessageClass: "neutral",
            });
            resolve(false);
          }
        },
        type ? 200 : 0
      );
    });
  }
  onRegistrationFormSubmit(e) {
    e.preventDefault();
    this.checkPasswordsValuesPromise.then((result) => {
      if (result && this.state.checkLogin && this.state.checkEmail) {
        API.post(API_POST_REGISTRATION, {
          username: this.props.login,
          email: this.props.email,
          password: this.props.password,
        }).then((res) => {
            this.setState({ formStatus: true, apiLoadStatus: this.props.loadOptions.apiLoadedClass });
            this.props.history.push(URL_REGISTRATION_AWAIT)
          })
          .catch((res) => {
            this.setState({ formStatus: false, apiLoadStatus: this.props.loadOptions.apiLoadedClass });
          });
        this.setState({ apiLoadStatus: this.props.loadOptions.apiLoadingClass });
      } else {
        this.setState({ formStatus: false });
      }
    });
  }

  render() {
    return (
      <div className={"com_box com_in_page preload " + this.state.loadStatus + " " + this.state.apiLoadStatus}>
        <MainSectionTitle value="Регистрация" />
        <section>
          <div className={s.inner}>
            <div className="rowModules">
              <div className={"module singleForm "}>
                <form onSubmit={this.onRegistrationFormSubmit}>
                  <Input
                    type="text"
                    id="login"
                    label="Логин"
                    required={true}
                    value={this.props.login}
                    checking={this.state.loginChecking}
                    message={this.state.loginMessage}
                    messageClass={this.state.loginMessageClass}
                    onChange={this.setLoginValue}
                  />
                  <Input
                    type="text"
                    id="email"
                    label="E-mail"
                    required={true}
                    value={this.props.email}
                    checking={this.state.emailChecking}
                    message={this.state.emailMessage}
                    messageClass={this.state.emailMessageClass}
                    onChange={this.setEmailValue}
                  />
                  <Input
                    type="password"
                    id="password"
                    label="Пароль"
                    required={true}
                    value={this.props.password}
                    onChange={this.setPasswordValue}
                  />
                  <Input
                    type="password"
                    id="repeatPassword"
                    label="Повторите пароль"
                    required={true}
                    value={this.props.repeatPassword}
                    message={this.state.repeatPasswordMessage}
                    messageClass={this.state.repeatPasswordMessageClass}
                    onChange={this.setRepeatPasswordValue}
                  />
                  <div className="formState">
                    {this.state.formStatus === true ? "Зарегистрировано" : "Не зарегистрировано"}
                  </div>
                  <div className="btnBox">
                    <button className="btn">Регистрация</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
