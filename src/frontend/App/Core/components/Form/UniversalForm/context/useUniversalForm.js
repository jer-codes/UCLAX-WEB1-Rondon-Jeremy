import { useContext } from "react";

import UniversalFormContext from "./index.js";
import { createActions } from "./actions.js";

export const useUniversalForm = () => {
    const { state, dispatch } = useContext(UniversalFormContext);
    const actions = createActions(state, dispatch);

    return {
        ...state,
        setFormInput: actions.setFormInput,
    };
};
