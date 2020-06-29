import React from 'react';
import s from './registration.module.scss';
import { NavLink } from 'react-router-dom';
import MainSectionTitle from '../_shared/mainSectionTitle/mainSectionTitle';
import i_mailSend from '../../assets/images/mailSend.png';
import ModuleTitle from '../_shared/moduleTitle/moduleTitle';

export default class RegistrationConfirm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            loadStatus: this.props.loadOptions.loadingClass
        }

    }
    componentWillMount() {
    }
    componentDidMount() {
        setTimeout(() => { this.setState({ loadStatus: this.props.loadOptions.loadedClass }) }, this.props.loadOptions.loadingDelay)
    }

    render() {
        return (
            <div className={'com_box com_in_page preload ' + this.state.loadStatus}>
                <MainSectionTitle value="Подтверждено" />
                <section>
                    <div className={s.inner}>
                        <div className="rowModules">
                            <div className="module">
                                <div className="flexRow jc-start">
                                    <div class="moduleImage i_mailSend">
                                        <img alt="123" src={i_mailSend} />
                                    </div>
                                    <div className="flexCol">
                                        <ModuleTitle value="Профиль подтвержден" />
                                        <NavLink className="btn btn-primary" to="/auth">Войти</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
