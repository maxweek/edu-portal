import React from 'react';
import s from './registration.module.scss';
import MainSectionTitle from '../_shared/mainSectionTitle/mainSectionTitle';
import i_mailSend from '../../assets/images/mailSend.png';
import ModuleTitle from '../_shared/moduleTitle/moduleTitle';

export default class RegistrationAwait extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            loadStatus: this.props.loadOptions.loadingClass
        }

    }
    
    componentDidMount() {
        setTimeout(() => { this.setState({ loadStatus: this.props.loadOptions.loadedClass }) }, this.props.loadOptions.loadingDelay)
    }

    render() {
        return (
            <div className={'com_box com_in_page preload ' + this.state.loadStatus}>
                <MainSectionTitle value="Подтвердите регистрацию" />
                <section>
                    <div className={s.inner}>
                        <div className="rowModules">
                            <div className="module">
                                <div className="flexRow jc-start">
                                    <div className="moduleImage i_mailSend">
                                        <img src={i_mailSend} alt="123"/>
                                    </div>
                                    <div className="flexCol">
                                        <ModuleTitle value="Отправили письмо на e-mail" />
                                        <div className="text">Активируйте профиль, после чего сможете войти в систему</div>
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
