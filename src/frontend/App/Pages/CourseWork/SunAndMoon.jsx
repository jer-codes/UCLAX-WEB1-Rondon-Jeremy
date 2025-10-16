import { useState } from "react";
import styled from "styled-components";

const SunAndMoonStyled = styled.div`
    img {
        display: block;
        margin: 30px auto;
        padding: 20px;
        border: solid 20px teal;
        background-color: #015252;
    }
`;

const SunAndMoon = () => {
    const [SrcState, setSrcState] = useState("/assets/sunAndMoon/moon.png");

    const changeToSun = () => {
        setSrcState("/assets/sunAndMoon/sun.png");
    };

    const changeToMoon = () => {
        setSrcState("/assets/sunAndMoon/moon.png");
    };

    return (
        <SunAndMoonStyled>
            <h2>Sun and Moon</h2>
            <img
                src={SrcState}
                alt="Sun and Moon"
                onMouseEnter={changeToSun}
                onMouseLeave={changeToMoon}
            />
        </SunAndMoonStyled>
    );
};

export default SunAndMoon;
