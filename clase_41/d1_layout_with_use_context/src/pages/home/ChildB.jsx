import { Text } from "@/components/texts";
import ChildBSub1 from "./ChildBSub1";

const ChildB = () => {
    return (
        <div>
            <Text variant="h2">ChildB</Text>
            <ChildBSub1 />
        </div>
    );
};

export default ChildB;