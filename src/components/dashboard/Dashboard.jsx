import React from 'react';
import CreateNewStation from './CreateNewStation';
import style from './dashboard.module.css';
import Sidebar from './Sidebar';
import ManageStation from './ManageStation';

const Dashboard = () => {
    return (
        <section className={style.dashboard__main_container}>
            <div className={style.sidebar__container}> <Sidebar/> </div>
            <div className={style.dashboard__content_container}>
            {/* <CreateNewStation/> */}
            <ManageStation  />
            </div>
        </section>
    );
};

export default Dashboard;