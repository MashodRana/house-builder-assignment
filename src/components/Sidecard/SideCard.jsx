import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserMinus } from '@fortawesome/free-solid-svg-icons'


import './SideCard.css'

const SideCard = (props) => {
    // Destructuring..
    const { name, expertArea, salary, image } = props.employee;

    const rmIcon = <FontAwesomeIcon icon={faUserMinus} />

    return (
        <div className="side-card">
            <div className="side-card-content col p-1 my-2 d-flex justify-content-between">
                <img src={image} className="rounded-circle" alt="..." />
                <div className="px-2">
                    <p className="card-text">
                        {name}
                        <br />
                        <small className="text-muted">
                            {expertArea} | $ {salary}
                        </small></p>
                </div>
                <button className="btn text-danger"
                onClick = {()=>props.removeEmployee(props.employee)}
                >{rmIcon}</button>
            </div>
        </div>
    );
};

export default SideCard;