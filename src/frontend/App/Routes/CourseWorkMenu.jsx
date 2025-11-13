import { NavLink } from "react-router-dom";

// component
// component
const CourseWorkMenu = () => {
    return (
        <nav className="content">
            <NavLink to="/course-work" end>
                Assignments
            </NavLink>
            <NavLink to="/course-work/sun-and-moon">Sun and Moon</NavLink>
            <NavLink to="/course-work/responsive">Responsive</NavLink>
            <NavLink to="/course-work/form-input-state">
                Form Input State
            </NavLink>
        </nav>
    );
};

export default CourseWorkMenu;
