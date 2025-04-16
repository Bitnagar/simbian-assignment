import { AnimationStateContext } from "@/app/contexts/contexts";
import { cn } from "@/app/utils/utils";
import {
    AnimatePresence,
    useAnimate,
    useMotionValue,
    useMotionValueEvent,
} from "motion/react";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

export function WronglyClosedAlerts() {
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
        animate(countMotionValue, 35, {
            delay: 0.6,
            duration: 1.2,
            ease: "easeIn",
        });
        animate("#simbian-logo", { opacity: 0 }, { ease: "linear" });

        if (withSimbian) {
            animate("#alert-1", { opacity: 0 }, { ease: "linear", delay: 1 });
            animate("#alert-2", { opacity: 0 }, { ease: "linear", delay: 1.2 });
            animate("#alert-3", { opacity: 0 }, { ease: "linear", delay: 1.4 });
            animate("#alert-4", { opacity: 0 }, { ease: "linear", delay: 1.6 });
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
                className={cn(
                    "relative place-self-center opacity-0 flex flex-col gap-4 bg-stone-900 border border-white/10 shadow-md rounded-2xl p-4 w-[300px] h-[380px] transition-colors duration-200"
                )}
            >
                <div
                    className={cn(
                        "h-full w-full border border-white/10 bg-stone-800 rounded-lg p-4 gap-3 flex flex-col transition-colors duration-200 overflow-y-auto"
                    )}
                >
                    <div
                        id="alert-1"
                        className={cn(
                            "opacity-0 w-full h-[30px] rounded-lg bg-stone-600 border shadow-lg border-white/10 transition-colors duration-200 mb-2"
                        )}
                    />
                    <div
                        id="alert-2"
                        className={cn(
                            "opacity-0 w-full h-[30px] rounded-lg bg-stone-600 border shadow-lg border-white/10 transition-colors duration-200 mb-2"
                        )}
                    />
                    <div
                        id="alert-3"
                        className={cn(
                            "opacity-0 w-full h-[30px] rounded-lg bg-stone-600 border shadow-lg border-white/10 transition-colors duration-200 mb-2"
                        )}
                    />
                    <div
                        id="alert-4"
                        className={cn(
                            "opacity-0 w-full h-[30px] rounded-lg bg-stone-600 border shadow-lg border-white/10 transition-colors duration-200 mb-2"
                        )}
                    />

                    <div
                        id="simbian-logo"
                        className="opacity-0 absolute top-20 left-16"
                    >
                        <Image
                            src="/simbian-logo.png"
                            alt="logo"
                            width={180}
                            height={10}
                            className="grayscale brightness-90"
                        />
                    </div>
                </div>
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
            </div>
        </AnimatePresence>
    );
}
