import React from "react";
import "./Wrapper.css";

const Wrapper = props => <div className="container-fluid d-flex h-100 flex-column">{props.children}</div>;

export default Wrapper;
