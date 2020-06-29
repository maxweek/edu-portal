import React from 'react';
import s from './profile.module.css';
import MainSectionTitle from '../_shared/mainSectionTitle/mainSectionTitle';
import { apiRemoveAuthToken, URL_MAINPAGE } from '../../API';

class Profile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            loadStatus: this.props.loadOptions.loadingClass
        }
    }
    componentDidMount() {
        setTimeout(() => { this.setState({ loadStatus: this.props.loadOptions.loadedClass }) }, this.props.loadOptions.loadingDelay)
    }
    componentWillMount() {
        
    }
    render() {
        return (
            <div className={'com_box com_in_page preload ' + this.state.loadStatus}>
                <MainSectionTitle value="Профиль" />
                <section>
                    <div className={s.inner}>
                        <div className={s.col}>
                            <div className={s.avatar}>
                                <img src="https://i.pinimg.com/736x/d1/0b/50/d10b5048c2c0b8207bff231e3e9488d1.jpg" alt="123"/>
                            </div>
                        </div>
                        <div className={s.col}>
                            <div className={s.row + ' ' + s.name}>
                                <div className={s.row_inner}>
                                    Max Week
                                    </div>
                            </div>
                            <div className={s.row + ' ' + s.reg_date}>
                                <div className={s.row_inner}>
                                    <div className="subtitle">Дата регистрации</div>
                                        С нами с 20.20.2020
                                    </div>
                            </div>
                            <div className={s.row + ' ' + s.status}>
                                <div className={s.row_inner}>
                                    <div className="subtitle">Статус</div>
                                        Заслуженный сенсей
                                    </div>
                            </div>
                        </div>
                        <a class="btn btn-primary" onClick={apiRemoveAuthToken}>Выйти</a>
                    </div>
                </section>
            </div>
        )
    }
}
// const profile = (props) => {
//     return (
//         <div className={s.outer + ' current_content'}>
//             <section>
//                 <div className="container">
//                     <div className={s.inner}>
//                         <div className={s.col}>
//                             <div className={s.avatar}>
//                                 <img src="https://i.pinimg.com/736x/d1/0b/50/d10b5048c2c0b8207bff231e3e9488d1.jpg" />
//                             </div>
//                         </div>
//                         <div className={s.col}>
//                             <div className={s.row + ' ' + s.name}>
//                                 <div className={s.row_inner}>
//                                     Max Week
//                                 </div>
//                             </div>
//                             <div className={s.row + ' ' + s.reg_date}>
//                                 <div className={s.row_inner}>
//                                     <div className="subtitle">Дата регистрации</div>
//                                     С нами с 20.20.2020
//                                 </div>
//                             </div>
//                             <div className={s.row + ' ' + s.status}>
//                                 <div className={s.row_inner}>
//                                     <div className="subtitle">Статус</div>
//                                     Заслуженный сенсей
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }

export default Profile;