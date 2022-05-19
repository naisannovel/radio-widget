import React from 'react';
import style from './logo.module.css';

const Logo = () => {
    return (
        <section className={style.logo__container}>
            <img src="/asserts/images/logo.png" alt="logo"/>
            <h3>Radio</h3>
        </section>
    );
};

export default Logo;