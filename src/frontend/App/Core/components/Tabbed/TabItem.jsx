import styled from "styled-components";
import PropTypes from "prop-types";

//styles
const TabItemStyled = styled.div`
    text-align: center;
    cursor: pointer;
    border-radius: 5px 5px 0px 0px;
    line-height: 40px;
    margin-right: 5px;
    display: inline-block;
    width: clamp(75px, 20%, 150px);
    background-color: ${({ theme }) => theme.colors.secondary.light};
    color: ${({ theme }) => theme.colors.secondary.dark};

    &.selected {
        background-color: ${({ theme }) => theme.colors.primary.default};
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
