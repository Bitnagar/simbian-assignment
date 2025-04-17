import { AnimationStateContext } from "@/app/contexts/contexts";
import {
    AnimatePresence,
    useAnimate,
    useMotionValue,
    useMotionValueEvent,
} from "motion/react";
import { useContext, useEffect, useState } from "react";
import SimbianLogo from "../common/SimbianLogo";
import CardHeading from "../common/CardHeading";

export function IgnoredThreats() {
    const { withSimbian } = useContext(AnimationStateContext);
    const [scope, animate] = useAnimate();
    const countMotionValue = useMotionValue(0);
    const [displayCount, setDisplayCount] = useState(0);

    useMotionValueEvent(countMotionValue, "change", (latest) => {
        setDisplayCount(Math.round(latest));
    });

    useEffect(() => {
        animate(scope.current, { opacity: 1 }, { ease: "linear", delay: 0.1 });
        animate("#alert-1", { opacity: 1 }, { ease: "linear", delay: 0.6 });
        animate("#alert-2", { opacity: 1 }, { ease: "linear", delay: 0.8 });
        animate("#alert-3", { opacity: 1 }, { ease: "linear", delay: 1 });
        animate("#alert-4", { opacity: 1 }, { ease: "linear", delay: 1.2 });
        animate("#alert-5", { opacity: 1 }, { ease: "linear", delay: 1.4 });
        animate(countMotionValue, 200, {
            delay: 0.6,
            duration: 1.2,
            ease: "easeIn",
        });
        animate("#simbian-logo", { opacity: 0 }, { ease: "linear" });

        // basically remove every alert from card and set the count to 0, same for every card
        if (withSimbian) {
            animate("#alert-1", { opacity: 0 }, { ease: "linear", delay: 1 });
            animate("#alert-2", { opacity: 0 }, { ease: "linear", delay: 1.2 });
            animate("#alert-3", { opacity: 0 }, { ease: "linear", delay: 1.4 });
            animate("#alert-4", { opacity: 0 }, { ease: "linear", delay: 1.6 });
            animate("#alert-5", { opacity: 0 }, { ease: "linear", delay: 1.8 });
            animate(countMotionValue, 0, {
                delay: 1,
                duration: 1.2,
                ease: "linear",
            });
            animate(
                "#simbian-logo",
                { opacity: 1 },
                { ease: "linear", delay: 3, duration: 1.2 }
            );
        }
    }, [animate, countMotionValue, scope, withSimbian]);

    return (
        <AnimatePresence>
            <div
                ref={scope}
                className="relative lg:place-self-start opacity-0 flex flex-col gap-4 bg-stone-900 border border-white/10 shadow-md rounded-2xl p-4 w-[300px] h-[380px] transition-colors duration-200"
            >
                <div className="h-full w-full border border-white/10 bg-stone-800 rounded-lg p-4 gap-3 flex flex-col transition-colors duration-200 overflow-y-auto">
                    <MockAlert id="alert-1" />
                    <MockAlert id="alert-2" />
                    <MockAlert id="alert-3" />
                    <MockAlert id="alert-4" />
                    <MockAlert id="alert-5" />
                    <SimbianLogo />
                </div>
                <CardHeading
                    displayCount={displayCount}
                    heading="Ignored Alerts"
                />
            </div>
        </AnimatePresence>
    );
}

function MockAlert({ id }: { id: string }) {
    return (
        <div
            id={id}
            className="opacity-0 w-full h-[30px] rounded-lg bg-stone-600 border shadow-lg border-white/10 transition-colors duration-200 mb-2"
        />
    );
}
