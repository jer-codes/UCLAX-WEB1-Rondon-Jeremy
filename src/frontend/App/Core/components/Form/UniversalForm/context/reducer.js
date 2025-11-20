import { actionTypes } from "./actionTypes";
export const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_FORM_INPUTS: {
            return {
                ...state,
                formInputs: action.formInputs,
            };
        }
        case actionTypes.SET_FORM_STATUS: {
            return {
                ...state,
                formStatus: action.formStatus,
            };
        }
        case actionTypes.SET_GLOBAL_MESSAGE: {
            return {
                ...state,
                globalMessage: action.globalMessage,
            };
        }
        default: {
            return { ...state };
        }
    }
};
