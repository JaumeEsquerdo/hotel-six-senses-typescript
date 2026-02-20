import { instalaciones } from "@/data/instalaciones";
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useScrollToTop } from "@/hooks/useScrollToTop";

interface PropsImg {
    srcDefault: string,
    srcHover: string
}

const ParallaxImage = ({ srcDefault, srcHover }: PropsImg) => {
    // 1. Referencia física al elemento para que Framer Motion sepa qué medir
    const ref = useRef(null);

    // 2. Escuchamos el scroll. 'target' es el elemento a observar.
    // 'offset' define: empieza cuando el tope de la imagen entra por abajo ('start end')
    // y termina cuando el final de la imagen sale por arriba ('end start').
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start']
    })

    // 3. Convertimos el progreso del scroll (0 a 1) en movimiento vertical (-30% a 30%).
    // Cuando el scroll es 0 (recién entra), la imagen sube un poco; cuando es 1, baja.
    const y = useTransform(scrollYProgress, [0, 1], ['-30%', '30%'])

    return (
        /* div estático para el efecto parallax */
        <div ref={ref} className="ImageInstalaciones-container" style={{ overflow: 'hidden', position: 'relative', aspectRatio: '16/9' }}>
            {/* motion.div más grande que el div padre, lo que hace que se pueda mover más allá del padre (aunq el padre oculte lo que sobresalga) */}
            <motion.div style={{ y, scale: 1.14, height: '100%', width: '100%' }}>
                <img className="ImageInstalaciones-default" src={srcDefault} alt="img instalacion 1" />
                <img className="ImageInstalaciones-hover" src={srcHover} alt="img instalacion 2" />
            </motion.div>
        </div>
    );
}





const Instalaciones = () => {
    /* reset de scroll para cuando entre en una hab individual no este el scroll bajo */
    useScrollToTop();

    return (

        <>
            <div className="GalleryInstalaciones">
                {instalaciones.map((inst, i) => (
                    <div key={inst.id} className={`GalleryInstalaciones-item ${inst.size} ${i % 2 === 0 ? 'left' : 'right'}`}>

                        <ParallaxImage srcDefault={inst.default} srcHover={inst.hover} />

                        <motion.div className="Image-legend"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            /* el margin -20px en viewport es para q se retrase la animación de `whileInView` hasta entrar 20px  */
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                        >
                            <span className="Legend-title">{inst.name} </span>
                            <p className="Legend-description">{inst.description} </p>
                        </motion.div>
                    </div>

                ))}

            </div>
        </>
    );
}

export default Instalaciones;