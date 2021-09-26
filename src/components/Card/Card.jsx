import React from "react";

import './Card.css'


const Card = (props) => {
    const {name, age, expertArea, salary, image, city} = props.employee;
    return (
        <div className="col-4 custom-card my-2">
            <div className="card h-100">
                <div className="card-image">
                    <img src={image} className="card-img-top rounded-circle" alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Expertism: {expertArea}</p>
                    <p className="card-text">Age: {age}</p>
                    <p className="card-text">City: {city}</p>
                    <p className="card-text">Salary: $ {salary}</p>
                    <button className="btn-select"
                            onClick = {()=>props.handleSelectEmployee(salary)}
                            
                    >Select</button>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Last updated 3 mins ago</small>
                </div>
            </div>
        </div>
    );
};

export default Card;