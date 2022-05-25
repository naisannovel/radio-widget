import React, { Fragment, useState } from 'react';
import Input from '../shared/Input';
import SectionTitle from '../shared/SectionTitle';
import style from './auth.module.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';

// icons
import { IoLogoGoogle } from "react-icons/io5";
import { isAuthenticated } from '../utils/isAuthenticate';
import { userAuth } from '../utils/utils';

// helmet
import { Helmet } from 'react-helmet';

export interface AuthFormData{
    name?: string;
    email?: string;
    password?: string | number
  }
  
const Login = () => {

    const [formData, setFormData] = useState<AuthFormData | object>({});
    const navigate = useNavigate();
    
    const google = () =>{
        window.open(`${process.env.REACT_APP_MAIN_API_URL}/auth/google`, "_self")
    }

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
        userAuth('auth/login',formData, ()=> navigate('/', { replace: true }));
        setFormData({})
    }

    return (
        <Fragment>
            <Helmet>
                <title>Radio Widget - Log In</title>
            </Helmet>
            { redirectUser() }
            <SectionTitle title="Log In" />

            <form className={style.auth__form} onSubmit={(e)=>submitHandler(e)}>
                <Input name="email" changeHandler={onChangeHandler} placeholder="Enter Your Email" />
                <br/>
                <Input name="password" changeHandler={onChangeHandler} placeholder="Enter Your Password" />
                <br/>
                <button type='submit' className='primary__btn'>Log In</button>
            </form>
            <span className={style.auth__any__account}>Or</span>
            <div className={style.auth__social__btn_container}>
                <button onClick={google}><IoLogoGoogle/> Login With Google</button>
            </div>
            <span className={style.auth__any__account}>Do not have any account? <Link to="/signup">Sign Up</Link></span>
        </Fragment>
    );
};

export default Login;