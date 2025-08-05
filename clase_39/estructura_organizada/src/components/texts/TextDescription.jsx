import PropTypes from "prop-types";
import Text from "./Text";

const TextDescription = ({ children, size = "md", weight = "regular", ...restProps }) => {
    return (
        <Text
            size={size}
            variant="description"
            weight={weight}
            {...restProps}
        >
            {children}
        </Text>
    );
};

TextDescription.propTypes = {
    children: PropTypes.node.isRequired,
    size: PropTypes.oneOf(["xxs", "xs", "sm", "md"]),
    weight: PropTypes.oneOf(["light", "regular", "bold"]),
};

export default TextDescription;
