import styled from "styled-components";
import PropTypes from "prop-types";

// styles
const InsetStyled = styled.div`
    max-width: 1200px;
    margin: auto;
    padding: 0px 15 px;
`;

// component
const Inset = ({ children }) => {
    return <InsetStyled>{children}</InsetStyled>;
};

export default Inset;

// prop-types
Inset.propTypes = {
    children: PropTypes.any,
};
