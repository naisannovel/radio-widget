import React, { Fragment } from 'react';
import style from './stationList.module.css'

const StationList = ({ data, setSelectedStation }) => {
    return (
        <Fragment>
            <div className={style.list__item_container} onClick={()=>setSelectedStation(data)}>
                <div className={style.list__item_sub_container}>
                    <p> { data.name } </p>
                    <p> { data.frequency } </p>
                </div>
            </div>
            <hr/>
        </Fragment>
    );
};

export default StationList;