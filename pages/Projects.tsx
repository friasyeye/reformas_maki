import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const BENTO_CLASSES = [
  "col-span-2 row-span-2 md:col-span-2 md:row-span-2", // 0
  "col-span-1 row-span-1 md:col-span-1 md:row-span-1", // 1
  "col-span-1 row-span-1 md:col-span-1 md:row-span-2", // 2
  "col-span-2 row-span-1 md:col-span-1 md:row-span-1", // 3
  "col-span-1 row-span-1 md:col-span-2 md:row-span-1", // 4
  "col-span-1 row-span-1 md:col-span-1 md:row-span-2", // 5
  "col-span-1 row-span-1 md:col-span-1 md:row-span-1", // 6
  "col-span-1 row-span-1 md:col-span-2 md:row-span-2", // 7
  "col-span-2 row-span-2 md:col-span-1 md:row-span-1", // 8
  "col-span-1 row-span-1 md:col-span-1 md:row-span-1", // 9
  "col-span-1 row-span-1 md:col-span-2 md:row-span-1", // 10
  "col-span-1 row-span-1 md:col-span-1 md:row-span-2", // 11
  "col-span-1 row-span-1 md:col-span-1 md:row-span-1", // 12
  "col-span-2 row-span-1 md:col-span-2 md:row-span-1", // 13
  "col-span-1 row-span-1 md:col-span-1 md:row-span-1", // 14
  "col-span-1 row-span-1 md:col-span-1 md:row-span-1", // 15
];

const GALLERY_IMAGES = [
  '/assets/images/reformas-barcelona-banoazul-3-eixample.webp',
  '/assets/images/empresa-reformas-comedor-gracia.webp',
  '/assets/images/reforma-integral-exterior-casa-eixample.webp',
  '/assets/images/reformas-barcelona-bano-m-sarria.webp',

  '/assets/images/empresa-reformas-cocina-lateral-les-corts.webp',
  '/assets/images/reforma-integral-ventana-comedor-sarria.webp',
  '/assets/images/empresa-reformas-exterior-escaleras-montjuic.webp',
  '/assets/images/empresa-reformas-bano1-azul-gracia.webp',

  '/assets/images/empresa-reformas-bano-blanco-montjuic.webp',
  '/assets/images/reforma-integral-tejado-1-eixample.webp',
  '/assets/images/reformas-barcelona-proceso-sarria.webp',
  '/assets/images/reforma-integral-escalera-exteriormarron-eixample.webp',

  '/assets/images/reformas-barcelona-bano2-montjuic.webp',
  '/assets/images/reforma-integral-estructura-sants.webp',
  '/assets/images/reforma-integral-exterior-gracia.webp',
  '/assets/images/reformas-barcelona-bano-sants.webp',
];

export const Projects: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handleOpen = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleClose = () => {
    setSelectedImageIndex(null);
  };

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev! + 1) % GALLERY_IMAGES.length);
    }
  }, [selectedImageIndex]);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev! - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    }
  }, [selectedImageIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;

      switch (e.key) {
        case 'Escape':
          handleClose();
          break;
        case 'ArrowRight':
          handleNext();
          break;
        case 'ArrowLeft':
          handlePrev();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent scrolling when Lightbox is open
    if (selectedImageIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImageIndex, handleNext, handlePrev]);

  return (
    <>
      <section className="relative z-10 bg-[#F9FAFB] pt-32 md:pt-40 pb-32 md:pb-32 px-6 min-h-screen">
        <Container>
          {/* Intro Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl flex flex-col items-start text-left gap-8 mb-20"
          >
            <h1 className="font-serif italic text-stone-900 text-3xl md:text-5xl lg:text-6xl tracking-tight leading-tight">
              Nuestra trayectoria paso a paso
            </h1>

            <p className="font-sans font-medium text-stone-600 text-base md:text-lg lg:text-xl leading-relaxed tracking-wide">
              Creemos en la transparencia de mostrar lo que hacemos cada día, sin filtros ni puestas en escena. Aquí encontrarás ejemplos reales de reformas de baños, cocinas y renovaciones exteriores que ya disfrutan nuestros clientes.
            </p>

            <p className="font-sans font-medium text-stone-600 text-base md:text-lg lg:text-xl leading-relaxed tracking-wide">
              No son imágenes de catálogo ni fotografías de estudio; son fotos tomadas a pie de obra por nuestro propio equipo al terminar la jornada. Preferimos mostrarte la realidad de un trabajo bien ejecutado que la perfección artificial de un render. Para nosotros, la mejor prueba de calidad no es una foto profesional, sino la satisfacción de los clientes que nos han permitido entrar en su casa y que hoy nos recomiendan. Es la dedicación y la cercanía que solo una empresa pequeña, que cuida cada proyecto como si fuera el único, puede garantizar.
            </p>
          </motion.div>

          {/* Bento Grid Gallery - Asymmetric and Perfectly Configured */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 grid-flow-row-dense auto-rows-[160px] md:auto-rows-[250px]">
            {GALLERY_IMAGES.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (index % 8) * 0.05 }}
                className={`relative group cursor-pointer overflow-hidden rounded-none shadow-sm hover:shadow-xl transition-all duration-300 ${BENTO_CLASSES[index] || ''}`}
                onClick={() => handleOpen(index)}
              >
                <img
                  src={src}
                  alt={`Reforma de baño moderno en el barrio de Gràcia, Barcelona.`}
                  className="absolute inset-0 w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Subtle Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 z-10 pointer-events-none"></div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Full-Screen Interactive Lightbox */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
            onClick={handleClose}
          >
            {/* Top Bar (Counter & Close) */}
            <div className="absolute top-0 left-0 w-full flex justify-between items-center p-4 md:p-6 z-50">
              <span className="text-white/80 font-sans text-sm md:text-base tracking-widest font-medium">
                {selectedImageIndex + 1} / {GALLERY_IMAGES.length} FOTOS
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleClose();
                }}
                className="p-2 text-white/80 hover:text-white transition-colors bg-white/5 hover:bg-white/10 rounded-full"
                aria-label="Cerrar"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation Buttons (Desktop mostly) */}
            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 text-white/50 hover:text-white bg-black/20 hover:bg-black/50 backdrop-blur-md rounded-full transition-all z-50"
              aria-label="Anterior"
            >
              <ChevronLeft size={32} />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 text-white/50 hover:text-white bg-black/20 hover:bg-black/50 backdrop-blur-md rounded-full transition-all z-50"
              aria-label="Siguiente"
            >
              <ChevronRight size={32} />
            </button>

            {/* Image Container */}
            <div
              className="relative w-full h-full max-w-7xl max-h-[90vh] mx-auto flex items-center justify-center p-4 md:p-12"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedImageIndex}
                  src={GALLERY_IMAGES[selectedImageIndex]}
                  alt={`Construcción de obra nueva en el barrio de Eixample, Barcelona.`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="max-w-full max-h-full object-contain shadow-2xl rounded-sm"
                />
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* FINAL CTA SECTION - PROJECTS */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/reforma-integral-salon-azul-sarria.webp"
            alt="Reforma integral de piso en el barrio de Eixample, Barcelona."
            className="w-full h-full object-cover object-center"
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
              El primer paso para una reforma sin sorpresas.
            </h2>
            <p className="font-sans text-white/80 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl">
              Cuéntanos qué necesitas y te asesoraremos sobre la mejor solución técnica para tu espacio. Un proceso honesto, de tú a tú y con resultados impecables.
            </p>
            <a
              href="https://wa.me/34685620822?text=Hola,%20vengo%20de%20la%20web,%20me%20gustaria%20hablar%20de%20mi%20proyecto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-stone-900 px-10 py-5 font-sans font-bold uppercase tracking-[0.2em] text-[11px] md:text-xs hover:bg-[#2D3949] hover:text-white transition-all duration-500 shadow-xl"
            >
              Hablar con un técnico
            </a>
          </motion.div>
        </Container>
      </section>
    </>
  );
};