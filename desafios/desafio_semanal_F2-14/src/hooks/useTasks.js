import { useEffect, useState } from "react";

const useTasks = () => {
    const [ tasks, setTasks ] = useState([]);

    useEffect(() => {
        setTasks(JSON.parse(localStorage.getItem("tasks") || "[]"));
    }, []);

    const generateId = () => {
        let id = 0;

        tasks.forEach((task) => {
            if (task.id > id) {
                id = task.id;
            }
        });

        return id + 1;
    };

    const add = () => {
        const newTask = {
            id: generateId(),
            title: `Tarea ${generateId()}`,
            description: `Descripción de la tarea ${generateId()}`,
            completed: false,
        };

        const collection = [ ...tasks, newTask ];
        setTasks(collection);
        localStorage.setItem("tasks", JSON.stringify(collection));
    };

    const remove = (id) => {
        const collection = tasks.filter((task) => task.id !== id);
        setTasks(collection);
        localStorage.setItem("tasks", JSON.stringify(collection));
    };

    const toggleStatus = (id) => {
        const collection = tasks.map((task) => {
            if (task.id === id) {
                task.completed = !task.completed;
            }

            return task;
        });

        setTasks(collection);
        localStorage.setItem("tasks", JSON.stringify(collection));
    };

    const getCompletedCount = () => {
        const completedTasks = tasks.filter((task) => task.completed);
        return completedTasks.length;
    };

    const getTotalCount = () => {
        return tasks.length;
    };

    return {
        tasks,
        add,
        remove,
        toggleStatus,
        getCompletedCount,
        getTotalCount,
    };
};

export default useTasks;