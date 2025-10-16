import { Routes, Route } from "react-router-dom";

// page components
import Home from "@App/Pages/Home";
import Staff from "@App/Pages/Staff";
import Contact from "@App/Pages/Contact";
import CourseWork from "@App/Pages/Coursework";

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<Home />} index />
            <Route element={<Staff />} path="/staff" />
            <Route element={<Contact />} path="/contact" />
            <Route element={<CourseWork />} path="/course-work" />
        </Routes>
    );
};

export default AppRoutes;
