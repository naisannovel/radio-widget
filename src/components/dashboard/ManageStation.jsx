import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import style from "./manageStation.module.css";
import { IoCreateOutline, IoTrashSharp } from "react-icons/io5";

const ManageStation = () => {

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
                <div className={style.row__container}>
                  <p>1</p>
                  <p> <input type="text" /> </p>
                  <p> <input type="number" /> </p>
                  <p className={style.manage__icon_container}>
                      <IoCreateOutline/>
                      <IoTrashSharp/>
                  </p>
                </div>
                {/*  */}
            </div>
        </section>
    );
};

export default ManageStation;