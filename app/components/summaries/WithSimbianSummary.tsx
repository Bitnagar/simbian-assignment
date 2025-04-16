import { useAnimate } from "motion/react";
import { useEffect } from "react";

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
            className="flex items-center gap-2 justify-between"
        >
            <div
                id="ws-1"
                className="opacity-0 flex items-center gap-2 border border-green-950 w-fit p-2 rounded-lg"
                style={{ transform: "translateY(20px)" }}
            >
                <CheckIcon />
                <p className="text-base text-green-500">
                    90% of alerts resolved automatically, 24/7
                </p>
            </div>
            <div
                id="ws-2"
                className="opacity-0 flex items-center gap-2 border border-green-950 w-fit p-2 rounded-lg"
                style={{ transform: "translateY(20px)" }}
            >
                <CheckIcon />
                <p className="text-base text-green-500">
                    Correlates alerts to your environment
                </p>
            </div>
            <div
                id="ws-3"
                className="opacity-0 flex items-center gap-2 border border-green-950 w-fit p-2 rounded-lg"
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

const CheckIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-green-500"
        >
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    );
};
