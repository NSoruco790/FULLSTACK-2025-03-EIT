import { Text } from "@/components/texts";
import PropTypes from "prop-types";
import { TaskListItem } from "./task-list-item";
import "./task-list.scss";

const TaskList = ({ tasks, onDelete, onToggle, onEdit }) => {
    return (
        <div className="task-list">
            <Text variant="h2">📝 Tareas ({tasks.length})</Text>

            {tasks.length === 0 && (
                <Text variant="p">No hay tareas</Text>
            )}

            {tasks.map((task) => (
                <TaskListItem
                    key={task.id}
                    onDelete={onDelete}
                    onEdit={onEdit}
                    onToggle={onToggle}
                    task={task}/>
            ))}
        </div>
    );
};

TaskList.propTypes = {
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired,
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired,
        }),
    ).isRequired,
};

export default TaskList;