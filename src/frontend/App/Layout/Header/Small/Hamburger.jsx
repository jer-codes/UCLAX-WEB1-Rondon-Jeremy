import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import styled from "styled-components";

//components
import UnstyledButton from "@App/Core/components/Form/Button/UnstyledButton";

//styles
const HamburgerStyled = styled(UnstyledButton)`
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 30px;
    color: ${({ theme }) => theme.colors.secondary.light};
`;

// component
const Hamburger = ({ onClick }) => {
    return (
        <HamburgerStyled onClick={onClick}>
            <FontAwesomeIcon icon={faBars} />
        </HamburgerStyled>
    );
};

export default Hamburger;

// prop-types
Hamburger.propTypes = {
    onClick: PropTypes.func.isRequired,
};
