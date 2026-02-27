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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start max-w-7xl mx-auto">

            {/* Left Column - Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-start text-left gap-8"
            >
              <h1 className="font-display font-bold text-stone-900 text-2xl md:text-3xl lg:text-4xl tracking-tight leading-tight uppercase">
                La tranquilidad de un trabajo bien ejecutado
              </h1>
              <p className="font-sans font-medium text-stone-600 text-base md:text-lg lg:text-xl leading-relaxed tracking-wide">
                En Reformas Maki entendemos que tu hogar es tu activo más valioso. No somos una gran constructora distante; somos un equipo especializado que cree en el valor de la cercanía y el control directo de cada fase de la obra.
              </p>
              <p className="font-sans font-medium text-stone-600 text-base md:text-lg lg:text-xl leading-relaxed tracking-wide">
                Nuestra filosofía es simple: aplicar el rigor técnico de los grandes proyectos con la dedicación y el cuidado minucioso que solo una empresa pequeña puede garantizar.
              </p>
              <p className="font-sans font-medium text-stone-600 text-base md:text-lg lg:text-xl leading-relaxed tracking-wide">
                Nuestra reputación no se construye con promesas, sino con llaves entregadas a tiempo y presupuestos cumplidos sin desviaciones. Somos el equipo que responde, el que está a pie de obra y el que garantiza que su inversión se transforme en un hogar impecable.
              </p>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative aspect-[4/5] md:aspect-[3/4] w-full overflow-hidden bg-stone-200 shadow-xl mt-0 md:mt-2"
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
            <h2 className="font-display font-bold text-stone-900 text-xl md:text-2xl lg:text-3xl tracking-tight leading-tight uppercase">
              Nuestros Valores
            </h2>
          </motion.div>

          {/* 4 Cards Together - Centered and Compacted */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto w-full">

            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white border border-[#2D3949] rounded-none shadow-lg py-8 px-6 flex flex-col items-center text-center gap-3 hover:shadow-xl transition-shadow w-full"
            >
              <Clock className="w-6 h-6 text-[#1A41DB]" strokeWidth={2} />
              <h3 className="font-display font-bold text-stone-900 text-base lg:text-sm xl:text-base uppercase tracking-wide">
                Rapidez
              </h3>
              <p className="font-sans text-stone-600 leading-relaxed text-sm lg:text-xs xl:text-sm">
                Ritmo ágil y eficiente para cumplir los plazos pactados sin sacrificar nunca la calidad del acabado.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white border border-[#2D3949] rounded-none shadow-lg py-8 px-6 flex flex-col items-center text-center gap-3 hover:shadow-xl transition-shadow w-full"
            >
              <Sparkles className="w-6 h-6 text-[#1A41DB]" strokeWidth={2} />
              <h3 className="font-display font-bold text-stone-900 text-base lg:text-sm xl:text-base uppercase tracking-wide">
                Limpieza
              </h3>
              <p className="font-sans text-stone-600 leading-relaxed text-sm lg:text-xs xl:text-sm">
                Dejamos cada espacio recogido y protegido con el mayor rigor profesional para minimizar molestias.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white border border-[#2D3949] rounded-none shadow-lg py-8 px-6 flex flex-col items-center text-center gap-3 hover:shadow-xl transition-shadow w-full"
            >
              <ShieldCheck className="w-6 h-6 text-[#1A41DB]" strokeWidth={2} />
              <h3 className="font-display font-bold text-stone-900 text-base lg:text-sm xl:text-base uppercase tracking-wide">
                Transparencia
              </h3>
              <p className="font-sans text-stone-600 leading-relaxed text-sm lg:text-xs xl:text-sm">
                Documentamos fases y brindamos presupuestos cerrados. Confianza sobre planos claros y palabra.
              </p>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white border border-[#2D3949] rounded-none shadow-lg py-8 px-6 flex flex-col items-center text-center gap-3 hover:shadow-xl transition-shadow w-full"
            >
              <HeartHandshake className="w-6 h-6 text-[#1A41DB]" strokeWidth={2} />
              <h3 className="font-display font-bold text-stone-900 text-base lg:text-sm xl:text-base uppercase tracking-wide">
                Trato Cercano
              </h3>
              <p className="font-sans text-stone-600 leading-relaxed text-sm lg:text-xs xl:text-sm">
                Asesoramos con honestidad y resolvemos tus dudas directamente. Valoramos las relaciones de confianza.
              </p>
            </motion.div>

          </div>
        </Container>
      </section>

    </div>
  );
};
