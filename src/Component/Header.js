import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Header() {

    return (

        <div>

            <header>

                <Navbar />

                <Link to='/' className="header_title"><h1>MCUwiki</h1></Link>   

            </header>

        </div>

    )

}

export default Header;