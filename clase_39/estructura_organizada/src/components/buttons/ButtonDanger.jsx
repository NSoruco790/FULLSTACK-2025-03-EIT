import PropTypes from "prop-types";
import Button from "./Button";

const ButtonDanger = (props) => {
    const { children, onClick, size = "md", ...restProps } = props;

    return (
        <Button size={size} variant="danger" onClick={onClick}
            {...restProps}>
            {children}
        </Button>
    );
};

ButtonDanger.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
    size: PropTypes.oneOf([ "sm", "md", "lg" ]),
};

export default ButtonDanger;