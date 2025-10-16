import { NavLink } from "react-router-dom";

// component
// component
const PrimaryMenu = () => {
    return (
        <nav>
            <NavLink to="">Home</NavLink>
            <NavLink to="/staff">Staff</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/course-work">Course Work</NavLink>
        </nav>
    );
};

export default PrimaryMenu;
