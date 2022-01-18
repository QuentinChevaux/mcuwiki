import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

    return (

        <div>

            <nav className="flex_center">

                <li><Link to ='/' className="navbar_link">Home</Link></li>

                <li><Link to='/lexique' className="navbar_link">Lexique</Link></li>

                <li><Link to='/films' className="navbar_link">Films</Link></li>

                <li><Link to='/series' className="navbar_link">Series</Link></li>

            </nav>

        </div>

    )

}

export default Navbar;