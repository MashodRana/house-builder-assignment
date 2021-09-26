import React from "react";

import './Cart.css';


const Cart = (props) => {
    return (
        <div className="cart my-5 p-2">
            <h4>Employees Added: {props.employeeAdded}</h4>
            <h4>Total Cost : $ {props.totalCost}</h4>
            <button>Finalize</button>

        </div>
    );
};

export default Cart;