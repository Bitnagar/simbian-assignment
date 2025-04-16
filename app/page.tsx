"use client";

import Cards from "./components/cards/Cards";
import { Summaries } from "./components/summaries/Summaries";
import { createContext, useState } from "react";

export const AnimateStateProvider = createContext({
    withSimbian: false,
    showAlert: () => {},
    alert: false,
    hideAlert: () => {},
    toggleSimbian: () => {},
});

export default function Home() {
    const [withSimbian, setWithSimbian] = useState(false);
    const [alert, setAlert] = useState(false);

    const showAlert = () => setAlert(true);
    const hideAlert = () => setAlert(false);
    const toggleSimbian = () => setWithSimbian((prev) => !prev);

    return (
        <AnimateStateProvider.Provider
            value={{
                withSimbian,
                alert,
                showAlert,
                hideAlert,
                toggleSimbian,
            }}
        >
            <div className="h-fit font-[family-name:var(--font-geist-sans)] flex flex-col w-[110ch] py-5 gap-10">
                <div className="flex flex-col gap-4 items-start mt-10">
                    <h1 className="text-4xl font-bold ">
                        {withSimbian ? "With Simbian" : " Without Simbian"}
                    </h1>
                </div>
                <Summaries />
                <Cards />
            </div>
        </AnimateStateProvider.Provider>
    );
}
