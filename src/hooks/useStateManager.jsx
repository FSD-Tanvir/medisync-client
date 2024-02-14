import { useContext } from "react";
import { StateManager } from "../Porviders/StateProvider";

const useStateManager = () => {
    const allSates = useContext(StateManager);
    return allSates;
};

export default useStateManager;