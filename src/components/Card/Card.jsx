import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'


import './Card.css'


const Card = (props) => {

    // Dstructuring props
    const { name, age, expertArea, salary, image, city } = props.employee;

    // Icon for 'add to team' button
    const btnIcon = <FontAwesomeIcon icon={faUserPlus} />

    return (
        <div className="col-4 custom-card my-2">
            <div className="card h-100 custom-card-content">
                {/* Card image */}
                <div className="card-image p-3">
                    <img src={image} className="card-img-top rounded-circle" alt="..." />
                </div>

                {/* Card Information */}
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text text-muted">Expertism: {expertArea}
                        <br />
                        Age: {age}
                        <br />
                        City: {city}
                    </p>
                    <h6>Salary: $ {salary}</h6>

                    {/* Card button */}
                    <p className="text-center mt-3">
                        <button className="btn-select px-4 py-1 rounded"
                            onClick={() => props.handleSelectEmployee(salary)}

                        > {btnIcon} Add to Team</button>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Card;