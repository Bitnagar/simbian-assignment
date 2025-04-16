import { AnimationStateContext } from "@/app/contexts/contexts";
import { cn } from "@/app/utils/utils";
import {
    AnimatePresence,
    useAnimate,
    useMotionValue,
    useMotionValueEvent,
    motion,
} from "motion/react";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

export function ActiveThreats() {
    const { alert, withSimbian } = useContext(AnimationStateContext);
    const [scope, animate] = useAnimate();
    const countMotionValue = useMotionValue(0);
    const [displayCount, setDisplayCount] = useState(0);

    useMotionValueEvent(countMotionValue, "change", (latest) => {
        setDisplayCount(Math.round(latest));
    });

    useEffect(() => {
        animate(scope.current, { opacity: 1 }, { ease: "linear", delay: 0.1 });
        animate("#alert-1", { opacity: 1 }, { ease: "linear", delay: 0.6 });
        if (!alert) {
            animate("#alert-3", { opacity: 0 }, { ease: "linear", delay: 1.2 });
            animate("#alert-2", { opacity: 0 }, { ease: "linear", delay: 1.8 });
            animate(countMotionValue, 1, {
                delay: 0.6,
                ease: "linear",
            });
            animate("#simbian-logo", { opacity: 0 }, { ease: "linear" });
        }
        if (alert) {
            animate("#alert-2", { opacity: 1 }, { ease: "linear", delay: 1 });
            animate("#alert-3", { opacity: 1 }, { ease: "linear", delay: 1.4 });
            animate("#alert-4", { opacity: 1 }, { ease: "linear", delay: 1.8 });
            animate("#alert-5", { opacity: 1 }, { ease: "linear", delay: 2.2 });
            animate(countMotionValue, 5, {
                delay: 0.6,
                duration: 2.2,
                ease: "linear",
            });
            animate("#simbian-logo", { opacity: 0 }, { ease: "linear" });
        }
        if (withSimbian) {
            animate("#alert-1", { opacity: 0 }, { ease: "linear", delay: 1 });
            animate("#alert-2", { opacity: 0 }, { ease: "linear", delay: 1.2 });
            animate("#alert-3", { opacity: 0 }, { ease: "linear", delay: 1.4 });
            animate("#alert-4", { opacity: 0 }, { ease: "linear", delay: 1.4 });
            animate("#alert-5", { opacity: 0 }, { ease: "linear", delay: 1.4 });
            animate(countMotionValue, 0, {
                delay: 1,
                ease: "linear",
            });
            animate(
                "#simbian-logo",
                { opacity: 1 },
                { ease: "linear", delay: 3, duration: 1.2 }
            );
        }
    }, [alert, animate, countMotionValue, scope, withSimbian]);

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                ref={scope}
                className={cn(
                    "relative lg:place-self-end md:col-span-2 lg:col-span-1 opacity-0 flex flex-col gap-4 bg-stone-900 border border-white/10 shadow-md rounded-2xl p-4 w-[300px] h-[380px] transition-colors duration-200",
                    {
                        "bg-red-900/50": alert,
                    }
                )}
            >
                <div
                    className={cn(
                        "h-full w-full border border-white/10 bg-stone-800 rounded-lg p-4 gap-3 flex flex-col transition-colors duration-200 overflow-y-auto",
                        {
                            "bg-red-900/40 ": alert,
                        }
                    )}
                >
                    <div
                        id="alert-1"
                        className={cn(
                            "opacity-0 w-full h-[30px] rounded-lg bg-stone-600 border shadow-lg border-white/10 transition-colors duration-200 mb-2",
                            {
                                "bg-red-800/50": alert,
                            }
                        )}
                    />
                    <div
                        id="alert-2"
                        className={cn(
                            "opacity-0 w-full h-[30px] rounded-lg bg-stone-600 border shadow-lg border-white/10 transition-colors duration-200 mb-2",
                            {
                                "bg-red-800/50": alert,
                            }
                        )}
                    />
                    <div
                        id="alert-3"
                        className={cn(
                            "opacity-0 w-full h-[30px] rounded-lg bg-stone-600 border shadow-lg border-white/10 transition-colors duration-200 mb-2",
                            {
                                "bg-red-800/50": alert,
                            }
                        )}
                    />
                    <div
                        id="alert-4"
                        className={cn(
                            "opacity-0 w-full h-[30px] rounded-lg bg-stone-600 border shadow-lg border-white/10 transition-colors duration-200 mb-2",
                            {
                                "bg-red-800/50": alert,
                            }
                        )}
                    />
                    <div
                        id="alert-5"
                        className={cn(
                            "opacity-0 w-full h-[30px] rounded-lg bg-stone-600 border shadow-lg border-white/10 transition-colors duration-200 mb-2",
                            {
                                "bg-red-800/50": alert,
                            }
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
                        Active Threats
                    </h1>
                    <h1
                        className={cn("", {
                            "text-green-500": withSimbian,
                        })}
                    >
                        {displayCount}
                    </h1>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
