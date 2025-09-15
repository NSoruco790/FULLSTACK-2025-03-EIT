import { Text } from "@/components/texts";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import "./task-stats.scss";

const TaskStats = ({ tasks }) => {
    const [ stats, setStats ] = useState({
        total: 0,
        completed: 0,
        pending: 0,
    });

    useEffect(() => {
        const newStats = {
            total: tasks.length,
            completed: tasks.filter((task) => task.completed).length,
            pending: tasks.filter((task) => !task.completed).length,
        };
        setStats(newStats);
    }, [tasks]);

    const getCompletionPercentage = () => {
        if (stats.total === 0) return 0;
        return Math.round((stats.completed / stats.total) * 100);
    };

    return (
        <div className="task-stats">
            <Text variant="h2">📊 Estadísticas</Text>

            <div className="task-stats__content">
                <div className="task-stats__grid">
                    <div className="task-stats__item">
                        <Text variant="p">Total:</Text>
                        <Text variant="p" weight="bold">{stats.total}</Text>
                    </div>

                    <div className="task-stats__item">
                        <Text variant="p">Completadas:</Text>
                        <Text variant="p" weight="bold">{stats.completed}</Text>
                    </div>

                    <div className="task-stats__item">
                        <Text variant="p">Pendientes:</Text>
                        <Text variant="p" weight="bold">{stats.pending}</Text>
                    </div>
                </div>

                <div className="task-stats__progress">
                    <Text variant="span">Progreso: {getCompletionPercentage()}%</Text>
                    <div className="task-stats__bar">
                        <div
                            className="task-stats__bar-fill"
                            style={{ width: `${getCompletionPercentage()}%` }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

TaskStats.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired,
        }),
    ).isRequired,
};

export default TaskStats;