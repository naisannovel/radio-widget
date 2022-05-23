import React from 'react';
import style from './input.module.css';

const Input = ({ name, value, placeholder, changeHandler }) => {
    return <input type="text" name={name} value={value} onChange={e => changeHandler(e)} placeholder={ placeholder } className={style.input__box} />
};

export default Input;