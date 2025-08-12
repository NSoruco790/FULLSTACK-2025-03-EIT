import { ButtonDanger, ButtonPrimary } from "@/components/buttons";
import PropTypes from "prop-types";
import "./counter-control.scss";

const CounterControl = (props) => {
    const { onAddHour, onReset } = props;

    const handleClickAddHour = () => {
        onAddHour(1);
    };

    const handleClickReset = () => {
        onReset();
    };

    return (
        <div className="counter-control">
            <ButtonPrimary onClick={handleClickAddHour} size="md">Incrementar</ButtonPrimary>
            <ButtonDanger onClick={handleClickReset} size="md">Reiniciar</ButtonDanger>
        </div>
    );
};

CounterControl.propTypes = {
    onAddHour: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
};

export default CounterControl;