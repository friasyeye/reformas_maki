import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { Clock, ShieldCheck, Sparkles, HeartHandshake, ChevronDown, ChevronUp } from 'lucide-react';

const FAQ_DATA = [
  {
    question: "¿Realizáis reformas en todo Barcelona o solo en el barrio de Sants?",
    answer: "Nuestra sede está ubicada en Sants, lo que nos permite una gran agilidad para proyectos en el centro de la ciudad y distritos vecinos. No obstante, también nos desplazamos para realizar reformas integrales en poblaciones cercanas del área metropolitana, la zona del Vallès y poblaciones de la costa, adaptándonos siempre a las necesidades logísticas de cada obra."
  },
  {
    question: "¿Tenéis experiencia en la reforma de fincas antiguas en Sants?",
    answer: "Sí, conocemos bien la arquitectura de nuestro barrio y de Barcelona en general. Estamos acostumbrados a trabajar en edificios con solera, donde es fundamental respetar la estructura original mientras se modernizan las instalaciones de agua, luz y gas. Nos especializamos en transformar estos espacios para que ganen en luz y funcionalidad sin perder su esencia."
  },
  {
    question: "¿Qué factores influyen en el precio de una reforma integral?",
    answer: "El coste final depende de varios factores, principalmente del estado de conservación del inmueble y de la calidad de los acabados que elijas. No es lo mismo una actualización estética que una rehabilitación técnica profunda que incluya refuerzos estructurales o cambios en la distribución. Por ello, siempre realizamos una visita previa para ofrecer una valoración ajustada a la realidad de la vivienda."
  },
  {
    question: "¿Cuánto se suele tardar en reformar un piso completo?",
    answer: "Aunque cada proyecto es único, una reforma integral estándar suele llevar varios meses de ejecución. El plazo exacto dependerá de la complejidad de los trabajos (como derribos de tabiquería o renovación completa de baños y cocinas) y de la agilidad en la entrega de materiales. Nosotros te proporcionaremos un calendario estimado antes de empezar para que puedas planificarte."
  },
  {
    question: "¿Qué materiales recomendáis para una reforma duradera?",
    answer: "Buscamos siempre el equilibrio entre estética y resistencia. Hoy en día son muy populares las soluciones que aportan continuidad visual, como suelos de parqué laminado de alta resistencia o acabados en microcemento, que combinan muy bien con los elementos tradicionales de los pisos barceloneses. Lo ideal es elegir materiales de fácil mantenimiento que soporten bien el paso del tiempo."
  }
];

export const About: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* BLOQUE 1: Identidad Narrativa */}
      <section className="bg-gray-50 pt-32 md:pt-40 pb-24 md:pb-32 px-6">
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
                  src="/assets/images/reforma-integral-exterior-gracia.webp"
                  alt="Reforma de local comercial en el barrio de Les Corts, Barcelona."
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
                src="/assets/images/reforma-integral-exterior-gracia.webp"
                alt="Reforma de local comercial en el barrio de Gràcia, Barcelona."
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
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
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
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.3 }}
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
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.5 }}
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
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.7 }}
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

      {/* BLOQUE FAQ: Preguntas Frecuentes */}
      <section className="bg-gray-50 py-24 md:py-32 px-6">
        <Container className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center text-center mb-16"
          >
            <h2 className="font-serif italic text-stone-900 text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="font-sans text-stone-600 text-base md:text-lg max-w-2xl">
              Resolvemos algunas de las dudas más comunes a la hora de afrontar una reforma con nosotros.
            </p>
          </motion.div>

          <div className="flex flex-col border-t border-stone-200">
            {FAQ_DATA.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border-b border-stone-200"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center py-6 md:py-8 text-left group focus:outline-none"
                  >
                    <span className="font-serif font-bold text-lg md:text-xl text-stone-900 tracking-tight group-hover:text-[#2D3949] transition-colors duration-300 pr-8">
                      {faq.question}
                    </span>

                    <span className="flex-shrink-0 text-stone-400 transform transition-transform duration-300">
                      {isOpen ? <ChevronUp size={24} strokeWidth={1.5} /> : <ChevronDown size={24} strokeWidth={1.5} />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                          open: { opacity: 1, height: "auto", marginBottom: "2rem" },
                          collapsed: { opacity: 0, height: 0, marginBottom: "0rem" }
                        }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                      >
                        <p className="text-stone-600 font-sans font-medium text-base md:text-lg leading-relaxed max-w-3xl">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

    </div>
  );
};

