import { useMediaQuery } from "@App/Theme/media/MediaQueryContext";

//components
import MediumLarge from "./MediumLarge";
import Small from "./Small";

// component
const Header = () => {
    const { jsMedia } = useMediaQuery();
    return <header>{jsMedia.isSmall ? <Small /> : <MediumLarge />}</header>;
};

export default Header;
