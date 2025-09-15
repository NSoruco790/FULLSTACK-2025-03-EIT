import { ButtonPrimary } from "@/components/buttons";
import { Text } from "@/components/texts";
import AppContext from "@/contexts/AppContext";
import { useContext } from "react";

const ChildASub2 = () => {
    const { setCount } = useContext(AppContext);

    const onClickIncrement = () => {
        setCount((prev) => prev + 1);
    };

    return (
        <div>
            <Text variant="h3">ChildASub2</Text>
            <ButtonPrimary onClick={onClickIncrement}>Incrementar</ButtonPrimary>
        </div>
    );
};

export default ChildASub2;