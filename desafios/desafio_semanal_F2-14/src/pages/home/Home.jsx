import { ButtonPrimary } from "@/components/buttons";
import { Text } from "@/components/texts";
import useTasks from "@/hooks/useTasks";
import { useNavigate } from "react-router-dom";
import "./home.scss";

const Home = () => {
    const { getTotalCount, getCompletedCount } = useTasks();
    const navigate = useNavigate();

    const totalTasks = getTotalCount();
    const completedTasks = getCompletedCount();
    const pendingTasks = totalTasks - completedTasks;

    const handleGoToTasks = () => {
        navigate("/tasks");
    };

    return (
        <div className="home">
            <Text variant="h2">¡Bienvenido al Gestor de Tareas!</Text>

            <div className="home__stats">
                <Text variant="p">Total de Tareas: {totalTasks}</Text>
                <Text variant="p">Completadas: {completedTasks}</Text>
                <Text variant="p">Pendientes: {pendingTasks}</Text>
            </div>

            <ButtonPrimary size="md" onClick={handleGoToTasks}>Ver Todas las Tareas</ButtonPrimary>
        </div>
    );
};

export default Home;