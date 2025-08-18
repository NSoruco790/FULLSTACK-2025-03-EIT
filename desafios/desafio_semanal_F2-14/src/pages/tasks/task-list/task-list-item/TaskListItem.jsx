import { ButtonDanger, ButtonPrimary } from "@/components/buttons";

import { Text } from "@/components/texts";
import AppContext from "@/contexts/AppContext";
import PropTypes from "prop-types";
import { useContext } from "react";
import "./task-list-item.scss";

const TaskListItem = (props) => {
    const { task } = props;
    const { taskContext } = useContext(AppContext);
    const { remove, toggleStatus } = taskContext;
    const handleToggleStatusText = task.completed ? "Marcar Pendiente" : "Marcar Completada";

    return (
        <div className="task-list-item">
            <Text variant="h3">{task.title}</Text>
            <Text variant="p">{task.description}</Text>
            <Text variant="p">{task.completed ? "Completada" : "Pendiente"}</Text>

            <div className="task-list-item__actions">
                <ButtonPrimary size="sm" onClick={() => toggleStatus(task.id)}>{handleToggleStatusText}</ButtonPrimary>
                <ButtonDanger size="sm" onClick={() => remove(task.id)}>Eliminar</ButtonDanger>
            </div>
        </div>
    );
};

TaskListItem.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
    }).isRequired,
};

export default TaskListItem;