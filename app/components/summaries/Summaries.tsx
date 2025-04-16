import { useContext } from "react";
import WithoutSimbianSummary from "./WithoutSimbianSummary";
import WithSimbianSummary from "./WithSimbianSummary";
import { AnimationStateContext } from "@/app/contexts/contexts";

export function Summaries() {
    const { withSimbian } = useContext(AnimationStateContext);
    return (
        <>{withSimbian ? <WithSimbianSummary /> : <WithoutSimbianSummary />}</>
    );
}
