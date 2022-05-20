import React, { Fragment } from 'react';
import Input from '../shared/Input';
import SectionTitle from '../shared/SectionTitle';
import style from './auth.module.css';

const Signup = () => {
    return (
        <Fragment>
            <SectionTitle title="Sign Up" />

            <form className={style.auth__form}>
                <Input placeholder="Enter Your Name" />
                <br/>
                <Input placeholder="Enter Your Email" />
                <br/>
                <Input placeholder="Enter Your Password" />
                <br/>
                <button type='submit' className='primary__btn'>Sign Up</button>
            </form>
            <span className={style.auth__any__account}>Have any account? <a href="#">Log In</a></span>
        </Fragment>
    );
};

export default Signup;