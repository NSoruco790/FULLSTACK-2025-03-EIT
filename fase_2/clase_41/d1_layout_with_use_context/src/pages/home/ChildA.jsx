import { Text } from "@/components/texts";
import ChildASub1 from "./ChildASub1";
import ChildASub2 from "./ChildASub2";

const ChildA = () => {
    return (
        <div>
            <Text variant="h2">ChildA</Text>
            <ChildASub1 />
            <ChildASub2 />
        </div>
    );
};

export default ChildA;