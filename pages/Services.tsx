import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { ChevronDown, ChevronUp } from 'lucide-react';

const SERVICES_DATA = [
  {
    title: "Servicio Técnico 1 (Placeholder)",
    content: "Descripción detallada del primer servicio. Aquí explicaremos los procesos, materiales y garantías específicas que definen la calidad de este trabajo en particular."
  },
  {
    title: "Servicio Técnico 2 (Placeholder)",
    content: "Descripción detallada del segundo servicio. Aquí explicaremos los procesos, materiales y garantías específicas que definen la calidad de este trabajo en particular."
  },
  {
    title: "Servicio Técnico 3 (Placeholder)",
    content: "Descripción detallada del tercer servicio. Aquí explicaremos los procesos, materiales y garantías específicas que definen la calidad de este trabajo en particular."
  },
  {
    title: "Servicio Técnico 4 (Placeholder)",
    content: "Descripción detallada del cuarto servicio. Aquí explicaremos los procesos, materiales y garantías específicas que definen la calidad de este trabajo en particular."
  },
  {
    title: "Servicio Técnico 5 (Placeholder)",
    content: "Descripción detallada del quinto servicio. Aquí explicaremos los procesos, materiales y garantías específicas que definen la calidad de este trabajo en particular."
  }
];

export const Services: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Open the first one by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-24 md:pt-32 min-h-screen flex flex-col bg-white">

      {/* BLOQUE 1: Encabezado Técnico */}
      <section className="bg-white py-24 md:py-32 px-6">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start text-left"
          >
            <h1 className="font-display font-bold text-stone-900 text-2xl md:text-3xl lg:text-4xl tracking-tight leading-tight uppercase">
              Especialidades y Soluciones Técnicas
            </h1>
          </motion.div>
        </Container>
      </section>

      {/* BLOQUE 3: Acordeón de Especialidades (Sección Azul) */}
      <section className="bg-[#1A41DB] py-24 md:py-32 px-6 flex-grow">
        <Container className="max-w-4xl mx-auto">
          <div className="flex flex-col border-t border-white/20">
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
                  className="border-b border-white/20"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex justify-between items-center py-8 text-left group focus:outline-none"
                  >
                    <div className="flex items-center gap-6 md:gap-8 flex-grow">
                      {/* Number */}
                      <span className="font-display font-bold text-xl md:text-2xl text-white/50 w-8 md:w-10">
                        {number}
                      </span>
                      {/* Title */}
                      <span className="font-display font-bold text-xl md:text-3xl text-white uppercase tracking-wide group-hover:text-gray-200 transition-colors duration-300">
                        {service.title}
                      </span>
                    </div>

                    {/* Icon */}
                    <span className="flex-shrink-0 text-white transform transition-transform duration-300 ml-4">
                      {isOpen ? <ChevronUp size={28} strokeWidth={1.5} /> : <ChevronDown size={28} strokeWidth={1.5} />}
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
                        <p className="text-gray-300 font-sans font-light text-base md:text-lg leading-relaxed max-w-2xl">
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

    </div>
  );
};