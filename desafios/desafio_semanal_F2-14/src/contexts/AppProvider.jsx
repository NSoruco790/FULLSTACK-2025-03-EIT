import useTasks from "@/hooks/useTasks";
import PropTypes from "prop-types";
import AppContext from "./AppContext";

const AppProvider = (props) => {
    const { children } = props;

    const taskContext = useTasks();

    return (
        <AppContext.Provider
            value={{
                taskContext,
            }}>
            {children}
        </AppContext.Provider>
    );
};

AppProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppProvider;