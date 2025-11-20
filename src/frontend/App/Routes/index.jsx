import { Routes, Route } from "react-router-dom";

// page components
import Home from "@App/Pages/Home";
import Staff from "@App/Pages/Staff";
import StaffMember from "@App/Pages/Staff/StaffMember";
import Contact from "@App/Pages/Contact";

//course work routes
import CourseWork from "@App/Pages/CourseWork";
import Assignments from "@App/Pages/CourseWork/Assignments";
import SunAndMoon from "@App/Pages/CourseWork/SunAndMoon";
import Responsive from "@App/Pages/CourseWork/Responsive";
import FormInputState from "@App/Pages/CourseWork/FormInputState";
import PseudoLogin from "@App/Pages/CourseWork/PseudoLogin";

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<Home />} index />
            <Route path="/staff">
                <Route element={<Staff />} path="" />
                <Route element={<StaffMember />} path=":staffId" />
            </Route>
            <Route element={<Contact />} path="/contact" />
            <Route element={<CourseWork />} path="/course-work">
                <Route element={<Assignments />} path="" />
                <Route element={<SunAndMoon />} path="sun-and-moon" />
                <Route element={<Responsive />} path="responsive" />
                <Route element={<FormInputState />} path="form-input-state" />
                <Route element={<PseudoLogin />} path="pseudo-login" />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
