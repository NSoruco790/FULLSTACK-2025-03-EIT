import PropTypes from "prop-types";
import Text from "./Text";

const TextTitle = ({ children, size = "md", weight = "regular", ...restProps }) => {
    return (
        <Text
            size={size}
            variant="title"
            weight={weight}
            {...restProps}
        >
            {children}
        </Text>
    );
};

TextTitle.propTypes = {
    children: PropTypes.node.isRequired,
    size: PropTypes.oneOf(["md", "lg", "xl", "xxl"]),
    weight: PropTypes.oneOf(["regular", "bold"]),
};

export default TextTitle;
