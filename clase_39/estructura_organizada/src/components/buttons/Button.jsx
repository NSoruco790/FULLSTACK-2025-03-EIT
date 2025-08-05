import PropTypes from "prop-types";
import "./button.scss";

const Button = ({ children, onClick, size = "md", variant = null, ...restProps }) => {
    const variantClass = variant ? `button--${variant}` : "";
    const classes = `button button--${size} ${variantClass}`;

    return (
        <button className={classes} onClick={onClick} {...restProps}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
    size: PropTypes.oneOf([ "sm", "md", "lg" ]).isRequired,
    variant: PropTypes.oneOf([ "confirm", "danger" ]).isRequired,
};

export default Button;