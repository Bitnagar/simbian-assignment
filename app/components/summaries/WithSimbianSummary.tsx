import { useAnimate } from "motion/react";
import { useEffect } from "react";
import CheckIcon from "../common/CheckIcon";

const WithSimbianSummary = () => {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        animate(
            "#ws-1",
            {
                opacity: 1,
                y: [20, 0],
            },
            {
                ease: "easeOut",
                delay: 0.6,
                duration: 0.5,
            }
        );
        animate(
            "#ws-2",
            {
                opacity: 1,
                y: [20, 0],
            },
            {
                ease: "easeOut",
                delay: 1,
                duration: 0.5,
            }
        );
        animate(
            "#ws-3",
            {
                opacity: 1,
                y: [20, 0],
            },
            {
                ease: "easeOut",
                delay: 1.4,
                duration: 0.5,
            }
        );
    }, [animate, scope]);

    return (
        <div
            ref={scope}
            className="flex flex-col md:flex-row items-center gap-4 lg:gap-2 justify-between"
        >
            <div
                id="ws-1"
                className="opacity-0 flex items-center justify-center gap-2 border border-green-950 w-full lg:w-fit p-2 rounded-lg"
                style={{ transform: "translateY(20px)" }}
            >
                <CheckIcon />
                <p className="text-base text-green-500">
                    90% of alerts resolved automatically, 24/7
                </p>
            </div>
            <div
                id="ws-2"
                className="opacity-0 flex items-center justify-center gap-2 border border-green-950  w-full lg:w-fit  p-2 rounded-lg"
                style={{ transform: "translateY(20px)" }}
            >
                <CheckIcon />
                <p className="text-base text-green-500">
                    Correlates alerts to your environment
                </p>
            </div>
            <div
                id="ws-3"
                className="opacity-0 flex items-center justify-center gap-2 border border-green-950  w-full lg:w-fit  p-2 rounded-lg"
                style={{ transform: "translateY(20px)" }}
            >
                <CheckIcon />
                <p className="text-base text-green-500">
                    Investigate every alert—no SOAR needed
                </p>
            </div>
        </div>
    );
};

export default WithSimbianSummary;
