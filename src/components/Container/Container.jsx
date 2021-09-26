import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";

import './Container.css'


const Container = () => {

    // state for loaded data.
    const [data, setData] = useState([]);

    // State for number of employee added.
    const [employeeAdded, setEmployeeAdded] = useState(0);

    // State for total cost calculation.
    const [totalCost, setTotalCost] = useState(0);


    // Load employess data from the json file.
    useEffect(() => {
        fetch('./man-power.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    // Button handler
    const handleSelectEmployee = (salary) => {
        // Update total cost and number of selected employee after clicked the button.
        setTotalCost(totalCost + salary)
        setEmployeeAdded(employeeAdded + 1);
    }

    return (
        <div className='main-container container my-5'>
            {/* body data container */}
            <div className="row">

                {/* available employee code starts from here */}
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
                {/* available employee code ends here */}

                {/* Cart code starts from here */}
                <div className="cart-container col-4">
                    <Cart
                        totalCost={totalCost}
                        employeeAdded={employeeAdded}
                    ></Cart>
                </div>
                {/* Cart code ends here */}

            </div>
        </div>
    );
};

export default Container;