import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";

import './Container.css'


const Container = () => {
    const [data, setData] = useState([]);
    const [employeeAdded, setEmployeeAdded] = useState(0);
    const [totalCost, setTotalCost] = useState(0);

    useEffect(() => {
        fetch('./man-power.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    const handleSelectEmployee = (salary) => {
        setTotalCost(totalCost + salary)
        setEmployeeAdded(employeeAdded + 1);
    }

    return (
        <div className='main-container container my-5'>
            <div className="row">
                <div className="employee-container col-8">
                    <h1 className="text-center">Available <span>Employess</span></h1>
                    <div className="row">
                        {
                            data.map(employee => <Card
                                employee={employee}
                                handleSelectEmployee={handleSelectEmployee}
                                key={employee.id}
                            ></Card>)
                        }
                    </div>


                </div>
                <div className="cart-container col-4">
                    <Cart
                        totalCost={totalCost}
                        employeeAdded={employeeAdded}
                    ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Container;