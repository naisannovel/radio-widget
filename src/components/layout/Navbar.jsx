import React, { Fragment } from 'react';
import Logo from './Logo';

// css module
import style from './navbar.module.css';

const Navbar = () => {
    return (
        <Fragment>
            <nav className={style.nav__full_container}>
                <div className={style.nav__container}>
                    <Logo/>
                    <div className={style.nav__item_container}>
                        <a href='#'>Home</a>
                        <a href='#'>Dashboard</a>
                        <button className='primary__btn'>Login</button>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
};

export default Navbar;