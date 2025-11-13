import { actionTypes } from "./actionTypes";

export const createActions = (state, dispatch) => {
    const setFormInputs = (formInputs) => {
        dispatch({
            type: actionTypes.SET_FORM_INPUTS,
            formInputs,
        });
    };

    const setFormInput = (formInput) => {
        const formInputs = state.formInputs.map((input) => {
            return formInput.id === input.id ? formInput : input;
        });
        setFormInputs(formInputs);
    };

    return {
        setFormInputs,
        setFormInput,
    };
};
