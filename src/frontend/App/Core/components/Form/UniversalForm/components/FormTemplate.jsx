import Inputs from "./Inputs";
import Form from "./Form";
import Message from "./Message";
import SubmitButton from "./SubmitButton";

// component

const FormTemplate = () => {
    return (
        <div>
            <Message />
            <Form>
                <Inputs />
                <SubmitButton />
            </Form>
        </div>
    );
};

export default FormTemplate;
