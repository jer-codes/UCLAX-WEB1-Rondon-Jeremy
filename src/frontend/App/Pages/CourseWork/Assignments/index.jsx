//components
import AssignmentTemplate from "./AssignmentTemplate";

//markdown
import assignment1 from "./markdown/assignment1.md?raw";
import assignment2 from "./markdown/assignment2.md?raw";
import assignment3 from "./markdown/assignment3.md?raw";
import assignment4 from "./markdown/assignment4.md?raw";
import assignment5 from "./markdown/assignment5.md?raw";
import assignment6 from "./markdown/assignment6.md?raw";
import assignment7 from "./markdown/assignment7.md?raw";

// component
const Assignments = () => {
    return (
        <div>
            <h2>Assignments</h2>
            <AssignmentTemplate markdown={assignment1} />
            <AssignmentTemplate markdown={assignment2} />
            <AssignmentTemplate markdown={assignment3} />
            <AssignmentTemplate markdown={assignment4} />
            <AssignmentTemplate markdown={assignment5} />
            <AssignmentTemplate markdown={assignment6} />
            <AssignmentTemplate markdown={assignment7} />
        </div>
    );
};

export default Assignments;
