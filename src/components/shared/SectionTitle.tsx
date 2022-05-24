import React, { FC } from 'react';
import style from './sectionTitle.module.css';

interface SectionTitleProps{
    title: string;
}

const SectionTitle:FC<SectionTitleProps> = ({title}) => {
    return (
        <div className={style.sectionTitle__container}>
            <h2>{title}</h2>
            <hr/>
        </div>
    );
};

export default React.memo(SectionTitle);