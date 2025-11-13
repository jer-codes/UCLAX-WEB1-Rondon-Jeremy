import { actionTypes } from "./actionTypes";
export const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_FORM_INPUTS: {
            return {
                ...state,
                formInputs: action.formInputs,
            };
        }
        default: {
            return { ...state };
        }
    }
};
