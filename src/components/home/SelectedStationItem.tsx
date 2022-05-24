import React, { FC, Fragment } from 'react';
import styleList from './stationList.module.css';
import style from './selectedStationItem.module.css';

// interface
import { StationItem } from './Card';

export interface SelectedStationItemProps{
    data: StationItem;
    setSelectedStation: (selectedStation: null) => void;
}

const SelectedStationItem:FC<SelectedStationItemProps> = ({ data, setSelectedStation }) => {
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