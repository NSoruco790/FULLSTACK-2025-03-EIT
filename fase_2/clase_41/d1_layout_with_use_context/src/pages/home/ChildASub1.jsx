import { Text } from "@/components/texts";
import AppContext from "@/contexts/AppContext";
import { useContext } from "react";

const ChildASub1 = () => {
    const { count } = useContext(AppContext);

    return (
        <div>
            <Text variant="h3">ChildASub1</Text>
            <Text variant="p">Contador: {count}</Text>
        </div>
    );
};

export default ChildASub1;