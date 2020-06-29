import React from 'react';
import { NavLink } from 'react-router-dom';

const sidebar = (props) => {
    console.log('SIDEBAR_PROPS');
    console.log(props)
    return (
        <div className="sidebar com_box">
            <div className="sidebarOuter">
                <div className="sidebar_menu">
                    <NavLink className="menu_el" activeClassName="active" to="/auth">Авторизация</NavLink>
                    <NavLink className="menu_el" activeClassName="active" to="/registration">Регистрация</NavLink>
                    <NavLink className="menu_el" activeClassName="active" to="/registration/await">Почта подтверждается</NavLink>
                    <NavLink className="menu_el" activeClassName="active" to="/registration/confirm">Почта подтверждена</NavLink>
                    <NavLink className="menu_el" activeClassName="active" to="/quiz">Квизы</NavLink>
                    <NavLink className="menu_el" activeClassName="active" to="/quiz/1">Квиз</NavLink>
                    <NavLink className="menu_el" activeClassName="active" to="/quiz/create">Создать</NavLink>
                    <NavLink className="menu_el" activeClassName="active" to="/quiz/1/edit">Редактировать</NavLink>
                    <NavLink className="menu_el" activeClassName="active" to="/quiz/1/pass">Решить</NavLink>
                </div>
            </div>
        </div>
    );
}

export default sidebar;
