import { AnimationStateContext } from "@/app/contexts/contexts";
import { cn } from "@/app/utils/utils";
import { useContext } from "react";

export default function CardHeading({
    displayCount,
}: {
    displayCount: number;
}) {
    const { withSimbian } = useContext(AnimationStateContext);

    return (
        <div className="flex gap-2 justify-between items-center font-medium text-lg w-full">
            <h1
                className={cn("", {
                    "text-green-500": withSimbian,
                })}
            >
                Wrongly Close Alerts
            </h1>
            <h1
                className={cn("", {
                    "text-green-500": withSimbian,
                })}
            >
                {displayCount}
            </h1>
        </div>
    );
}
