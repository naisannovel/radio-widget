import React, { FC, Fragment, useEffect, useState } from 'react';
import style from './card.module.css';
import StationList from './StationList';

import SelectedStationItem from './SelectedStationItem';
import { fetchAllStation } from '../utils/utils';

// helmet
import { Helmet } from 'react-helmet';

// station item interface
import { StationItem } from '../../types';

const Card:FC = () => {

    const [allStation, setAllStation] = useState<StationItem[]>([]);
    const [selectedStation,setSelectedStation] = useState<StationItem | null>(null);
    const [loading,setLoading] = useState<boolean>(false);

    const stationItem = allStation.map(item => {
        if(selectedStation?._id === item._id){
            return <SelectedStationItem key={item._id} data={selectedStation} setSelectedStation={setSelectedStation} />
        }
        return <StationList data={item} key={item._id} setSelectedStation={setSelectedStation} />
    })

    useEffect(()=>{
        setLoading(true);
        fetchAllStation('radio/station',(data:StationItem[]) => {
            setLoading(false);
            setAllStation(data);
        });
    },[])
    
    return (
        <Fragment>
            <Helmet>
                <title>Radio widget - Home</title>
            </Helmet>
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
                { loading ? <h4>Loading...</h4> : stationItem }

                {/* active station UI */}
                {
                    selectedStation &&
                    <div className={style.active__station_container}>
                        <p>Currently Playing</p>
                        <p>{selectedStation?.name}</p>
                    </div>
                }
            </section>
        </Fragment>
    );
};

export default Card;