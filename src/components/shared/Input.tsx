import React from 'react';
import style from './input.module.css';

interface InputProps{
    name: string;
    value?: string | number;
    placeholder: string;
    changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input:React.FC<InputProps> = ({ name, value, placeholder, changeHandler }) => {
    console.log(`rendered by ${name}`);
    return <input type="text" name={name} value={value} onChange={e => changeHandler(e)} placeholder={ placeholder } className={style.input__box} required />
};

export default Input;