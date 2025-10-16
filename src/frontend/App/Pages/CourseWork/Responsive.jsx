import styled from "styled-components";

//media queries

import { useMediaQuery } from "@App/Theme/media/MediaQueryContext";

//styles
const ResponsiveStyled = styled.div`
    @media ${({ theme }) => theme.cssMedia.isMediumAndUp} {
        .image-wrapper {
            display: flex;
            justify-content: space-between;
        }
    }
    img {
        display: block;
        width: 100%;
        padding: 30px;
        margin-bottom: 20px;
        background-color: crimson;
        border-radius: 10px;
        &:last-child {
            border-radius: 50%;
        }
    }

    @media ${({ theme }) => theme.cssMedia.isMediumAndUp} {
        img {
            background-color: gold;
            max-width: 240px;
        }
    }

    @media ${({ theme }) => theme.cssMedia.isLarge} {
        img {
            background-color: magenta;
            max-width: 350px;
        }
    }
`;

// component
const Responsive = () => {
    const { jsMedia } = useMediaQuery();
    return (
        <ResponsiveStyled>
            <h2>Responsive</h2>
            <div className="image-wrapper">
                {jsMedia.isMediumAndUp && (
                    <img src="/assets/responsive/gold.jpg" alt="gold" />
                )}
                <img src="/assets/responsive/purple.jpg" alt="purple" />
                <img src="/assets/responsive/teal.jpg" alt="teal" />
            </div>
        </ResponsiveStyled>
    );
};

export default Responsive;
