import { useState, useEffect } from "react";
import Preloader from "@App/Core/components/Preloader";
import CoreSlideshow from "@App/Core/components/Slideshow";

//api
import axios from "@App/Core/axios";

// component
const Slideshow = () => {
    const [slides, setSlides] = useState([]);

    useEffect(() => {
        const fetchSlides = async () => {
            const resp = await axios.get(`/slides`);
            setSlides(resp.data);
        };

        fetchSlides();
    }, []);

    if (slides.length === 0) return <Preloader />;

    return <CoreSlideshow slides={slides} />;
};

export default Slideshow;
