import EffectDependencyProblem1 from "./effect-dependency-problem/EffectDependencyProblem1";
import EffectDependencyProblem2 from "./effect-dependency-problem/EffectDependencyProblem2";
import "./home.scss";
import StateSyncProblem1 from "./state-sync-problem/StateSyncProblem1";
import StateSyncProblem2 from "./state-sync-problem/StateSyncProblem2";

const Home = () => {
    return (
        <div className="home">
            <h1>React - Solución de Problemas</h1>

            <div className="content">
                <StateSyncProblem1 />
                <StateSyncProblem2 />
                <EffectDependencyProblem1 />
                <EffectDependencyProblem2 />
            </div>
        </div>
    );
};

export default Home;