import "./app.scss";
import EffectDependencyProblem1 from "./components/effect-dependency-problem/EffectDependencyProblem1";
import EffectDependencyProblem2 from "./components/effect-dependency-problem/EffectDependencyProblem2";
import StateSyncProblem1 from "./components/state-sync-problem/StateSyncProblem1";
import StateSyncProblem2 from "./components/state-sync-problem/StateSyncProblem2";

const App = () => {
    return (
        <div className="app">
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

export default App;