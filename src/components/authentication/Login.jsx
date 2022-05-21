import React, { Fragment } from 'react';
import Input from '../shared/Input';
import SectionTitle from '../shared/SectionTitle';
import style from './auth.module.css';
import { Link } from 'react-router-dom';

// icons
import { IoLogoGoogle, IoLogoFacebook } from "react-icons/io5";

const Login = () => {
    return (
        <Fragment>
            <SectionTitle title="Log In" />

            <form className={style.auth__form}>
                <Input placeholder="Enter Your Email" />
                <br/>
                <Input placeholder="Enter Your Password" />
                <br/>
                <button type='submit' className='primary__btn'>Log In</button>
            </form>
            <span className={style.auth__any__account}>Or</span>
            <div className={style.auth__social__icon_container}>
                <button><IoLogoGoogle/> Login With Google</button>
                <button><IoLogoFacebook/> Login With Facebook</button>
            </div>
            <span className={style.auth__any__account}>Do not have any account? <Link to="/signup">Sign Up</Link></span>
        </Fragment>
    );
};

export default Login;