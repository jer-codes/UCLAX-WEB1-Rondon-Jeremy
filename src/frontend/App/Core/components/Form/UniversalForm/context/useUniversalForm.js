import { useContext } from "react";

import UniversalFormContext from "./index.js";
import { createActions } from "./actions.js";

import { validateFormInputs } from "./validateFormInputs.js";

export const useUniversalForm = () => {
    const { state, dispatch } = useContext(UniversalFormContext);
    const actions = createActions(state, dispatch);

    const onSubmit = (formInputs) => {
        actions.setFormStatus("processing");
        actions.setGlobalMessage({ type: "none", text: "" });

        const isValid = validateFormInputs(formInputs, actions);

        if (!isValid) {
            actions.setFormStatus("idle");
            return false;
        }

        const postData = Object.fromEntries(
            formInputs.map(({ id, value }) => [id, value])
        );
        console.log(postData);
        actions.setFormStatus("submitted");
        actions.setGlobalMessage({
            type: "success",
            text: "Your message has been sent successfully.",
        });
    };

    return {
        ...state,
        setFormInput: actions.setFormInput,
        onSubmit,
    };
};
