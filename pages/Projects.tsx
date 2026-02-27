import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';

export const Projects: React.FC = () => {
  return (
    <section className="relative z-10 bg-[#F9FAFB] pt-32 md:pt-40 pb-32 md:pb-48 px-6 min-h-screen">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl flex flex-col items-start text-left gap-8"
        >
          <h1 className="font-display font-bold text-stone-900 text-2xl md:text-3xl lg:text-4xl tracking-tight leading-tight uppercase">
            Nuestra trayectoria paso a paso.
          </h1>

          <p className="font-sans font-medium text-stone-600 text-base md:text-lg lg:text-xl leading-relaxed tracking-wide">
            Creemos en la transparencia de mostrar lo que hacemos cada día, sin filtros ni puestas en escena. Aquí encontrarás ejemplos reales de reformas de baños, cocinas y renovaciones exteriores que ya disfrutan nuestros clientes.
          </p>

          <p className="font-sans font-medium text-stone-600 text-base md:text-lg lg:text-xl leading-relaxed tracking-wide">
            No son imágenes de catálogo ni fotografías de estudio; son fotos tomadas a pie de obra por nuestro propio equipo al terminar la jornada. Preferimos mostrarte la realidad de un trabajo bien ejecutado que la perfección artificial de un render. Para nosotros, la mejor prueba de calidad no es una foto profesional, sino la satisfacción de los clientes que nos han permitido entrar en su casa y que hoy nos recomiendan. Es la dedicación y la cercanía que solo una empresa pequeña, que cuida cada proyecto como si fuera el único, puede garantizar.
          </p>
        </motion.div>
      </Container>
    </section>
  );
};