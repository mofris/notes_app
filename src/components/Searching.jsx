import React from "react";

const Searching = ({ searching }) => {

    const searchingChange = (event) => {
        searching(event.target.value);
    }

    return (
        <div className="note-search">
            <input
                type="text"
                placeholder="Search for notes..."
                onChange={searchingChange}
            />
        </div>
    )
}

export default Searching;