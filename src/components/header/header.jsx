import React from 'react';
import s from './header.module.css';
import { NavLink } from 'react-router-dom';

const header = (props) => {
    return (
        <header>
            <div className={s.outer + ' com_in_page header'}>
                <NavLink className={s.logo_box} activeClassName={s.active} to="/">
                    <div className={s.logo}>LOGO</div>
                    <div className={s.logo_text}>Sensei</div>
                </NavLink>

                <div className={s.bar}>
                <NavLink className={s.logo_box} activeClassName={s.active} to="/auth">Авторизация</NavLink>
                <NavLink className={s.logo_box} activeClassName={s.active} to="/registration">Регистрация</NavLink>
                <NavLink className={s.logo_box} activeClassName={s.active} to="/quiz">Квизы</NavLink>
                <NavLink className={s.logo_box} activeClassName={s.active} to="/quiz/1">Квиз</NavLink>
                <NavLink className={s.logo_box} activeClassName={s.active} to="/quiz/create">Создать</NavLink>
                <NavLink className={s.logo_box} activeClassName={s.active} to="/quiz/1/edit">Редактировать</NavLink>
                </div>

                <NavLink className={s.logo_box} activeClassName={s.active} to="/profile">
                    <div className={s.profile_box}>Profile</div>
                    <div className={s.profile_avatar}><img alt="123" src="https://i.pinimg.com/736x/d1/0b/50/d10b5048c2c0b8207bff231e3e9488d1.jpg" /></div>
                </NavLink>
            </div>
        </header>
    );
}

export default header;
