import useProducts from "@/hooks/useProducts";
import PropTypes from "prop-types";
import AppContext from "./AppContext";

const AppProvider = (props) => {
    const { children } = props;

    const productContext = useProducts();

    return (
        <AppContext.Provider
            value={{
                productContext,
            }}>
            {children}
        </AppContext.Provider>
    );
};

AppProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppProvider;