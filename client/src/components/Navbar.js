import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return ( <
        nav className = "navbar navbar-dark bg-dark navbar-expand-lg" >
        <
        Link to = "/"
        className = "navbar-brand" >
        EmployeeTracker <
        /Link> <
        div className = "navbar-collapse" >
        <
        ul className = "navbar-nav mr-auto" >
        <
        li className = "navbar-item" >
        <
        Link to = "/"
        className = "nav-link" >
        JobList <
        /Link> <
        /li> <
        li className = "navbar-item" >
        <
        Link to = "/create"
        className = "nav-link" >
        CreateJob <
        /Link> <
        /li> <
        li className = "navbar-item" >
        <
        Link to = "/users"
        className = "nav-link" >
        CreateEmployee <
        /Link> <
        /li> <
        /ul> <
        /div> <
        /nav>
    );
};

export default Navbar;