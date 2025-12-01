import styled from "styled-components";
import PropTypes from "prop-types";

import Markdown from "@App/Core/components/Markdown";

// styles
const AssignmentTemplateStyled = styled.div`
    padding: 20px;
    margin: 48px 0px;
    background-color: ${({ theme }) => theme.colors.secondary.light};
    h3 {
        background-color: ${({ theme }) => theme.colors.primary.default};
        margin: -20px -20px 20px;
        padding: 20px;
        color: ${({ theme }) => theme.colors.secondary.light};
    }
`;

// component
const AssignmentTemplate = ({ markdown }) => {
    return (
        <AssignmentTemplateStyled>
            <Markdown markdown={markdown} />
        </AssignmentTemplateStyled>
    );
};

export default AssignmentTemplate;

// prop-types
AssignmentTemplate.propTypes = {
    markdown: PropTypes.string.isRequired,
};
