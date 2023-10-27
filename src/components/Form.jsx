import React from "react";
import Limit from "./Limit";
import TitleInput from "./TitleInput";
import DescInput from "./DescInput";
import AddButton from "./AddButton";

const Form = ({ formData, onTitleChange, onDescChange, onSubmitForm }) => {
    console.log(formData.noteDescLength)
    return (
        <form onSubmit={onSubmitForm}>
            <Limit limit={formData.noteDescLength} />
            <TitleInput formData={formData} onTitleChange={onTitleChange} />
            <DescInput formData={formData} onDescChange={onDescChange} />
            <AddButton />
        </form>
    );
};

export default Form;