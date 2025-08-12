import { ButtonPrimary } from "@/components/buttons";
import { Text } from "@/components/texts";
import AppContext from "@/contexts/AppContext";
import { useContext } from "react";

const ChildBSub1 = () => {
    const { count, setCount } = useContext(AppContext);

    const onClickDecrement = () => {
        setCount((prev) => prev - 1);
    };

    return (
        <div>
            <Text variant="h3">ChildBSub1</Text>
            <Text variant="p">Contador: {count}</Text>
            <ButtonPrimary onClick={onClickDecrement}>Decrementar</ButtonPrimary>
        </div>
    );
};

export default ChildBSub1;