import React from "react";
import s from "./quiz.module.scss";
import { NavLink } from "react-router-dom";
import API, { API_GET_QUIZ_EDIT } from "../../API";
import MainSectionTitle from "../_shared/mainSectionTitle/mainSectionTitle";
import ModuleTitle from "../_shared/moduleTitle/moduleTitle";

export default class Quizes extends React.Component {
  constructor(props) {
    super(props);

    console.log(this);

    this.state = {
      loadStatus: this.props.loadOptions.loadingClass,
      apiLoadStatus: this.props.loadOptions.apiLoadingClass,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loadStatus: this.props.loadOptions.loadedClass });
    }, this.props.loadOptions.loadingDelay);
    API.get(API_GET_QUIZ_EDIT)
      .then((res) => {
        console.log("GOOD GET");
        console.log(res);
        this.props.setQuizes(res.data);
        setTimeout(() => {
          this.setState({
            apiLoadStatus: this.props.loadOptions.apiLoadedClass,
          });
        }, this.props.loadOptions.loadingDelay);
      })
      .catch((res) => {
        console.log("GET ERROR");
        console.log(res);
        return false;
      });
  }

  render() {
    let i = 0;
    return (
      <div
        className={
          "com_box com_in_page preload " +
          this.state.loadStatus +
          " " +
          this.state.apiLoadStatus
        }
      >
        <section>
          <div className={s.inner}>
            <MainSectionTitle value="Квизы" />
            <div className="rowModules quizModules">
              <div className="colModules flex_2" key="9999">
                <NavLink className="module moduleLink" to="/quiz/create">
                  <ModuleTitle value="Создать новый" />
                </NavLink>
              </div>
              {this.props.quizes.map((el, index) => {
                i++;
                return (
                  <div
                    className={i === 1 ? "colModules flex_2" : "colModules"}
                    key={index}
                  >
                    <NavLink
                      className="module moduleLink"
                      to={"/quiz/" + el.id}
                    >
                      <ModuleTitle value={el.title} />
                      <div>Вопросов {el.questions.length}</div>
                    </NavLink>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
