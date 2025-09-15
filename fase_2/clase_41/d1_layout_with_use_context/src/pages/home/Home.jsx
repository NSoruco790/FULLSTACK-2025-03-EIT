import { Text } from "@/components/texts";
import ChildA from "./ChildA";
import ChildB from "./ChildB";
import "./home.scss";

const Home = () => {
    return (
        <div className="home">
            <Text variant="h2">Trabajando con useContext</Text>
            <ChildA />
            <ChildB />
        </div>
    );
};

export default Home;