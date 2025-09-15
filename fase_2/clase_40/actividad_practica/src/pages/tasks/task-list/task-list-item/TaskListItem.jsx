import { ButtonDanger, ButtonPrimary } from "@/components/buttons";
import { Text } from "@/components/texts";
import PropTypes from "prop-types";
import "./task-list-item.scss";

const TaskListItem = (props) => {
    const { onToggle, onEdit, onDelete, task } = props;

    const handleToggle = () => onToggle(task.id);
    const handleEdit = () => onEdit(task.id);
    const handleDelete = () => onDelete(task.id);

    return (
        <div className={`task-item ${task.completed ? "task-item--completed" : ""}`}>
            <div className="task-item__content">
                <input type="checkbox" checked={task.completed} onChange={handleToggle} />
                <Text variant="p" className="task-item__title">
                    {task.completed ? <s>{task.title}</s> : task.title}
                </Text>
            </div>
            <div className="task-item__actions">
                <ButtonPrimary size="sm" onClick={handleEdit} disabled={task.completed}>Editar</ButtonPrimary>
                <ButtonDanger size="sm" onClick={handleDelete}>Eliminar</ButtonDanger>
            </div>
        </div>
    );
};

TaskListItem.propTypes = {
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired,
    task: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
    }).isRequired,
};

export default TaskListItem;