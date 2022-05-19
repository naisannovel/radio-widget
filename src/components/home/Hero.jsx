import React, { Fragment, useState } from 'react';
import style from './hero.module.css';

import { station } from '../../station';
import StationList from './StationList';

const Hero = () => {

    const [selectedStation,setSelectedStation] = useState(null);

    const stationItem = station.map(item => {
        if(selectedStation === item.id){
            return <h1 key={item.id} onClick={()=> setSelectedStation(null)}>Hello world</h1>
        }

        return <StationList data={item} key={item.id} setSelectedStation={setSelectedStation} />
    })

    return (
        <section className={style.hero__container}>

            {/* station title */}
            <div className={style.hero__title_container}>
                <div className={style.hero__title_sub_container}>
                    <img src="/asserts/icon/back-arrow.png" alt="Back Arrow"/>
                    <h2>Stations</h2>
                    <img src="/asserts/icon/switch.png" alt="switch"/>
                 </div>
            </div>

            {/* station list */}
            { stationItem }

            {/* active station UI */}
            <div className={style.active__station_container}>
                <p>Currently Playing</p>
                <p>Dribble FM</p>
            </div>
        </section>
    );
};

export default Hero;