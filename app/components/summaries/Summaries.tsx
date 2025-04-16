import { useContext } from "react";
import WithoutSimbianSummary from "./WithoutSimbianSummary";
import WithSimbianSummary from "./WithSimbianSummary";
import { AnimateStateProvider } from "@/app/page";

export function Summaries() {
    const { withSimbian } = useContext(AnimateStateProvider);
    return (
        <>{withSimbian ? <WithSimbianSummary /> : <WithoutSimbianSummary />}</>
    );
}
