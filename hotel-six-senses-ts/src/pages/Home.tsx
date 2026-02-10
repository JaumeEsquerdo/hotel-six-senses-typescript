import { HomeNav } from "@/components/HomeNav";
import { Onboarding } from "@/components/Onboarding.tsx";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, type Transition } from "framer-motion";

const Home = () => {
    const [showHome, setShowHome] = useState(false);

    const layoutTransition: Transition = {
        type: "tween",
        ease: "easeInOut",
        duration: 0.7, // Esto controla la lentitud del VIAJE al Home
    };

    //efecto delay para cambiar de onboarding inicial al home
    useEffect(() => {
        const onboardingDelay = setTimeout(() => {
            setShowHome(true);
        }, 4000);

        return () => clearTimeout(onboardingDelay);
    }, []);

    return (
        <>
            <AnimatePresence mode="wait">
                {!showHome ? (
                    <Onboarding />
                ) : (
                    <motion.div className="Home-img" key='home'
                        initial={{ opacity: 0.4 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0.2 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="Home-title">
                            <motion.h1
                                layoutId="main-title"
                                transition={layoutTransition}
                                className="Home-h1"
                            >
                                hotel Six Senses
                            </motion.h1>
                            <motion.h2
                                layoutId="sub-title"
                                transition={layoutTransition}
                                className="Home-h2"
                            >
                                <i>Ibiza</i>{" "}
                            </motion.h2>
                        </div>
                        <HomeNav />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Home;
