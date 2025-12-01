import { NavLink } from "react-router-dom";

// component
// component
const PrimaryMenu = () => {
    return (
        <nav>
            <NavLink to="">Home</NavLink>
            <NavLink to="/staff">Two.Five Staff</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
            <NavLink to="/course-work">Jer's HW</NavLink>
        </nav>
    );
};

export default PrimaryMenu;
