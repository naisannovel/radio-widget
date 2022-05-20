import React from 'react';
import style from './sidebar.module.css'
import { IoCreateOutline, IoListSharp } from "react-icons/io5";

const Sidebar = () => {
    return (
        <section className={style.sidebar__container}>
            <div className={style.sidebar__nav_container}>
                <a href="#">
                    <IoCreateOutline/>
                    <span>Create Station</span>
                </a>
                <a href="#">
                    <IoListSharp/>
                    <span>Manage Station</span>
                </a>
            </div>
        </section>
    );
};

export default Sidebar;