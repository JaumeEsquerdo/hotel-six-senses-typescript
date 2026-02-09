import "@/css/onboarding.css";
import { motion, type Variants, type Transition } from "framer-motion";

const variantsH1: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { delayChildren: 0.4, staggerChildren: 0.6 },
    },
};

const spansVariants: Variants = {
    hidden: { opacity: 0, y: 200 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const layoutTransition: Transition = {
    type: "tween",
    ease: "easeInOut",
    duration: 3.4, // Esto controla la lentitud del VIAJE al Home
};

export const Onboarding = () => {
    return (
        <div className="Onboarding">
            <div className="Onboarding-title">
                <motion.h1
                    layoutId="main-title"
                    variants={variantsH1}
                    initial="hidden"
                    animate="visible"
                    transition={layoutTransition}
                    className="Onboarding-h1"
                >
                    <motion.span className="Onboarding-span" variants={spansVariants}>
                        hotel
                    </motion.span>{" "}
                    <motion.span className="Onboarding-span" variants={spansVariants}>
                        Six
                    </motion.span>{" "}
                    <motion.span className="Onboarding-span" variants={spansVariants}>
                        Senses
                    </motion.span>
                </motion.h1>
                <motion.h2
                    layoutId="sub-title"
                    className="Onboarding-h2"
                    initial={{ opacity: 0, y: 200 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 2.2,
                        duration: 0.6,
                        ease: "easeOut",
                        layout: layoutTransition,
                    }}
                >
                    <i>Ibiza</i>{" "}
                </motion.h2>
            </div>
        </div>
    );
};
