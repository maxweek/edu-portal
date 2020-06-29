import React from 'react';
import s from './mainpage.module.css';

const mainpage = (props) => {
    return (
        <div className="com_in_page mainpage_box">
            <section className={s.title_box}>
                <div className={s.title_box_inner}>
                    <div className="sectionTitle">
                        Title
                        </div>
                    <div className={s.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </div>
                    <div className="btn btn-primary">Button</div>
                </div>
            </section>
            <section className={s.whoiam}>
                <div className={s.whoiam_outer}>
                    <div className={s.whoiam_box_inner + ' ' + s.tch}>
                        <div className="sectionTitle">
                            I'm Teacher
                            </div>
                        <div className="btn btn-primary">Button</div>
                    </div>
                    <div className={s.whoiam_box_inner + ' ' + s.std}>
                        <div className="sectionTitle">
                            I'm Student
                            </div>
                        <div className="btn btn-primary">Button</div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default mainpage;