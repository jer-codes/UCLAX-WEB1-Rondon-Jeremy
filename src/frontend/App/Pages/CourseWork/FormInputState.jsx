//components
import Input from "@App/Core/components/Form/Inputs/Input";
import styled from "styled-components";
import { useState } from "react";

//styles
const FormInputStateStyled = styled.div`
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.primary.default};
`;
// component
const FormInputState = () => {
    const [value, setValue] = useState("");
    const formInput = {
        id: "userName",
        labelText: "Name",
        type: "text",
        value: value,
    };

    const onChange = (e) => {
        setValue(e.target.value);
    };

    console.log(value);

    return (
        <div>
            <h2>Form Input State</h2>
            <FormInputStateStyled>
                <Input formInput={formInput} onChange={onChange} />
            </FormInputStateStyled>
        </div>
    );
};

export default FormInputState;
