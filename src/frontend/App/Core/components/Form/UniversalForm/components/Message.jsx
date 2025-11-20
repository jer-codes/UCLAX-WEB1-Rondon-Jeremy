import styled, { css } from "styled-components";
import { useUniversalForm } from "@Core/components/Form/UniversalForm/context/useUniversalForm.js";

//styles
const MessageStyled = styled.div`
    margin: 20px 0px;
    padding: 20px;
    font-size: 18px;

    ${({ $type, theme }) => {
        return css`
            color: ${theme.colors.messaging[$type].color};
            background-color: ${theme.colors.messaging[$type].bgColor};
        `;
    }}
`;

// component
const Message = () => {
    const { globalMessage } = useUniversalForm();
    const { type, text } = globalMessage;

    if (type === "none") return null;
    return <MessageStyled $type={type}>{text}</MessageStyled>;
};

export default Message;
