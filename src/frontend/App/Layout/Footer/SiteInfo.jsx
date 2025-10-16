import styled from "styled-components";

//styles
const SiteInfoStyled = styled.div``;

// component
const SiteInfo = () => {
    const {
        VITE_APP_CONFIG_STUDENT_NAME,
        VITE_APP_CONFIG_TITLE,
        VITE_APP_CONFIG_TAGLINE,
        VITE_APP_CONFIG_LOCATION,
    } = import.meta.env;

    return (
        <SiteInfoStyled>
            {VITE_APP_CONFIG_STUDENT_NAME} :: {VITE_APP_CONFIG_TITLE} ::{" "}
            {VITE_APP_CONFIG_TAGLINE} :: {VITE_APP_CONFIG_LOCATION}
        </SiteInfoStyled>
    );
};

export default SiteInfo;
