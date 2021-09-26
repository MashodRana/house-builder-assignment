import React from "react";

import './SideCard.css'

const SideCard = (props) => {
    // Destructuring..
    const { name, expertArea, salary, image } = props.employee;
    return (
        <div className="side-card">
            <div className="side-card-content col d-flex p-1 my-2">
                <img src={image} className="rounded-circle" alt="..." />
                <div className="px-2">
                    <p className="card-text">
                        {name}
                        <br />
                        <small className="text-muted">
                            {expertArea} | $ {salary}
                        </small></p>
                </div>
            </div>
        </div>
    );
};

export default SideCard;