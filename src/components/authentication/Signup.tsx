import React, { Fragment, useState } from 'react';
import Input from '../shared/Input';
import SectionTitle from '../shared/SectionTitle';
import style from './auth.module.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/isAuthenticate';

import { userAuth } from '../utils/utils';

// helmet
import { Helmet } from 'react-helmet';

// interface
import { AuthFormData } from './Login';

const Signup = () => {

    const [formData, setFormData] = useState<AuthFormData | object>({});
    const navigate = useNavigate();

    const redirectUser = () => {
        if (isAuthenticated()) return <Navigate to="/" />
    }

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    };

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        userAuth('auth/signup',formData, ()=> navigate('/', { replace: true }));
        setFormData({})
    }

    return (
        <Fragment>
            <Helmet>
                <title>Radio Widget - Sign Up</title>
            </Helmet>
            { redirectUser() }
            <SectionTitle title="Sign Up" />

            <form className={style.auth__form} onSubmit={e => submitHandler(e)}>
                <Input name="name" changeHandler={onChangeHandler} placeholder="Enter Your Name" />
                <br/>
                <Input name="email" changeHandler={onChangeHandler} placeholder="Enter Your Email" />
                <br/>
                <Input name="password" changeHandler={onChangeHandler} placeholder="Enter Your Password" />
                <br/>
                <button type='submit' className='primary__btn'>Sign Up</button>
            </form>
            <span className={style.auth__any__account}>Have any account? <Link to="/login">Log In</Link></span>
        </Fragment>
    );
};

export default Signup;