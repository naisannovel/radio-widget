import React, { Fragment } from 'react';
import Logo from './Logo';
import { Link, useNavigate } from 'react-router-dom';

// css module
import style from './navbar.module.css';

const Navbar = () => {

    const navigate = useNavigate();

    return (
        <Fragment>
            <nav className={style.nav__full_container}>
                <div className={style.nav__container}>
                    <Logo/>
                    <div className={style.nav__item_container}>
                        <Link to='/'>Home</Link>
                        <Link to='/dashboard'>Dashboard</Link>
                        <button className='primary__btn' onClick={()=>navigate("/login",{ replace: true })}>Login</button>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
};

export default Navbar;