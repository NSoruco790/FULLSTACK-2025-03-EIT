import { Text } from "@/components/texts";
import PropTypes from "prop-types";
import "./counter-display.scss";

const CounterDisplay = (props) => {
    const { value } = props;

    return (
        <div className="counter-display">
            <Text variant="h3" className="counter-display__title">Horas de estudio</Text>
            <div>
                <Text variant="h1" className="counter-display__value">{value.toString().padStart(3, "0")} Hs.</Text>
            </div>
        </div>
    );
};

CounterDisplay.propTypes = {
    value: PropTypes.number.isRequired,
};

export default CounterDisplay;