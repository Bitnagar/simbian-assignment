import { createContext } from "react";

export const AnimationStateContext = createContext({
    withSimbian: false,
    showAlert: () => {},
    alert: false,
    hideAlert: () => {},
    toggleSimbian: () => {},
});
