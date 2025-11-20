//components
import { useUniversalForm } from "@Core/components/Form/UniversalForm/context/useUniversalForm.js";

// component
import styled from "styled-components";

//styles
const FormStyled = styled.form`
    padding: 20px 30px;
    background-color: ${({ theme }) => theme.colors.primary.medium};
`;
const Form = ({ children }) => {
    const { formInputs, onSubmit, formStatus } = useUniversalForm();
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formInputs);
    };

    if (formStatus === "submitted") return null;

    return <FormStyled onSubmit={handleSubmit}>{children}</FormStyled>;
};

export default Form;

import PropTypes from "prop-types";

// prop-types
Form.propTypes = {
    children: PropTypes.any,
};
