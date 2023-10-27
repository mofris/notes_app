import React from "react";
import Searching from "../components/Searching";

const Header = ({ searching }) => {
    return (
        <div className="note-app__header">
            <h1>My Notes</h1>
            <Searching searching={searching} />
        </div>
    )
}

export default Header;