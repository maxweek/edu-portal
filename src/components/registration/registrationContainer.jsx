import React from "react";
import { connect } from "react-redux";
import Registration from "./registration";
import {
  setLoginValue,
  setEmailValue,
  setPasswordValue,
  setRepeatPasswordValue,
} from "../../store/registration/actions";
import RegistrationAwait from "./registrationAwait";
import { URL_REGISTRATION_AWAIT, URL_REGISTRATION_CONFIRM } from "../../API";
import RegistrationConfirm from "./registrationConfirm";

class RegistrationContainer extends React.Component {
    
  render() {
    switch (this.props.match.path) {
      case URL_REGISTRATION_AWAIT:
        return <RegistrationAwait loadOptions={this.props.loadOptions} />;
      case URL_REGISTRATION_CONFIRM:
        return <RegistrationConfirm loadOptions={this.props.loadOptions} />;
      default:
        return (
          <Registration
            loadOptions={this.props.loadOptions}
            history={this.props.history}
            login={this.props.login}
            email={this.props.email}
            password={this.props.password}
            repeatPassword={this.props.repeatPassword}
            setLoginValue={this.props.setLoginValue}
            setEmailValue={this.props.setEmailValue}
            setPasswordValue={this.props.setPasswordValue}
            setRepeatPasswordValue={this.props.setRepeatPasswordValue}
          />
        );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.registration.login,
    email: state.registration.email,
    password: state.registration.password,
    repeatPassword: state.registration.repeatPassword,
    loadOptions: state.shared.loadOptions,
  };
};

const mapDispatchToProps = {
  setLoginValue,
  setEmailValue,
  setPasswordValue,
  setRepeatPasswordValue,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationContainer);
