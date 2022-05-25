import React, { FC, Fragment, useEffect, useState } from 'react';
import SectionTitle from '../shared/SectionTitle';
import style from "./manageStation.module.css";
import { IoCreateOutline, IoTrashSharp, IoCheckmarkDoneSharp } from "react-icons/io5";
import { fetchAllStation, deleteStation, updateStation } from '../utils/utils';

// helmet
import { Helmet } from 'react-helmet';

// interface
import { StationItem } from '../../types';

// selected station item interface - for edit
import { SelectedStationForEdit } from '../../types';

const ManageStation:FC = () => {

    const [allStation, setAllStation] = useState<StationItem[]>([]);
    const [selectedStation,setSelectedStation] = useState<SelectedStationForEdit>({ index: -1, _id: "", name: "", frequency: "" });
    const [loading,setLoading] = useState<boolean>(false);


    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedStation({
            ...selectedStation,
            [e.target.name]: e.target.value,
        });
      };


      const updateHandler = ()=>{

        // check data changed or not
        const stationItem = allStation[selectedStation?.index];

        if(
            stationItem?.name === selectedStation?.name && 
            stationItem?.frequency === selectedStation?.frequency 
        ){
            setSelectedStation({ index: -1, _id: "", name: "", frequency: "" })
        }else{
            const updatedData:{ name:string; frequency: number | string } = {
                name: selectedStation?.name,
                frequency: selectedStation?.frequency
            }

            // update new updated station data
            setLoading(true);
            updateStation(`radio/station/${selectedStation?._id}`,updatedData ,(updatedNewData) =>{
                const newAry = [...allStation];
                newAry.splice(selectedStation?.index, 1, updatedNewData);
                setAllStation(newAry);
                setLoading(false);
                setSelectedStation({ index: -1, _id: "", name: "", frequency: "" })
            })
        }
      }

    const deleteHandler = (id:string) =>{
        setLoading(true);
        deleteStation(`radio/station/${id}`,(data)=>{
            setLoading(false);
            const remainingStation = allStation?.filter(item => item?._id !== data._id );
            setAllStation(remainingStation);
            alert(`Successfully deleted ${data?.name} station name`);
        })
    }



      useEffect(()=>{
        setLoading(true);
        fetchAllStation('radio/station',data => {
            setLoading(false);
            setAllStation(data);
        });
    },[])


    const stationListUI = allStation?.map((item, index) =>(
        <div className={style.row__container} key={item._id}>
            <p>{index + 1}</p>
            <p> { selectedStation?._id !== item._id ? item.name : <input type="text" value={selectedStation?.name} name="name" onChange={e => onChangeHandler(e)} /> } </p>
            <p> { selectedStation?._id !== item._id ? item.frequency : <input type="number" value={ selectedStation?.frequency } name="frequency" onChange={e => onChangeHandler(e)} /> } </p>
            <p className={style.manage__icon_container}>
                { selectedStation?._id !== item._id ? <IoCreateOutline onClick={()=> setSelectedStation({ index, ...item })} /> : <IoCheckmarkDoneSharp onClick={updateHandler} /> }
                <IoTrashSharp onClick={()=> deleteHandler(item._id)} />
            </p>
        </div>
    ))

    return (
        <Fragment>
            <Helmet>
                <title>Radio Widget - Manage Station</title>
            </Helmet>
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
        </Fragment>
    );
};

export default ManageStation;