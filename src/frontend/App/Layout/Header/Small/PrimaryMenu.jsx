import styled from "styled-components";
import PropTypes from "prop-types";

//components

import SharedPrimaryMenu from "@App/Routes/PrimaryMenu";

//styles
const PrimaryMenuStyled = styled.div`
    position: fixed;
    z-index: 1000;
    top: 300px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    overflow-y: auto;
    background-color: ${({ theme }) => theme.colors.primary.default};

    a {
        display: block;
        padding: 0px 20px;
        text-decoration: none;
        color: ${({ theme }) => theme.colors.primary.light};
        border-bottom: solid 1px ${({ theme }) => theme.colors.primary.light};
        font-size: 12px;
        font-weight: bold;
        text-transform: uppercase;
        line-height: 40px;

        &:first-child {
            border-top: solid 1px ${({ theme }) => theme.colors.primary.light};
        }

        &:hover,
        &:focus,
        &:active {
            color: ${({ theme }) => theme.colors.secondary.light};
            background-color: ${({ theme }) => theme.colors.primary.dark};
        }
    }
`;

// component
const PrimaryMenu = ({ setShowMenu }) => {
    const onClick = () => {
        setShowMenu(false);
    };

    return (
        <PrimaryMenuStyled onClick={onClick}>
            <SharedPrimaryMenu />
        </PrimaryMenuStyled>
    );
};

export default PrimaryMenu;

// prop-types
PrimaryMenu.propTypes = {
    setShowMenu: PropTypes.func.isRequired,
};
