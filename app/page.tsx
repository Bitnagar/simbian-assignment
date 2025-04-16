"use client";

import Cards from "./components/cards/Cards";
import { Summaries } from "./components/summaries/Summaries";
import { useCallback, useState } from "react";
import { MoreFromSimbian } from "./components/MoreFromSimbian/MoreFromSimbian";
import { AnimationStateContext } from "./contexts/contexts";

// using a context provider so as to not do prop drilling
// withSimbian state enables the with Simbian section animation
export default function Home() {
    const [withSimbian, setWithSimbian] = useState(false);
    const [alert, setAlert] = useState(false);

    const showAlert = useCallback(() => setAlert(true), []);
    const hideAlert = useCallback(() => setAlert(false), []);
    const toggleSimbian = useCallback(
        () => setWithSimbian((prev) => !prev),
        []
    );

    return (
        <AnimationStateContext.Provider
            value={{
                withSimbian,
                alert,
                showAlert,
                hideAlert,
                toggleSimbian,
            }}
        >
            <div className="min-h-screen font-[family-name:var(--font-geist-sans)] flex flex-col xl:w-[110ch] py-5 gap-10 px-5">
                <h1 className="text-4xl font-bold text-blue-200 text-center mt-10 xl:text-left">
                    {withSimbian ? "With Simbian" : " Without Simbian"}
                </h1>
                <Summaries />
                <Cards />
            </div>
            <MoreFromSimbian />
        </AnimationStateContext.Provider>
    );
}
