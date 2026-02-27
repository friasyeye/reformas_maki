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
  '/assets/images/bañoazul_3.webp',
  '/assets/images/comedor.webp',
  '/assets/images/exterior_casa.webp',
  '/assets/images/baño_m.webp',

  '/assets/images/cocina_lateral.webp',
  '/assets/images/ventana_comedor.webp',
  '/assets/images/exterior_escaleras.webp',
  '/assets/images/baño1_azul.webp',

  '/assets/images/baño_blanco.webp',
  '/assets/images/tejado (1).webp',
  '/assets/images/proceso.webp',
  '/assets/images/escalera_exteriormarrón.webp',

  '/assets/images/baño2.webp',
  '/assets/images/estructura.webp',
  '/assets/images/exterior.webp',
  '/assets/images/baño.webp',
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
            <h1 className="font-display font-bold text-stone-900 text-2xl md:text-3xl lg:text-4xl tracking-tight leading-tight uppercase">
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
                  alt={`Proyecto ${index + 1}`}
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
                  alt={`Proyecto ${selectedImageIndex + 1} de ${GALLERY_IMAGES.length}`}
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
    </>
  );
};