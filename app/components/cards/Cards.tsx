import { useContext, useEffect } from "react";
import { ActiveThreats } from "./ActiveThreats";
import { IgnoredThreats } from "./IgnoredAlerts";
import { WronglyClosedAlerts } from "./WronglyClosedAlerts";
import { AnimationStateContext } from "@/app/contexts/contexts";

const Cards = () => {
    const { toggleSimbian, hideAlert, showAlert } = useContext(
        AnimationStateContext
    );

    // firstly all cards show the initial state.
    // after 4 seconds, alert state gets updated which in turn re-renders the Active Threats card
    // after 9 seconds, alert state gets reset and With Simbian state gets enabled
    useEffect(() => {
        const setTimeoutId = setTimeout(() => {
            showAlert();
        }, 4000);

        const setTimeoutId2 = setTimeout(() => {
            hideAlert();
            toggleSimbian();
        }, 9000);

        return () => {
            clearTimeout(setTimeoutId);
            clearTimeout(setTimeoutId2);
        };
    }, [hideAlert, showAlert, toggleSimbian]);

    return (
        <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 mb-20">
            <IgnoredThreats />
            <WronglyClosedAlerts />
            <ActiveThreats />
        </div>
    );
};

export default Cards;
