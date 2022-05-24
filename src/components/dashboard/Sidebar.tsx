import React from 'react';
import style from './sidebar.module.css'
import { IoCreateOutline, IoListSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Sidebar:React.FC = () => {
    return (
        <section className={style.sidebar__container}>
            <div className={style.sidebar__nav_container}>
                <Link to="create-station">
                    <IoCreateOutline/>
                    <span>Create Station</span>
                </Link>
                <Link to="manage-station">
                    <IoListSharp/>
                    <span>Manage Station</span>
                </Link>
            </div>
        </section>
    );
};

export default Sidebar;