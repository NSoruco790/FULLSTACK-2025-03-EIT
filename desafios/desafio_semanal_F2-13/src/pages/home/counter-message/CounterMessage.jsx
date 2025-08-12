import { Text } from "@/components/texts";
import PropTypes from "prop-types";
import { useRef } from "react";
import "./counter-message.scss";

const CounterMessage = (props) => {
    const { message, showAlert } = props;

    const messageRef = useRef(null);

    return (
        <div className="counter-message">
            <div ref={messageRef}>
                <Text variant="p" className="counter-message__text">{message}</Text>
            </div>

            {showAlert && (
                <div>
                    <Text variant="p" className="counter-message__alert">🎉 ¡Congratulations! You&apos;ve reached a study milestone.</Text>
                </div>
            )}
        </div>
    );
};

CounterMessage.propTypes = {
    message: PropTypes.string.isRequired,
    showAlert: PropTypes.bool.isRequired,
};

export default CounterMessage;