import React, { Fragment, useState } from 'react';
import style from './card.module.css';

import { station } from '../../station';
import StationList from './StationList';

import SelectedStationItem from './SelectedStationItem';

const Card = () => {

    const [selectedStation,setSelectedStation] = useState(null);

    const stationItem = station.map(item => {
        if(selectedStation?.id === item.id){
            return <SelectedStationItem key={item.id} data={selectedStation} setSelectedStation={setSelectedStation} />
        }
        
        return <StationList data={item} key={item.id} setSelectedStation={setSelectedStation} />
    })

    return (
        <section className={style.card__container}>

            {/* station title */}
            <div className={style.card__title_container}>
                <div className={style.card__title_sub_container}>
                    <img src="/asserts/icon/back-arrow.png" alt="Back Arrow"/>
                    <h2>Stations</h2>
                    <img src="/asserts/icon/switch.png" alt="switch"/>
                 </div>
            </div>

            {/* station list */}
            { stationItem }

            {/* active station UI */}
            {
                selectedStation &&
                <div className={style.active__station_container}>
                    <p>Currently Playing</p>
                    <p>{selectedStation?.name}</p>
                </div>
            }
        </section>
    );
};

export default Card;