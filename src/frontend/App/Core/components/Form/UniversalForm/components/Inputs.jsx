import { useUniversalForm } from "@Core/components/Form/UniversalForm/context/useUniversalForm.js";

import Input from "@Core/components/Form/Inputs/Input.jsx";
import TextArea from "@Core/components/Form/Inputs/TextArea.jsx";

// component
const Inputs = () => {
    const { formInputs, setFormInput } = useUniversalForm();

    return formInputs.map((formInput) => {
        const InputComponent = formInput.type === "textarea" ? TextArea : Input;

        const onChange = (e) => {
            const value = e.target.value;
            setFormInput({
                ...formInput,
                value: value,
            });
        };
        return (
            <InputComponent
                key={formInput.id}
                formInput={formInput}
                onChange={onChange}
            />
        );
    });
};

export default Inputs;
