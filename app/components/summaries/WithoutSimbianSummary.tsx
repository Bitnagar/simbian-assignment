import { useAnimate } from "motion/react";
import { useEffect } from "react";

const WithoutSimbianSummary = () => {
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
                className="opacity-0 flex justify-center gap-2 border border-red-950 w-full lg:w-fit p-2 rounded-lg"
                style={{ transform: "translateY(20px)" }}
            >
                <CircleX />
                <p className="text-base lg:text-[13px] text-red-500">
                    Wasting valuable analyst time on false positives
                </p>
            </div>
            <div
                id="ws-2"
                className="opacity-0 flex justify-center gap-2 border border-red-950 w-full lg:w-fit p-2 rounded-lg"
                style={{ transform: "translateY(20px)" }}
            >
                <CircleX />
                <p className="text-base lg:text-[13px] text-red-500">
                    Processing one alert at a time, missing the big picture
                </p>
            </div>
            <div
                id="ws-3"
                className="opacity-0 flex justify-center gap-2 border border-red-950 w-full lg:w-fit p-2 rounded-lg"
                style={{ transform: "translateY(20px)" }}
            >
                <CircleX />
                <p className="text-base lg:text-[13px] text-red-500">
                    More time fixing SOAR automation, less time on real threats
                </p>
            </div>
        </div>
    );
};

export default WithoutSimbianSummary;

const CircleX = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className=" stroke-red-500"
        >
            <circle
                cx="12"
                cy="12"
                r="10"
            />
            <path d="m15 9-6 6" />
            <path d="m9 9 6 6" />
        </svg>
    );
};
