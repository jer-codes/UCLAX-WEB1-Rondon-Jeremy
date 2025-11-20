import { useReducer, useMemo } from "react";
import PropTypes from "prop-types";

//context
import UniversalFormContext from "./context";
import { reducer } from "./context/reducer";

import FormTemplate from "./components/FormTemplate";
// component
const UniversalForm = ({
    formInputs,
    apiEndpoint,
    trackingId,
    submitText = "submit",
}) => {
    const stateProps = {
        formInputs,
        apiEndpoint,
        trackingId,
        submitText,
        formStatus: "idle",
        globalMessage: { type: "none", text: "" },
    };

    const [state, dispatch] = useReducer(reducer, stateProps);

    const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

    return (
        <UniversalFormContext.Provider value={value}>
            <FormTemplate />
        </UniversalFormContext.Provider>
    );
};

export default UniversalForm;

// prop-types
UniversalForm.propTypes = {
    formInputs: PropTypes.array.isRequired,
    apiEndpoint: PropTypes.string.isRequired,
    trackingId: PropTypes.string.isRequired,
    submitText: PropTypes.string,
};
