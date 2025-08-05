import PropTypes from "prop-types";
import Button from "./Button";

const ButtonConfirm = (props) => {
    const { children, onClick, size = "md", ...restProps } = props;

    return (
        <Button size={size} variant="confirm" onClick={onClick}
            {...restProps}>
            {children}
        </Button>
    );
};

ButtonConfirm.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
    size: PropTypes.oneOf([ "sm", "md", "lg" ]),
};

export default ButtonConfirm;