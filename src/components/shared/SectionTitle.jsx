import React from 'react';
import style from './sectionTitle.module.css';

const SectionTitle = ({title}) => {
    return (
        <div className={style.sectionTitle__container}>
            <h2>{title}</h2>
            <hr/>
        </div>
    );
};

export default SectionTitle;