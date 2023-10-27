import React from "react";

const TitleInput = ({ formData, onTitleChange }) => {
    return (
        <input
            className="note-input__title"
            type="text"
            name="title"
            placeholder="Title"
            required
            value={formData.title}
            onChange={onTitleChange}
        />
    );
};

export default TitleInput;