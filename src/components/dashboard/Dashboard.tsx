import React from 'react';
import style from './dashboard.module.css';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Dashboard:React.FC = () => {
    return (
        <section className={style.dashboard__main_container}>
            <div className={style.sidebar__container}> <Sidebar/> </div>
            <div className={style.dashboard__content_container}>
                <Outlet/>
            </div>
        </section>
    );
};

export default Dashboard;