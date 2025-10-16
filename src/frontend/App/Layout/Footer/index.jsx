import styled from "styled-components";

//components
import Logo from "./Logo";
import Copyright from "./Copyright";
import SiteInfo from "./SiteInfo";

//styles
const FooterStyled = styled.footer`
    padding: 20px;
    text-align: center;
    color: ${({ theme }) => theme.colors.primary.light};
`;

// component
const Footer = () => {
    return (
        <FooterStyled>
            <Logo />
            <SiteInfo />
            <Copyright />
        </FooterStyled>
    );
};

export default Footer;
