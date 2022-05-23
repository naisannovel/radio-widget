import React, { Fragment } from 'react';
import Logo from './Logo';
import { Link, useNavigate } from 'react-router-dom';

// is authenticated
import { isAuthenticated } from '../utils/isAuthenticate';

// cookie
import Cookies from 'js-cookie';

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
                        {
                            isAuthenticated() &&
                            <Fragment>
                                <Link to='/'>Home</Link>
                                <Link to='/dashboard'>Dashboard</Link>
                            </Fragment>
                        }
                        {
                            isAuthenticated() ?
                            <button className='primary__btn' onClick={(e)=> {
                                Cookies.remove("token")
                                navigate('/',{ replace: true })
                            } }>Log Out</button> :
                            <button className='primary__btn' onClick={()=>navigate("/login",{ replace: true })}>Log In</button>
                        }
                    </div>
                </div>
            </nav>
        </Fragment>
    );
};

export default Navbar;