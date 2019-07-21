import React from "react";
import "./Content.css";

const Content = props => (
    <div className='col _overflow-auto'>
        {props.children}
    </div>
);

export default Content;
