import React from "react";
import "./Body.css";

const Body = props => (
    <div className='row flex-grow-1 d-flex justify-content-start content-row'>

        {props.children}
            
    </div>
);

export default Body;
