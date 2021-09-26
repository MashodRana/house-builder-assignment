import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";
import SideCard from "../Sidecard/SideCard";

import './Container.css'


const Container = () => {

    const [btnDisable, setBtnDisable] = useState(false);

    // state for loaded data.
    const [data, setData] = useState([]);

    // State for number of employee added.
    const [employeeAdded, setEmployeeAdded] = useState(0);

    // State for total cost calculation.
    const [totalCost, setTotalCost] = useState(0);

    // State to store added employee
    const [teamList, setTeamList] = useState([]);


    // Load employess data from the json file.
    useEffect(() => {
        fetch('./man-power.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    // Button handler
    const handleSelectEmployee = (employee) => {
        // Update total cost and number of selected employee after clicked the button.

        // Check whether the employee is already added or not.
        let flag = true;
        for (const emp of teamList) {
            if (employee.id === emp.id) {
                flag = false;
                break;
            }
        }


        if (flag) {
            // employee is not added.
            setTotalCost(totalCost + employee.salary)
            setEmployeeAdded(employeeAdded + 1);
            const employees = [...teamList, employee];
            setTeamList(employees);
        }




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
                                btnDisable={btnDisable}
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

                    <div className="added-employee">
                        {teamList.map(employee => <SideCard
                            employee={employee}
                            key={employee.id}
                        ></SideCard>)}
                    </div>
                </div>
                {/* Cart code ends here */}

            </div>
        </div>
    );
};

export default Container;