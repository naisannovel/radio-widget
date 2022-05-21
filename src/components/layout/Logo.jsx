import React from 'react';
import style from './logo.module.css';
import { useNavigate } from 'react-router-dom';

const Logo = () => {

    const navigate = useNavigate();

    return (
        <section className={style.logo__container} onClick={()=> navigate("/",{ replace: true })}>
            <img src="/asserts/images/logo.png" alt="logo"/>
            <h3>Radio</h3>
        </section>
    );
};

export default Logo;