import { Text } from "@/components/texts";
import AppContext from "@/contexts/AppContext";
import { useContext } from "react";
import TaskItem from "./task-list-item/TaskListItem";
import "./task-list.scss";

const TaskList = () => {
    const { taskContext } = useContext(AppContext);
    const { tasks } = taskContext;

    return (
        <div className="task-list">
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}

            {tasks.length === 0 && (
                <div className="task-list__empty">
                    <Text variant="h3">No hay tareas disponibles</Text>
                    <Text variant="p">¡Crea tu primera tarea para comenzar!</Text>
                </div>
            )}
        </div>
    );
};

export default TaskList;