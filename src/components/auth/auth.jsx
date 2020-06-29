import React from "react";
import s from "./auth.module.css";
import API, { API_POST_AUTH, apiSetAuthToken, URL_USER_PROFILE } from "../../API";
import Input from "../_shared/input/input";
import MainSectionTitle from "../_shared/mainSectionTitle/mainSectionTitle";

export default class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.setLoginValue = this.setLoginValue.bind(this);
    this.setPasswordValue = this.setPasswordValue.bind(this);
    this.onAuthFormSubmit = this.onAuthFormSubmit.bind(this);

    this.state = {
      loadStatus: this.props.loadOptions.loadingClass,
      apiLoadStatus: this.props.loadOptions.apiLoadedClass,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loadStatus: this.props.loadOptions.loadedClass });
    }, this.props.loadOptions.loadingDelay);
  }
  setLoginValue(event) {
    this.props.setLoginValue(event.target.value);
  }
  setPasswordValue(event) {
    this.props.setPasswordValue(event.target.value);
  }
  onAuthFormSubmit(e) {
    e.preventDefault();
    API.post(API_POST_AUTH, {
      username: this.props.login,
      password: this.props.password,
    })
      .then((res) => {
        console.log(res);
        this.setState({
          apiLoadStatus: this.props.loadOptions.apiLoadedClass,
        });
        apiSetAuthToken(res.data);
        
        this.props.history.push(URL_USER_PROFILE)
      })
      .catch((res) => {
        this.setState({
          apiLoadStatus: this.props.loadOptions.apiLoadedClass,
        });
      });
    this.setState({
      apiLoadStatus: this.props.loadOptions.apiLoadingClass,
    });
  }

  render() {
    return (
      <div
        className={
          "com_box com_in_page preload " +
          this.state.loadStatus +
          " " +
          this.state.apiLoadStatus
        }
      >
        <MainSectionTitle value="Войти" />
        <section>
          <div className={s.inner}>
            <div className="rowModules">
              <div className="module singleForm">
                <form onSubmit={this.onAuthFormSubmit}>
                  <Input
                    type="text"
                    id="login"
                    label="Логин"
                    required={true}
                    value={this.props.login}
                    onChange={this.setLoginValue}
                  />
                  <Input
                    type="password"
                    id="password"
                    label="Пароль"
                    required={true}
                    value={this.props.password}
                    onChange={this.setPasswordValue}
                  />
                  <div className="btnBox">
                    <button className="btn">Войти</button>
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
