import { HomeNav } from "@/components/HomeNav";
import { Onboarding } from "@/components/Onboarding.tsx";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, type Transition } from "framer-motion";

// fuera del componente para que se mantenga si no recarga la web
let hasPlayedOnboarding = false;

const Home = () => {
    const [showHome, setShowHome] = useState(hasPlayedOnboarding);

    const layoutTransition: Transition = {
        type: "tween",
        ease: "easeInOut",
        duration: 1.2, // Esto controla la lentitud del VIAJE del texto al Home
    };

    //efecto delay para cambiar de onboarding inicial al home
    useEffect(() => {
        let onboardingDelay: ReturnType<typeof setTimeout> | undefined
        if (!hasPlayedOnboarding) {

            onboardingDelay = setTimeout(() => {
                setShowHome(true);
                hasPlayedOnboarding = true;
            }, 4000);
        }
        return () => {
            if (onboardingDelay) clearTimeout(onboardingDelay);
        }
    }, []);

    return (
        <>
            <AnimatePresence
                mode="wait"
            >
                {!showHome ? (
                    <Onboarding />
                ) : (
                    <motion.div className="Home-img" key='home'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0.2 }}
                        transition={{ type: 'tween', ease: 'easeIn', duration: 0.4 }}
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
