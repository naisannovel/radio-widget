import React from 'react';
import style from './input.module.css';

// input props interface
import { InputProps } from '../../types';

const Input:React.FC<InputProps> = ({ name, value, placeholder, changeHandler }) => {
    return <input type="text" name={name} value={value} onChange={e => changeHandler(e)} placeholder={ placeholder } className={style.input__box} required />
};

export default Input;