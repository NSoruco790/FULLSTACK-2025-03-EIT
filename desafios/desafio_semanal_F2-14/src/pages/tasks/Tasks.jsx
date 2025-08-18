import { ButtonPrimary } from "@/components/buttons";
import { Text } from "@/components/texts";
import AppContext from "@/contexts/AppContext";
import { useContext } from "react";
import TaskList from "./task-list/TaskList";
import "./tasks.scss";

const Tasks = () => {
    const { taskContext } = useContext(AppContext);
    const { add, getTotalCount } = taskContext;

    return (
        <div className="tasks">
            <Text variant="h2">Lista de Tareas ({getTotalCount()})</Text>
            <ButtonPrimary size="md" onClick={() => add()}>Agregar Tarea</ButtonPrimary>
            <TaskList />
        </div>
    );
};

export default Tasks;