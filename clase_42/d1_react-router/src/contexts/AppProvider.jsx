import PropTypes from "prop-types";
import { useState } from "react";
import AppContext from "./AppContext";

const AppProvider = (props) => {
    const { children } = props;

    const [ count, setCount ] = useState(0);

    return (
        <AppContext.Provider value={{ count, setCount, a: 2 }}>
            {children}
        </AppContext.Provider>
    );
};

AppProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppProvider;