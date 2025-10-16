import { Outlet } from "react-router-dom";

//component
import Meta from "@App/Core/components/Meta";
import CourseWorkMenu from "@App/Routes/CourseWorkMenu";
import Inset from "@App/Layout/inset";

// component
const CourseWork = () => {
    return (
        <main>
            <Inset>
                <Meta pageTitle="Course Work" />
                <h1>Course Work</h1>
                <CourseWorkMenu />
                <Outlet />
            </Inset>
        </main>
    );
};

export default CourseWork;
