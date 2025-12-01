import styled from "styled-components";
import PropTypes from "prop-types";

//styles
const TabItemStyled = styled.div`
    text-align: center;
    cursor: pointer;
    border-radius: 0px 5px 0px 0px;
    line-height: 40px;
    margin-right: 2px;
    display: inline-block;
    width: clamp(75px, 20%, 193.7px);
    background-color: ${({ theme }) => theme.colors.primary.dark};
    color: ${({ theme }) => theme.colors.secondary.dark};

    &.selected {
        background-color: orange};
        color: ${({ theme }) => theme.colors.secondary.light};
    }
`;

// component
const TabItem = ({ tab, curTab, setCurTab }) => {
    const { id, title } = tab;
    const onClick = () => {
        setCurTab(tab);
    };

    const className = curTab.id === id ? "selected" : "";

    return (
        <TabItemStyled className={className} onClick={onClick}>
            {title}
        </TabItemStyled>
    );
};

export default TabItem;

// prop-types
TabItem.propTypes = {
    tab: PropTypes.object.isRequired,
    curTab: PropTypes.object.isRequired,
    setCurTab: PropTypes.func.isRequired,
};
