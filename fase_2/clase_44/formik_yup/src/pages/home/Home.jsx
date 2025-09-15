import { Text } from "@/components/texts";
import DemoFormPure from "./demo-form-pure/DemoFormPure";
import DemoForm from "./demo-form/DemoForm";
import "./home.scss";

const Home = () => {
    return (
        <div className="home">
            <Text variant="h2">Trabajando con Formularios - Formik & Yup</Text>

            <DemoFormPure />
            <DemoForm />
        </div>
    );
};

export default Home;