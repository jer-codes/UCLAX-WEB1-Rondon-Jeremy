//component
import Meta from "@App/Core/components/Meta";
import Inset from "@App/Layout/inset";
import Tabbed from "./Tabbed";
import Slideshow from "./Slideshow";
import VidPlayer from "@App/Core/components/YouTube";
import styled from "styled-components";

//styles
const HomeStyled = styled.div`
    h1 {
        display: none;
    }
`;

// component
const Home = () => {
    return (
        <HomeStyled>
            <Slideshow />
            <main>
                <Inset>
                    <Meta />
                    <h1>Home</h1>

                    <Tabbed />
                    <div style={{ textAlign: "center", marginTop: "80px" }}>
                        <h3>Video Meme of the Week, submitted by Jordan:</h3>
                        <p>
                            (because no one wants to explain Twilight Imperium.)
                        </p>
                    </div>
                    <VidPlayer videoId="gUrRsx-F_bs" />
                </Inset>
            </main>
        </HomeStyled>
    );
};

export default Home;
