import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { ChevronDown, ChevronUp } from 'lucide-react';

const SERVICES_DATA = [
  {
    title: "Reformas Integrales",
    content: "Transformación total de tu vivienda o local. Coordinamos todos los gremios —albañilería, fontanería, electricidad y carpintería— para que solo tengas que preocuparte de elegir los acabados. Un proceso llave en mano con control absoluto de calidad. Nos encargamos de la gestión técnica para que el proyecto cumpla con la normativa vigente sin desviaciones presupuestarias. Supervisamos cada fase personalmente, asegurando que la ejecución de los planos sea milimétrica y los tiempos de entrega se cumplan con rigor profesional."
  },
  {
    title: "Reformas Parciales",
    content: "Renovaciones enfocadas en estancias clave como baños o cocinas. Optimizamos la distribución y actualizamos las instalaciones para mejorar la funcionalidad y el confort de tu hogar sin necesidad de una obra a gran escala. Implementamos soluciones de diseño inteligente que maximizan el espacio útil y mejoran la eficiencia energética de cada estancia. Seleccionamos materiales de alta resistencia que garantizan una estética contemporánea y una durabilidad superior frente al desgaste del uso diario."
  },
  {
    title: "Rehabilitaciones",
    content: "Especialistas en la recuperación y refuerzo de estructuras, fachadas y elementos comunes. Unimos el respeto por la edificación original con las soluciones técnicas más modernas para garantizar la seguridad y durabilidad del inmueble. Realizamos intervenciones estructurales precisas que devuelven la solidez al edificio protegiendo su esencia arquitectónica. Aplicamos tratamientos técnicos avanzados para sanear la envolvente del inmueble y prevenir patologías constructivas derivadas del paso del tiempo."
  },
  {
    title: "Obra Nueva",
    content: "Ejecución de proyectos desde los cimientos. Aplicamos rigor técnico y agilidad constructiva para materializar nuevas edificaciones, siguiendo fielmente las especificaciones del arquitecto y cumpliendo estrictamente con los plazos. Transformamos los planos en realidades sólidas mediante una comunicación técnica constante con la dirección facultativa del proyecto. Nuestro equipo domina las normativas de edificación actuales para asegurar una estructura impecable y una eficiencia térmica óptima desde la base."
  },
  {
    title: "Soluciones Técnicas",
    content: "Resolvemos problemas específicos: humedades, aislamientos térmicos/acústicos o instalaciones complejas. Diagnósticos precisos y ejecución especializada para asegurar que cada rincón de tu hogar funcione a la perfección. Identificamos el origen de las patologías mediante análisis técnicos minuciosos para aplicar la solución correctiva más eficiente y definitiva. Optimizamos el rendimiento de tus instalaciones para reducir costes de mantenimiento futuros y elevar el estándar de bienestar de tu vivienda."
  }
];

export const Services: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Open the first one by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-16 md:pt-20 min-h-screen flex flex-col bg-white">

      {/* BLOQUE 1: Encabezado Técnico */}
      <section className="bg-white pt-8 md:pt-12 pb-12 md:pb-20 px-6">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-20 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-start text-left"
            >
              <h1 className="font-serif italic text-stone-900 text-3xl md:text-5xl lg:text-6xl tracking-tight leading-tight mb-8">
                Especialidades y Soluciones Técnicas
              </h1>
              <p className="font-sans font-medium text-stone-600 text-base md:text-lg lg:text-xl leading-relaxed tracking-wide max-w-4xl">
                Entendemos que cada intervención técnica requiere un enfoque distinto según la naturaleza del proyecto. Por eso, hemos estructurado nuestra experiencia en cinco áreas clave que cubren desde la mejora puntual hasta la construcción total, aplicando en cada una el rigor constructivo y la precisión que tu inversión merece para garantizar resultados reales y duraderos.
              </p>

              {/* Imagen - Solo visible en móvil, debajo del texto */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="md:hidden mt-8 relative aspect-[4/3] w-full overflow-hidden bg-stone-100 shadow-xl"
              >
                <img
                  src="/assets/images/reformas-barcelona-comedor-pequeno-blanco-eixample.webp"
                  alt="Rehabilitación de fachada en el barrio de Gràcia, Barcelona."
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </motion.div>
            </motion.div>

            {/* Imagen - Solo visible en escritorio, columna derecha */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="hidden md:block relative aspect-[4/3] w-full overflow-hidden bg-stone-100 shadow-xl"
            >
              <img
                src="/assets/images/reformas-barcelona-comedor-pequeno-blanco-eixample.webp"
                alt="Reforma de baño moderno en el barrio de Gràcia, Barcelona."
                className="absolute inset-0 w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
              />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* BLOQUE 3: Acordeón de Especialidades (Fondo Blanco) */}
      <section className="bg-white pb-24 md:pb-32 px-6 flex-grow">
        <Container className="max-w-4xl mx-auto">
          <div className="flex flex-col border-t border-stone-200">
            {SERVICES_DATA.map((service, index) => {
              const isOpen = openIndex === index;
              const number = (index + 1).toString().padStart(2, '0');

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
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex justify-between items-center py-8 text-left group focus:outline-none"
                  >
                    <div className="flex items-center gap-6 md:gap-8 flex-grow">
                      {/* Number */}
                      <span className="font-outfit font-bold text-xl md:text-2xl text-stone-300 w-8 md:w-10">
                        {number}
                      </span>
                      {/* Title */}
                      <span className="font-serif font-bold text-xl md:text-3xl text-stone-900 tracking-tight group-hover:text-brand-accent transition-colors duration-300">
                        {service.title}
                      </span>
                    </div>

                    {/* Icon */}
                    <span className="flex-shrink-0 text-stone-400 transform transition-transform duration-300 ml-4">
                      {isOpen ? <ChevronUp size={24} strokeWidth={1.5} /> : <ChevronDown size={24} strokeWidth={1.5} />}
                    </span>
                  </button>

                  {/* Accordion Content via Framer Motion */}
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
                        className="overflow-hidden pl-14 md:pl-18"
                      >
                        <p className="text-stone-600 font-sans font-medium text-base md:text-lg leading-relaxed max-w-2xl">
                          {service.content}
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

      {/* BLOQUE CTA: Dale a tu hogar el carácter que merece */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/reforma-integral-sillon-azul2-montjuic.webp"
            alt="Reforma de local comercial en el barrio de Gràcia, Barcelona."
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
              href="https://wa.me/34685620822?text=Hola,%20vengo%20de%20la%20web,%20me%20gustaria%20hablar%20de%20mi%20proyecto"
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