import { Routes, Route } from "react-router-dom";

// page components
import Home from "@App/Pages/Home";
import Staff from "@App/Pages/Staff";
import Contact from "@App/Pages/Contact";

//course work routes
import CourseWork from "@App/Pages/CourseWork";
import Assignments from "@App/Pages/CourseWork/Assignments";
import SunAndMoon from "@App/Pages/CourseWork/SunAndMoon";
import Responsive from "@App/Pages/CourseWork/Responsive";

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<Home />} index />
            <Route element={<Staff />} path="/staff" />
            <Route element={<Contact />} path="/contact" />
            <Route element={<CourseWork />} path="/course-work">
                <Route element={<Assignments />} path="" />
                <Route element={<SunAndMoon />} path="sun-and-moon" />
                <Route element={<Responsive />} path="responsive" />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
