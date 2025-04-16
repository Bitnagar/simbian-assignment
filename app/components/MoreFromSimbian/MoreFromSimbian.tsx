import { useAnimate, useInView } from "motion/react";
import { useEffect } from "react";
import { CheckIcon } from "../summaries/WithSimbianSummary";

export const MoreFromSimbian = () => {
    const [scope, animate] = useAnimate();
    const isInView = useInView(scope, {
        once: true,
        margin: "100% 100px -50px 0px",
    });

    useEffect(() => {
        if (isInView) {
            animate(
                scope.current,
                { opacity: 1 },
                { ease: "linear", delay: 0.1 }
            );

            animate(
                ".div1",
                { opacity: [0, 1] },
                { ease: "easeOut", duration: 0.6, delay: 0.2 }
            );

            // Feature blocks animations with staggered delays
            animate(
                ".div2",
                { opacity: [0, 1] },
                { ease: "easeOut", duration: 0.6, delay: 0.6 }
            );
            animate(
                ".div3",
                { opacity: [0, 1] },
                { ease: "easeOut", duration: 0.6, delay: 1.0 }
            );
            animate(
                ".div4",
                { opacity: [0, 1] },
                { ease: "easeOut", duration: 0.6, delay: 1.4 }
            );
            animate(
                ".div5",
                { opacity: [0, 1] },
                { ease: "easeOut", duration: 0.6, delay: 1.8 }
            );
            animate(
                ".div6",
                { opacity: [0, 1] },
                { ease: "easeOut", duration: 0.6, delay: 2.2 }
            );
        }
    }, [isInView, animate, scope]);

    return (
        <div
            ref={scope}
            className="parent min-h-screen opacity-0 flex flex-col gap-10 items-center justify-center mt-10"
        >
            <div className="div1 text-6xl text-center lg:text-left lg:text-8xl text-blue-200 lg:max-w-min font-semibold place-self-center opacity-0">
                Simbian Does More Than You Think
            </div>
            <div className="div2 w-full flex gap-2 place-self-center border border-blue-700 rounded-lg p-4 opacity-0">
                <CheckIcon />
                <p className="font-medium">
                    Triaged & Reported – SOC Agent handled investigation and
                    reporting
                </p>
            </div>
            <div className="div3 w-full lg:w-fit flex gap-2 place-self-center border border-violet-700 rounded-lg p-4 opacity-0">
                <CheckIcon />
                <p className="font-medium">
                    Automated Response – Incident automatically contained
                </p>
            </div>
            <div className="div4 w-full lg:w-fit flex gap-2 place-self-center border border-green-700 rounded-lg p-4 opacity-0">
                <CheckIcon />
                <p className="font-medium">
                    Comprehensive Analysis – AI recognized patterns
                </p>
            </div>
            <div className="div5 w-full lg:w-fit flex gap-2 place-self-center border border-pink-700 rounded-lg p-4 opacity-0">
                <CheckIcon />
                <p className="font-medium">
                    Accurate Detection – Zero false positives
                </p>
            </div>
            <div className="div6 w-full lg:w-fit flex gap-2 place-self-center border border-orange-700 rounded-lg p-4 opacity-0">
                <CheckIcon />
                <p className="font-medium">
                    24/7 Coverage – No analyst fatigue
                </p>
            </div>
        </div>
    );
};
