import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

import './Container.css'


const Container = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('./man-power.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])


    return (
        <div className='main-container container border my-5'>
            <div className="row">
                <div className="employee-container col-8">
                    <h1>All employess</h1>
                    <div className="row">
                        {
                            data.map(employee => <Card 
                                employee={employee}
                                key={employee.id}
                                ></Card>)
                        }
                    </div>


                </div>
                <div className="cart-container col-4">
                    <h1>This is cart</h1>
                </div>
            </div>
        </div>
    );
};

export default Container;