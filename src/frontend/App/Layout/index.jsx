import PropTypes from "prop-types";

//styles
import Theme from "@App/Theme";

//components
import Header from "./Header";
import Footer from "./Footer";

// component
const Layout = ({ children }) => {
    return (
        <Theme>
            <Header />
            {children}
            <Footer />
        </Theme>
    );
};

export default Layout;

//prop-types
Layout.propTypes = {
    children: PropTypes.any,
};
