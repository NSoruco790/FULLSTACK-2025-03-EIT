import { ButtonDanger, ButtonPrimary } from "@/components/buttons";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import "./task-form.scss";

const TaskForm = ({ onAdd, editingTask, onUpdate, onCancel }) => {
    const [ taskTitle, setTaskTitle ] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        if (editingTask) {
            setTaskTitle(editingTask.title);
            inputRef.current?.focus();
        } else {
            setTaskTitle("");
        }
    }, [editingTask]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (taskTitle.trim()) {
            if (editingTask) {
                onUpdate(editingTask.id, { title: taskTitle.trim() });
            } else {
                onAdd({ title: taskTitle.trim() });
            }

            setTaskTitle("");
        }
    };

    const handleCancel = () => {
        onCancel();
        setTaskTitle("");
    };

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <input
                ref={inputRef}
                type="text"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                placeholder="Nueva tarea..."
                className="task-form__input"/>

            <div className="task-form__buttons">
                <ButtonPrimary type="submit" size="md" onClick={handleSubmit}>
                    {editingTask ? "Actualizar" : "Agregar"}
                </ButtonPrimary>

                {editingTask && (
                    <ButtonDanger onClick={handleCancel} size="md">
                        Cancelar
                    </ButtonDanger>
                )}
            </div>
        </form>
    );
};

TaskForm.propTypes = {
    editingTask: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
    }),
    onAdd: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
};

export default TaskForm;