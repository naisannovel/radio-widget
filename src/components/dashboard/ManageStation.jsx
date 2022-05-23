import React, { useEffect, useState } from 'react';
import SectionTitle from '../shared/SectionTitle';
import style from "./manageStation.module.css";
import { IoCreateOutline, IoTrashSharp, IoCheckmarkDoneSharp } from "react-icons/io5";
import { fetchAllStation, deleteStation, updateStation } from '../utils/utils';

const ManageStation = () => {

    const [allStation, setAllStation] = useState([]);
    const [selectedStation,setSelectedStation] = useState(null);
    const [loading,setLoading] = useState(false);


    const onChangeHandler = (e) => {
        setSelectedStation({
          ...selectedStation,
          item:{
              ...selectedStation.item,
            [e.target.name]: e.target.value,
          }
        });
      };


      const updateHandler = ()=>{

        // check data changed or not
        const stationItem = allStation[selectedStation?.index];

        if(
            stationItem?.name === selectedStation?.item.name && 
            stationItem?.frequency === selectedStation?.item.frequency 
        ){
            setSelectedStation(null)
        }else{
            const updatedData = {
                name: selectedStation?.item.name,
                frequency: selectedStation?.item.frequency
            }

            // update new updated station data
            setLoading(true);
            updateStation(`radio/station/${selectedStation?.item._id}`,updatedData ,(updatedNewData) =>{
                const newAry = [...allStation];
                newAry.splice(selectedStation?.index, 1, updatedNewData);
                setAllStation(newAry);
                setLoading(false);
                setSelectedStation(null)
            })
        }
      }

    const deleteHandler = id =>{
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
            <p> { selectedStation?.item._id !== item._id ? item.name : <input type="text" value={selectedStation?.item.name} name="name" onChange={e => onChangeHandler(e)} /> } </p>
            <p> { selectedStation?.item._id !== item._id ? item.frequency : <input type="number" value={ selectedStation?.item.frequency } name="frequency" onChange={e => onChangeHandler(e)} /> } </p>
            <p className={style.manage__icon_container}>
                { selectedStation?.item._id !== item._id ? <IoCreateOutline onClick={()=> setSelectedStation({ index, item })} /> : <IoCheckmarkDoneSharp onClick={updateHandler} /> }
                <IoTrashSharp onClick={()=> deleteHandler(item._id)} />
            </p>
        </div>
    ))

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