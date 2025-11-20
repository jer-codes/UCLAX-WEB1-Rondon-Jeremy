import Button from "@Core/components/Form/Button";
import { useUniversalForm } from "@Core/components/Form/UniversalForm/context/useUniversalForm.js";

// component
const SubmitButton = () => {
    const { formStatus, submitText } = useUniversalForm();

    const text = formStatus === "processing" ? "Submitting..." : submitText;
    return <Button type="submit">{text}</Button>;
};

export default SubmitButton;
