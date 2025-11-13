// component
import UniversalForm from "@App/Core/components/Form/UniversalForm";
const Form = () => {
    const formInputs = [
        {
            id: "userName",
            type: "text",
            labelText: "Name",
            value: "",
        },
        {
            id: "userEmail",
            type: "text",
            labelText: "Email",
            value: "",
        },
        {
            id: "userMessage",
            type: "textarea",
            labelText: "Message",
            value: "",
        },
    ];

    return (
        <UniversalForm
            formInputs={formInputs}
            apiEndpoint="/sendmail"
            trackingId="contact"
        />
    );
};

export default Form;
