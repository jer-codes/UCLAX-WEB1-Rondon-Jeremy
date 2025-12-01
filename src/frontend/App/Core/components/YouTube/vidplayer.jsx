import PropTypes from "prop-types";
import styled from "styled-components";

const VideoWrapper = styled.div`
    max-width: 600px;
    width: 80%;
    margin: 40px auto 0 auto;
    position: relative;
    padding-bottom: 300px;
    height: 0;

    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 0;
    }
`;

const VidPlayer = ({ videoId }) => {
    return (
        <VideoWrapper>
            <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </VideoWrapper>
    );
};

VidPlayer.propTypes = {
    videoId: PropTypes.string.isRequired,
};

export default VidPlayer;
