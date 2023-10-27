import React from "react";

const DescInput = ({ formData, onDescChange }) => {
    return (
        <textarea
            className="note-input__body"
            type="text"
            name="noteDesc"
            placeholder="Your notes here ..."
            value={formData.noteDesc}
            onChange={onDescChange}
        ></textarea>
    );
};

export default DescInput;