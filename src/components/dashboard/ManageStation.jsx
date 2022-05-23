import React, { useEffect, useState } from 'react';
import SectionTitle from '../shared/SectionTitle';
import style from "./manageStation.module.css";
import { IoCreateOutline, IoTrashSharp } from "react-icons/io5";
import { fetchAllStation, deleteStation } from '../utils/utils';

const ManageStation = () => {

    const [allStation, setAllStation] = useState([]);
    // const [selectedStation,setSelectedStation] = useState(null);
    const [loading,setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        fetchAllStation('radio/station',data => {
            setLoading(false);
            setAllStation(data);
        });
    },[])

    const deleteHandler = id =>{
        setLoading(true);
        deleteStation(`radio/station/${id}`,(data)=>{
            setLoading(false);
            const remainingStation = allStation?.filter(item => item?._id !== data._id );
            setAllStation(remainingStation);
            alert(`Successfully deleted ${data?.name} station name`);
        })
    }

    const stationListUI = allStation?.map((item, index) =>(
        <div className={style.row__container} key={item._id}>
            <p>{index + 1}</p>
            <p> { item.name } </p>
            <p> { item.frequency } </p>
            <p className={style.manage__icon_container}>
                <IoCreateOutline/>
                <IoTrashSharp onClick={()=> deleteHandler(item._id)} />
            </p>
        </div>
    ))
    // <p> <input type="text" /> </p>
    // <p> <input type="number" /> </p>
    return (
        <section>
            <SectionTitle title="Manage Station" />

            {/* Station List */}

            <div className={style.station__list__container}>
                <div className={style.row__container}>
                  <p>#</p>
                  <p>Station Name</p>
                  <p>Frequency</p>
                  <p>Action</p>
                </div>
                {/*  */}
                { loading ? <h4> Loading... </h4> : stationListUI }
                {/*  */}
            </div>
        </section>
    );
};

export default ManageStation;