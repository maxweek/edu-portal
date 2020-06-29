import React from 'react';
import s from './footer.module.css';
import { NavLink } from 'react-router-dom';

const footer = (props) => {
    return (
        <footer>
            <div className={s.outer + ' com_box com_in_page footer'}>
                <div className={s.inner}>
                    <div className={s.ftr_row}>
                        <div className={s.ftr_col}>
                            <NavLink className={s.logo_box} activeClassName={s.active} to="/">
                                <div className={s.logo}>LOGO</div>
                                <div className={s.logo_text}>Sensei</div>
                            </NavLink>
                            <div className={s.bar}>Some Text About Privacy</div>
                        </div>
                        <div className={s.bar}>Future Navigation</div>
                    </div>
                    <div className={s.ftr_row}>
                        <div className={s.copyright}>
                            copyright @ 2020
                        </div>
                        <div className={s.creators}>
                            created by creaters
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default footer;