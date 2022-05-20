import React, { Fragment } from 'react';
import styleList from './stationList.module.css';
import style from './selectedStationItem.module.css';

const SelectedStationItem = ({ data, setSelectedStation }) => {
    return (
        <Fragment>
            <div className={styleList.list__item_container} onClick={()=>setSelectedStation(null)}>
                <div className={style.selected__station__item_container}>
                    <img src="/asserts/icon/minus.png" alt="minus"/>
                    <img src="/asserts/images/radio.jpg" alt="icon"/>
                    <img src="/asserts/icon/plus.png" alt="plus"/>
                </div>
                <div className={styleList.list__item_sub_container}>
                    <p> { data.name } </p>
                    <p> { data.frequency } </p>
                </div>
            </div>
            <hr/>
        </Fragment>
    );
};

export default SelectedStationItem;