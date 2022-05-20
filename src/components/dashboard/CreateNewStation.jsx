import React, { Fragment } from 'react';
import Input from '../shared/Input';
import SectionTitle from '../shared/SectionTitle';
import style from './createNewStation.module.css';

const CreateNewStation = () => {
    return (
        <Fragment>
            <SectionTitle title="Create New Station" />

            <form className={style.form__container}>
                <Input placeholder="Station Name" />
                <br/>
                <Input placeholder="Frequency" />
                <br/>
                <button type='submit' className='primary__btn'>Add</button>
            </form>
        </Fragment>
    );
};

export default CreateNewStation;