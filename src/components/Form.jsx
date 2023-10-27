import React from "react";
import Limit from "./Limit";
import TitleInput from "./TitleInput";
import DescInput from "./DescInput";
import AddButton from "./AddButton";

const Form = ({ formData, onTitleChange, onDescChange, onSubmitForm }) => {
    return (
        <form>
            <Limit limit={formData.noteDescLength} />
            <TitleInput formData={formData} onTitleChange={onTitleChange} />
            <DescInput formData={formData} onDescChange={onDescChange} />
            <AddButton onClick={onSubmitForm} />
        </form>
    );
};

export default Form;