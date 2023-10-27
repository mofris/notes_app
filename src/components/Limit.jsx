import React from "react";

const Limit = ({ limit }) => {
    return (
        <p className="note-input__title__char-limit">
            Character left: {50 - limit}
        </p>
    );
};

export default Limit;