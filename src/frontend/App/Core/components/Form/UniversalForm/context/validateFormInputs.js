import { isEmailValid } from "@App/Core/utils";

export const validateFormInputs = (formInputs, actions) => {
    let isValid = true;

    const newFormInputs = formInputs.map((input) => {
        const { labelText, rules, value } = input;
        let errorMessage = "";

        if (rules.includes("required") && value.length === 0) {
            errorMessage = `${labelText} is required.`;
            isValid = false;
        } else if (rules.includes("email") && !isEmailValid(value)) {
            errorMessage = `${labelText} is not a valid email.`;
            isValid = false;
        }

        return {
            ...input,
            errorMessage: errorMessage,
        };
    });

    actions.setFormInputs(newFormInputs);

    return isValid;
};
