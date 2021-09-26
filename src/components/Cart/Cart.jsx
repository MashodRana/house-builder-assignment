import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faUsers, faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons'

import './Cart.css';


const Cart = (props) => {
    const employeeIcon = <FontAwesomeIcon icon={faUsers} />
    const costIcon = <FontAwesomeIcon icon={faMoneyBillAlt} />

    return (
        <div className="cart my-5 p-4">
            <h5>{employeeIcon} Employees Added:  {props.employeeAdded}</h5>
            <h5>{costIcon} Total Cost : $ {props.totalCost}</h5>
            <button className="rounded mt-4 px-4 py-1 rounded">Finalize</button>

        </div>
    );
};

export default Cart;