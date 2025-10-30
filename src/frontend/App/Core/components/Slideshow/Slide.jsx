// component
const Slide = ({ slide }) => {
    const { src, title } = slide;
    return (
        <div>
            <img src={src} alt={title} />
            <p className="legend">{title}</p>
        </div>
    );
};

export default Slide;

import PropTypes from "prop-types";

// prop-types
Slide.propTypes = {
    slide: PropTypes.object.isRequired,
};
