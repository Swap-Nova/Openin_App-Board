import React from "react";
import './today.css';

function Today(){
    return(
        <>
            <div id="today-schedule-container">
                <div className="complete-schedule-container">
                    <h3 className="today-schedule-heading">Today's schedule</h3>

                    <div className="line-1"></div>
                    <div className="supplier-content">
                        <div className="content-101">
                            <p className="content-104">Meeting with suppliers from Kuta Bali</p>
                            <p className="content-105">14.00-15.00</p>
                            <p className="content-106">at Sunset Road, Kuta, Bali </p>
                        </div>
                    </div>

                    <div className="line-2"></div>
                    <div className="operations-content">
                        <div className="content-102">
                            <p className="content-107">Check operation at Giga Factory 1</p>
                            <p className="content-108">18.00-20.00</p>
                            <p className="content-109">at Central Jakarta </p>
                        </div>
                    </div>

                    <p className="content-103">See All</p>
                </div>
            </div>
        </>
    )
}

export default Today;