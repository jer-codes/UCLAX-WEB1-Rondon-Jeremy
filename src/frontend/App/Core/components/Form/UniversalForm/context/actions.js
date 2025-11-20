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

    const setFormStatus = (formStatus) => {
        dispatch({
            type: actionTypes.SET_FORM_STATUS,
            formStatus,
        });
    };

    const setGlobalMessage = (globalMessage) => {
        dispatch({
            type: actionTypes.SET_GLOBAL_MESSAGE,
            globalMessage,
        });
    };

    return {
        setFormInputs,
        setFormInput,
        setFormStatus,
        setGlobalMessage,
    };
};
