import React from "react";

export default class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      classSuffix: "",
      condition: "",
      status: "empty",
      reqStatus: "",
      duration: 1500,
      isLoading: "",
    };
  }
  componentDidMount() {
    if (this.props.type === "checkbox") {
      this.setState({ status: "" });
    }
    if (this.props.classSuffix !== undefined) {
      this.setState({ classSuffix: " " + this.props.classSuffix });
    }
  }
  onFocus = (event) => {
    this.setState({ condition: " focused", status: "notEmpty", reqStatus: "" });
  };
  onBlur = (event) => {
    this.setState({ condition: "" });
    if (event.target.value !== "") {
      this.setState({ status: "notEmpty" });
      // console.log(this.state.reqStatus)
    } else {
      this.setState({ status: "empty" });
      if (this.props.required === true) {
        this.setState({ reqStatus: " req" });
        setTimeout(() => {
          this.setState({ reqStatus: "" });
        }, this.state.duration);
      }
    }
  };
  componentDidUpdate() {
    // console.log("componentDidUpdate()");
  }
  componentWillReceiveProps() {
    // console.log(this.props)
    // console.log(this.props.checking)
    // console.log(this.state.isLoading)
    // console.log('input ' + this.props.type + ' receivingProps')
    if (
      this.props.value !== "" &&
      this.props.value !== undefined &&
      this.props.type !== "checkbox"
    ) {
      this.setState({ status: "notEmpty" });
    }
    if (
      this.props.checking !== "" &&
      this.props.checking !== undefined &&
      this.props.type !== "checkbox"
    ) {
      if (this.props.checking) {
        this.setState({ isLoading: " input__loading" });
      } else {
        this.setState({ isLoading: "" });
      }
    }
  }

  render() {
    let isChecked = "";
    if (this.props.value === true) {
      isChecked = "checked";
    }
    return (
      <div
        className={
          "inputbox " +
          this.state.status +
          this.state.reqStatus +
          this.state.condition +
          this.state.classSuffix +
          this.state.isLoading
        }
      >
        {this.props.type === "text" ||
          this.props.type === "password" ||
          this.props.type === "email" ||
          this.props.type === "number" ||
          this.props.type === "phone" ? (
            <input
              type={this.props.type}
              id={this.props.id}
              value={this.props.value}
              onChange={this.props.onChange}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              required={this.props.required}
            />
          ) : (
            ""
          )}
        {this.props.type === "checkbox" ? (
          <input
            type={this.props.type}
            id={this.props.id}
            checked={isChecked}
            onChange={this.props.onChange}
            required={this.props.required}
          />
        ) : (
            ""
          )}
        {this.props.label !== '' ?
          <label htmlFor={this.props.id}>{this.props.label}</label>
          : ''}
        <div
          className={"msg_inp__container inp_msg__" + this.props.messageClass}
        >
          {this.props.message}
        </div>
      </div>
    );
  }
}
