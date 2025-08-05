import PropTypes from "prop-types";
import "./text.scss";

const Text = ({ children, size = "md", variant = null, weight = "regular", ...restProps }) => {
    const variantClass = variant ? `text--${variant}` : "";
    const weightClass = weight ? `text--${weight}` : "";
    const classes = `text text--${size} ${variantClass} ${weightClass}`;

    return (
        <span className={classes} {...restProps}>
            {children}
        </span>
    );
};

Text.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(["title", "description"]),
    size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "xxl"]),
    weight: PropTypes.oneOf(["light", "regular", "bold"]),
};

export default Text;
