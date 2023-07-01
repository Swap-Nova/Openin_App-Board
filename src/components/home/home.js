import React from 'react';
import './home.css';
import Dashboard from '../../assets/icons/dashboard.svg';
import Transactions from '../../assets/icons/transactions.svg';
import Schedules from '../../assets/icons/schedules.svg';
import Users from '../../assets/icons/users.svg';
import Settings from '../../assets/icons/settings.svg';
import Search from '../../assets/icons/search.svg';
import Notification from '../../assets/icons/notification.svg';
import Profile from '../../assets/image/person.svg';
import Revenue from '../../assets/icons/revenue.svg';
import Transactions2 from '../../assets/icons/transactions2.svg';
import Likes from '../../assets/icons/likes.svg';
import Users2 from '../../assets/icons/users2.svg';

import PieChart from './pie-chart/pieChart';
import Today from './today/today';
import LineGraph from './line-graph/LineGraph';

function Home(){
    return(
        <>
            <div id="left-box">
                <h1 className='company-name-new'>Board.</h1>

                <div id='img-text-container'>

                    <div className='dashboard-container'>
                        {/* eslint-disable-next-line jsx-a11y/alt-text */}
                        <img className="dashboard-img" src={Dashboard}></img>
                        <p className="dashboard-text">Dashboard</p>
                    </div>

                    <div className='transaction-container'>
                        {/* eslint-disable-next-line jsx-a11y/alt-text */}
                        <img className="transaction-img" src={Transactions}></img>
                        <p className="transaction-text">Transactions</p>
                    </div>

                    <div className='schedule-container'>
                        {/* eslint-disable-next-line jsx-a11y/alt-text */}
                        <img className="schedule-img" src={Schedules}></img>
                        <p className="schedule-text">Schedules</p>
                    </div>

                    <div className='users-container'>
                        {/* eslint-disable-next-line jsx-a11y/alt-text */}
                        <img className="users-img" src={Users}></img>
                        <p className="users-text">Users</p>
                    </div>

                    <div className='settings-container'>
                        {/* eslint-disable-next-line jsx-a11y/alt-text */}
                        <img className="settings-img" src={Settings}></img>
                        <p className="settings-text">Settings</p>
                    </div>

                </div>

                <div id="left-bottom-container">
                    <div className='help-contact-container'>
                        <p className='help-text'>Help</p>
                        <p className='contact-text'>Contact Us</p>
                    </div>
                </div>
            </div>

            <div id="right-box">
                <h1 className='dashboard-title'>Dashboard</h1>

                <div id="search-bar-container">
                    <div className='search-box'>
                        <form action="/home">
                            <input className="search-input" type="text" placeholder="Search..." name="search" />
                            <button className="search-button" type="submit">
                                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                                <img className='search-icon' src={Search} />
                            </button>
                        </form>
                    </div>
                </div>

                <div className='notification-profile'>
                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                    <img className='notification-icon' src={Notification} />
                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                    <img className='profile-icon' src={Profile} />
                </div>

                <div id="info-container">

                    <div className='revenue-container'>
                        {/* eslint-disable-next-line jsx-a11y/alt-text */}
                        <img className="revenue-icon" src={Revenue}></img>
                        <p className='revenue-heading'>Total Revenues</p>
                        <p className='revenue-amount'>$2,129,430</p>
                    </div>

                    <div className='transaction2-container'>
                        {/* eslint-disable-next-line jsx-a11y/alt-text */}
                        <img className="transaction2-icon" src={Transactions2}></img>
                        <p className='transaction2-heading'>Total Transactions</p>
                        <p className='transaction2-amount'>1,520</p>
                    </div>

                    <div className='likes-container'>
                        {/* eslint-disable-next-line jsx-a11y/alt-text */}
                        <img className="likes-icon" src={Likes}></img>
                        <p className='likes-heading'>Total Likes</p>
                        <p className='likes-amount'>9,721</p>
                    </div>

                    <div className='users2-container'>
                        {/* eslint-disable-next-line jsx-a11y/alt-text */}
                        <img className="users2-icon" src={Users2}></img>
                        <p className='users2-heading'>Total Users</p>
                        <p className='users2-amount'>892</p>
                    </div>

                </div>

                <div id="line-graph-container">
                    <LineGraph />
                </div>

                <div id="pie-chart-container">
                    <PieChart />
                </div>

                <div id="today-container">
                    <Today />
                </div>
            </div>
        </>
    );
}

export default Home;