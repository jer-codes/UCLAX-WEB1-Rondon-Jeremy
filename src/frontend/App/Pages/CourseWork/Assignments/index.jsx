//components
import AssignmentTemplate from "./AssignmentTemplate";

//markdown
import assignment1 from "./markdown/assignment1.md?raw";

// component
const Assignments = () => {
    return (
        <div>
            <h2>Assignments</h2>
            <AssignmentTemplate markdown={assignment1} />
        </div>
    );
};

export default Assignments;
