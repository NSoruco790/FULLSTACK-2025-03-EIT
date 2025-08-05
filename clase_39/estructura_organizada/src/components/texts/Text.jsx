import PropTypes from "prop-types";
import "./text.scss";

const Text = (props) => {
    const { children, size, variant, weight, ...restProps } = props;
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
    size: PropTypes.oneOf([ "xs", "sm", "md", "lg", "xl", "xxl" ]),
    variant: PropTypes.oneOf([ "title", "description" ]),
    weight: PropTypes.oneOf([ "light", "regular", "bold" ]),
};

export default Text;