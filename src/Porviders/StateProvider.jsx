import { createContext, useState } from "react";

export const StateManager = createContext(null)

const StateProvider = ({children}) => {
    const [showModal, setShowModal] = useState(false);
    const allSates = {
        setShowModal,showModal
    }
    return (
        <StateManager.Provider value={allSates}>
            {children}
        </StateManager.Provider>
    );
};

export default StateProvider;