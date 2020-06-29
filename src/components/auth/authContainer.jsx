import React from "react";
import { connect } from "react-redux";
import Auth from "./auth";
import { setLoginValue, setPasswordValue } from "../../store/auth/actions";

class AuthContainer extends React.Component {
  render() {
    return (
      <Auth
        loadOptions={this.props.loadOptions}
        history={this.props.history}
        login={this.props.login}
        password={this.props.password}
        loadedClass={this.props.loadedClass}
        loadingDelay={this.props.loadingDelay}
        setLoginValue={this.props.setLoginValue}
        setPasswordValue={this.props.setPasswordValue}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loadOptions: state.shared.loadOptions,
    login: state.auth.login,
    password: state.auth.password,
  };
};

const mapDispatchToProps = {
  setLoginValue,
  setPasswordValue,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
