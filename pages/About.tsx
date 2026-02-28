import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { Clock, ShieldCheck, Sparkles, HeartHandshake } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="pt-24 md:pt-32 min-h-screen flex flex-col">
      {/* BLOQUE 1: Identidad Narrativa */}
      <section className="bg-gray-50 py-24 md:py-32 px-6">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-20 items-start max-w-7xl mx-auto">

            {/* Columna de Texto (con Imagen intercalada solo en móvil) */}
            <div className="flex flex-col gap-8">
              {/* Bloque Texto 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col items-start text-left gap-8"
              >
                <h1 className="font-serif italic text-stone-900 text-3xl md:text-5xl lg:text-6xl tracking-tight leading-tight">
                  La tranquilidad de un trabajo bien ejecutado
                </h1>
                <p className="font-sans font-medium text-stone-600 text-base md:text-lg lg:text-xl leading-relaxed tracking-wide">
                  En Reformas Maki entendemos que tu hogar es tu activo más valioso. No somos una gran constructora distante; somos un equipo especializado que cree en el valor de la cercanía y el control directo de cada fase de la obra.
                </p>
                <p className="font-sans font-medium text-stone-600 text-base md:text-lg lg:text-xl leading-relaxed tracking-wide">
                  Nuestra filosofía es simple: aplicar el rigor técnico de los grandes proyectos con la dedicación y el cuidado minucioso que solo una empresa pequeña puede garantizar.
                </p>
              </motion.div>

              {/* Imagen - Solo visible en móvil, intercalada */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="md:hidden relative aspect-[4/5] w-full overflow-hidden bg-stone-200 shadow-xl"
              >
                <img
                  src="/assets/images/exterior.webp"
                  alt="Exterior de obra ejecutada por Reformas Maki"
                  className="absolute inset-0 w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
                />
              </motion.div>

              {/* Bloque Texto 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="flex flex-col items-start text-left gap-8"
              >
                <p className="font-sans font-medium text-stone-600 text-base md:text-lg lg:text-xl leading-relaxed tracking-wide">
                  Nuestra reputación no se construye con promesas, sino con llaves entregadas a tiempo y presupuestos cumplidos sin desviaciones. Somos el equipo que responde, el que está a pie de obra y el que garantiza que su inversión se transforme en un hogar impecable.
                </p>
              </motion.div>
            </div>

            {/* Imagen - Solo visible en escritorio, columna derecha */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="hidden md:block relative aspect-[4/5] md:aspect-[3/4] w-full overflow-hidden bg-stone-200 shadow-xl mt-0 md:mt-2"
            >
              <img
                src="/assets/images/exterior.webp"
                alt="Exterior de obra ejecutada por Reformas Maki"
                className="absolute inset-0 w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
              />
            </motion.div>

          </div>
        </Container>
      </section>

      {/* BLOQUE 2: Nuestros Valores */}
      <section className="bg-white py-24 md:py-32 px-6 flex-grow flex flex-col">
        <Container className="flex-grow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center text-center mb-16"
          >
            <h2 className="font-serif italic text-stone-900 text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight mb-4">
              Nuestros Valores
            </h2>
            <p className="font-sans text-stone-600 text-base md:text-lg max-w-2xl">
              Nuestros valores se reflejan en cada obra (y en la confianza de quienes ya viven en ellas).
            </p>
          </motion.div>

          {/* 4 Cards Together - Centered and Compacted */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto w-full">

            {/* Card 1: Trato cercano */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white border border-stone-300 hover:border-[#2D3949] rounded-none py-12 px-8 flex flex-col items-center text-center gap-6 transition-all duration-300 w-full group"
            >
              <HeartHandshake className="w-16 h-16 text-[#2D3949]" strokeWidth={1.5} />
              <h3 className="font-serif font-bold text-[#2D3949] text-xl tracking-tight leading-tight">
                Trato cercano
              </h3>
              <p className="font-sans text-stone-600 leading-relaxed text-sm">
                Asesoramos con honestidad y resolvemos tus dudas directamente. Valoramos las relaciones de confianza.
              </p>
            </motion.div>

            {/* Card 2: Rapidez */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white border border-stone-300 hover:border-[#2D3949] rounded-none py-12 px-8 flex flex-col items-center text-center gap-6 transition-all duration-300 w-full group"
            >
              <Clock className="w-16 h-16 text-[#2D3949]" strokeWidth={1.5} />
              <h3 className="font-serif font-bold text-[#2D3949] text-xl tracking-tight leading-tight">
                Rapidez
              </h3>
              <p className="font-sans text-stone-600 leading-relaxed text-sm">
                Ritmo ágil y eficiente para cumplir los plazos pactados sin sacrificar nunca la calidad del acabado.
              </p>
            </motion.div>

            {/* Card 3: Transparencia */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white border border-stone-300 hover:border-[#2D3949] rounded-none py-12 px-8 flex flex-col items-center text-center gap-6 transition-all duration-300 w-full group"
            >
              <ShieldCheck className="w-16 h-16 text-[#2D3949]" strokeWidth={1.5} />
              <h3 className="font-serif font-bold text-[#2D3949] text-xl tracking-tight leading-tight">
                Transparencia
              </h3>
              <p className="font-sans text-stone-600 leading-relaxed text-sm">
                Documentamos fases y brindamos presupuestos cerrados. Confianza sobre planos claros y palabra.
              </p>
            </motion.div>

            {/* Card 4: Limpieza */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white border border-stone-300 hover:border-[#2D3949] rounded-none py-12 px-8 flex flex-col items-center text-center gap-6 transition-all duration-300 w-full group"
            >
              <Sparkles className="w-16 h-16 text-[#2D3949]" strokeWidth={1.5} />
              <h3 className="font-serif font-bold text-[#2D3949] text-xl tracking-tight leading-tight">
                Limpieza
              </h3>
              <p className="font-sans text-stone-600 leading-relaxed text-sm">
                Dejamos cada espacio recogido y protegido con el mayor rigor profesional para minimizar molestias.
              </p>
            </motion.div>

          </div>
        </Container>
      </section>

      {/* BLOQUE 3: CTA con Fondo de Imagen */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/sillón_azul2.webp"
            alt="Interiorismo por Reformas Maki"
            className="w-full h-full object-cover object-right md:object-center"
          />
          <div className="absolute inset-0 bg-stone-900/40 backdrop-blur-[2px]"></div>
        </div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h2 className="font-serif italic text-white text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1] mb-8">
              Dale a tu hogar el carácter que merece.
            </h2>
            <p className="font-sans text-white/80 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl">
              Transformamos espacios con la precisión y el cuidado que solo un equipo propio puede garantizar. Sin intermediarios, con total transparencia y a un solo mensaje de distancia.
            </p>
            <a
              href="https://wa.me/34685620822?text=Hola,%20vengo%20de%20la%20web,%20me%20gustaria%20pedir%20un%20presupuesto%20personalizado!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-stone-900 px-10 py-5 font-sans font-bold uppercase tracking-[0.2em] text-[11px] md:text-xs hover:bg-[#2D3949] hover:text-white transition-all duration-500 shadow-xl"
            >
              Hablar con nosotros
            </a>
          </motion.div>
        </Container>
      </section>

    </div>
  );
};
