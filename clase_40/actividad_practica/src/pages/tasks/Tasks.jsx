import { Text } from "@/components/texts";
import { useEffect, useState } from "react";
import { TaskForm } from "./task-form";
import { TaskList } from "./task-list";
import { TaskStats } from "./task-stats";
import "./tasks.scss";

const Tasks = () => {
    const [ tasks, setTasks ] = useState([]);
    const [ editingId, setEditingId ] = useState(null);

    const editingTask = tasks.find((task) => task.id === editingId);

    useEffect(() => {
        const initialTasks = [
            { id: 1, title: "Aprender React Hooks", completed: false },
            { id: 2, title: "Practicar useState", completed: true },
            { id: 3, title: "Entender useEffect", completed: false },
        ];
        setTasks(initialTasks);
    }, []);

    const addTask = (newTask) => {
        const task = {
            id: Date.now(),
            title: newTask.title,
            completed: false,
        };
        setTasks([ ...tasks, task ]);
    };

    const updateTask = (id, updatedTask) => {
        setTasks(tasks.map((task) =>
            task.id === id ? { ...task, ...updatedTask } : task,
        ));
        setEditingId(null);
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const toggleComplete = (id) => {
        setTasks(tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task,
        ));
    };

    const startEditing = (id) => {
        setEditingId(id);
    };

    const cancelEditing = () => {
        setEditingId(null);
    };

    return (
        <div className="tasks">
            <div className="tasks__content">
                <Text variant="h1">Gestor de Tareas</Text>

                <TaskStats tasks={tasks} />

                <TaskForm
                    onAdd={addTask}
                    editingTask={editingTask}
                    onUpdate={updateTask}
                    onCancel={cancelEditing}/>

                <TaskList
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleComplete}
                    onEdit={startEditing}/>
            </div>
        </div>
    );
};

export default Tasks;