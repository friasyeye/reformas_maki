import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { FadeIn } from '../components/ui/FadeIn';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

export const Home: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <main className="w-full pt-12 md:pt-16">

      {/* HERO SECTION - REFINED LAYOUT */}
      <section className="relative w-full h-[800px] flex flex-col bg-white p-2">

        {/* Content Container - Centered */}
        <div className="relative w-full z-20">
          {/* Spacing container if needed */}
        </div>

        {/* 
           Image Container 
           - Starts closer to header (pt-20/28)
           - Tighter margins (px-2 md:px-3) = Larger Image
        */}
        <div className="relative w-full h-full">
          <div className="relative w-full h-full overflow-hidden shadow-sm">
            <img
              src="/assets/images/elegant-rendering-interior-design.jpg"
              alt="Reformas y Rehabilitaciones en Barcelona"
              className="w-full h-full object-cover object-center"
            />
            {/* Dark Overlay for Text Contrast */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Content Overlay - Centered Block with internal Left Alignment */}
            <div className="absolute inset-0 flex flex-col justify-center items-center p-6 md:p-12">
              <FadeIn className="flex flex-col w-fit mx-auto -mt-20 md:mt-0">

                {/* Text Group: Left Aligned relative to each other */}
                <div className="flex flex-col items-start text-left">
                  {/* Top Label */}
                  <span className="block text-white/90 text-[9px] md:text-[10px] font-sans tracking-[0.2em] mb-6 pl-1">
                    Reformas y rehabilitaciones en Barcelona
                  </span>

                  {/* Main Title - Left Aligned, Two Lines */}
                  <h1 className="
                      font-display 
                      font-medium 
                      text-white 
                      leading-tight
                      mb-10
                      text-3xl md:text-5xl lg:text-6xl
                      text-left
                  ">
                    Construimos tu proyecto soñado,<br />
                    sin complicación
                  </h1>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
      {/* EMPATHY BLOCK (Storytelling) */}
      <section className="bg-[#2D3949] pt-12 md:pt-16 pb-0 px-6">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto flex flex-col items-start gap-8"
          >
            <p className="font-sans font-medium text-white text-xl md:text-2xl lg:text-3xl leading-snug tracking-wide">
              A menudo, las personas que nos contactan por primera vez para valorar su proyecto se sienten inseguras. Se nota en sus preguntas y en esa barrera invisible que levantan al principio; están un poco a la defensiva. Es evidente que sus <strong className="font-bold">experiencias pasadas</strong> con las obras han sido, por decirlo suavemente, <strong className="font-bold">agotadoras y llenas de imprevistos</strong>. Ponen muchas cosas en duda y tienen un <strong className="font-bold">miedo real</strong> a perder el control de su inversión.
            </p>

            <p className="font-sans font-medium text-white text-xl md:text-2xl lg:text-3xl leading-snug tracking-wide">
              Es lógico que esto sea así, especialmente si alguna vez has vivido una reforma que se detuvo sin previo aviso o si los acabados finales no tuvieron nada que ver con lo que te prometieron sobre el plano. Es <strong className="font-bold">normal sentir esa preocupación</strong> y querer proteger tu hogar de la falta de profesionalidad que, desgraciadamente, abunda en este sector.
            </p>

            <p className="font-sans italic text-white/90 text-lg md:text-xl lg:text-2xl leading-snug tracking-wide mt-4">
              Pero ocurre una cosa curiosa.
            </p>

            <p className="font-sans font-light text-white/80 text-base md:text-lg lg:text-xl leading-relaxed mt-4">
              Desde que fundamos <strong className="font-medium text-white">Reformas Maki</strong>, hemos observado que, en cuanto nuestro equipo propio toma el control y el cronograma empieza a cumplirse día tras día, esa desconfianza inicial se disuelve. La tensión de los primeros presupuestos desaparece cuando el cliente comprueba que la palabra dada y el rigor técnico son nuestra única forma de trabajar.
            </p>

            <p className="font-sans font-medium text-white text-xl md:text-2xl lg:text-3xl leading-snug tracking-wide mt-4">
              Esa seguridad es la que hace que, al entregar las llaves, los nervios del primer día se transformen en frases como estas:
            </p>
          </motion.div>
        </Container>
      </section>

      {/* ASYMMETRIC TESTIMONIALS BLOCK (Social Proof) */}
      <section className="bg-[#2D3949] pb-16 md:pb-16 pt-6 md:pt-12 px-6 overflow-hidden">
        <Container>
          <div className="max-w-6xl mx-auto relative flex flex-col md:block gap-10 md:min-h-[700px]">

            {/* 1st Card - Top Left */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative md:absolute md:top-[0px] md:left-[5%] w-[88%] md:w-[400px] self-start bg-black/20 backdrop-blur-xl px-5 py-5 md:px-8 md:pt-12 md:pb-8 rounded-2xl shadow-xl border border-white/5"
            >
              <div className="flex flex-row md:block gap-4 items-start">
                <Quote className="text-white/30 w-7 h-7 md:w-10 md:h-10 mb-0 md:mb-4 flex-shrink-0" />
                <p className="font-sans italic text-white/95 text-sm md:text-lg leading-relaxed relative z-10">
                  Muy eficientes, rápidos, limpios, cumplidores y puntuales.
                </p>
              </div>
            </motion.div>

            {/* 2nd Card - Right (Top) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative md:absolute md:top-[100px] md:right-[5%] w-[88%] md:w-[420px] self-end bg-black/20 backdrop-blur-xl px-5 py-5 md:px-8 md:pt-12 md:pb-8 rounded-2xl shadow-xl border border-white/5"
            >
              <div className="flex flex-row md:block gap-4 items-start">
                <Quote className="text-white/30 w-7 h-7 md:w-10 md:h-10 mb-0 md:mb-4 flex-shrink-0" />
                <p className="font-sans italic text-white/95 text-sm md:text-lg leading-relaxed relative z-10">
                  Muy contentos por su limpieza, rapidez y nos ahorramos bastante comparándolo con otros presupuestos. Empresa pequeña pero eficiente (hemos tenido suerte)
                </p>
              </div>
            </motion.div>

            {/* 4th Card - Left (Middle) - Now with more protagonism */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative md:absolute md:top-[340px] md:left-[2%] w-[88%] md:w-[450px] self-start bg-black/20 backdrop-blur-xl px-5 py-5 md:px-8 md:pt-12 md:pb-8 rounded-2xl shadow-xl border border-white/5"
            >
              <div className="flex flex-row md:block gap-4 items-start">
                <Quote className="text-white/30 w-7 h-7 md:w-10 md:h-10 mb-0 md:mb-4 flex-shrink-0" />
                <p className="font-sans italic text-white/95 text-sm md:text-lg leading-relaxed relative z-10">
                  Super contentos con el trabajo. Son muy profesionales, nos han hecho varias cosas en casa y los acabados han sido genial. Calidad-precio de 10! Además son super simpáticos y agradables!
                </p>
              </div>
            </motion.div>

            {/* 3rd Card - Right (Bottom) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="relative md:absolute md:top-[600px] md:right-[0%] w-[88%] md:w-[460px] self-end bg-black/20 backdrop-blur-xl px-5 py-5 md:px-8 md:pt-12 md:pb-8 rounded-2xl shadow-xl border border-white/5"
            >
              <div className="flex flex-row md:block gap-4 items-start">
                <Quote className="text-white/30 w-7 h-7 md:w-10 md:h-10 mb-0 md:mb-4 flex-shrink-0" />
                <p className="font-sans italic text-white/95 text-sm md:text-lg leading-relaxed relative z-10">
                  Limpios, buenos acabados y con la profesionalidad.
                </p>
              </div>
            </motion.div>

            {/* Spacer to push content down below absolute positioned elements on desktop */}
            <div className="hidden md:block h-[820px] w-full invisible"></div>
          </div>

          {/* Micro-text at the end of the section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-20 md:mt-0 text-center pb-4 flex flex-col items-center gap-4"
          >
            <p className="font-sans text-[11px] md:text-[13px] text-white/40 tracking-wide">
              Esto es solo una pequeña parte.<br className="hidden md:block" /> Descubre por qué nos puntúan con la máxima excelencia pulsando aquí abajo.
            </p>
            <a
              href="https://www.google.es/maps/place/Reformas+Maki+Barcelona/@41.3746203,2.1288144,17z/data=!3m1!4b1!4m6!3m5!1s0x12a4996c82cda6d9:0x4d9ebf3674e2ed1e!8m2!3d41.3746163!4d2.1313947!16s%2Fg%2F11tjx19cml?hl=es&entry=ttu&g_ep=EgoyMDI2MDIyMy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-opacity hover:opacity-80"
            >
              <img
                src="/assets/images/g_reviews1.webp"
                alt="Google Reviews - Reformas Maki"
                className="h-6 md:h-7 w-auto object-contain grayscale opacity-70"
              />
            </a>
          </motion.div>
        </Container>
      </section>

      {/* PROPUESTA DE VALOR SECTION */}
      <section className="relative z-10 bg-[#F9FAFB] pt-16 md:pt-24 pb-32 md:pb-48 px-6 overflow-hidden">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl flex flex-col items-start text-left gap-8 relative -top-4 md:-top-8"
          >
            <h2 className="font-display font-bold text-stone-900 text-2xl md:text-3xl lg:text-4xl tracking-tight leading-tight uppercase">
              Lo que realmente hacemos por ti
            </h2>

            <p className="font-sans font-medium text-stone-600 text-base md:text-lg lg:text-xl leading-relaxed tracking-wide">
              Después de tantos años, hemos aprendido que una reforma no se define solo por los materiales, sino por la gestión impecable de quienes la ejecutan. No hacemos "arreglos", creamos espacios que duran toda la vida. Por eso, nos centramos en servicios donde nuestra capacidad técnica y nuestra atención al detalle marcan una diferencia real desde el primer día:
            </p>
          </motion.div>
        </Container>
      </section>

      {/* VISUAL BRIDGE SECTION (Overlapping Images) - Floating "Half and Half" */}
      <section className="relative z-30 -mt-24 md:-mt-40 lg:-mt-48 px-6 pt-12 pb-0 overflow-hidden">
        {/* Background layer: Top White/Gray, Bottom Blue - Adjusted for Mobile/Desktop */}
        <div className="absolute inset-x-0 top-0 h-full md:h-[41%] lg:h-[41%] bg-white md:bg-[#F9FAFB] z-0"></div>
        <div className="absolute inset-x-0 bottom-0 md:top-[41%] lg:top-[41%] bg-[#2D3949] z-0 hidden md:block"></div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-20">
            {[
              {
                title: "Reformas integrales",
                img: "/assets/images/reforma_s.webp",
                delay: 0.1
              },
              {
                title: "Rehabilitaciones",
                img: "/assets/images/fachada_s.webp",
                delay: 0.3
              },
              {
                title: "Obra Nueva",
                img: "/assets/images/obranueva_s.webp",
                delay: 0.5
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: item.delay, ease: "easeOut" }}
                className="flex flex-col group"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-none shadow-xl">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay Gradient for Text Readability */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>

                  {/* Title Inside Image (Overlay) */}
                  <h3 className="absolute bottom-0 left-0 w-full p-6 md:p-8 font-sans italic text-white text-lg md:text-xl lg:text-2xl leading-tight tracking-wide">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Link to all services */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 md:mt-16 text-left"
          >
            <Link
              to="/servicios"
              className="font-sans text-[11px] md:text-[13px] text-stone-500 md:text-white/40 tracking-wide hover:text-stone-900 md:hover:text-white transition-colors duration-300 uppercase"
            >
              Explorar todos nuestros servicios
            </Link>
          </motion.div>
        </Container>
      </section>

      {/* CONTINUITY SECTION - Continuity for the blue background */}
      <section className="relative z-20 bg-white md:bg-[#2D3949] pt-4 md:pt-16 pb-24 px-6 -mt-1">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Ready for future content integration */}
          </div>
        </Container>
      </section>


      {/* GARANTÍA Y EJECUCIÓN SECTION (Mirror Layout) */}
      <section className="py-24 md:py-32 bg-white">
        <Container>
          <FadeIn className="flex flex-col md:flex-row items-center gap-12 md:gap-20 lg:gap-24">

            {/* Text Column (Second on Mobile, First on Desktop - MIRROR LAYOUT) */}
            <div className="w-full md:w-1/2 order-2 md:order-1 flex flex-col justify-center">
              <div className="font-sans font-medium text-stone-600 text-base md:text-lg lg:text-xl leading-relaxed tracking-wide space-y-8 md:space-y-10">
                <p>
                  En Reformas Maki no dependemos de terceros. Disponer de nuestro propio equipo técnico y de obra nos permite eliminar las fisuras que suelen aparecer entre el plano y la construcción. Al asumir la responsabilidad total de cada fase, garantizamos que el rigor constructivo se mantenga intacto desde el primer trazo hasta el último remate.
                </p>
                <p>
                  Nuestra metodología no admite conflictos externos ni sorpresas: lo que proyectamos es exactamente lo que construimos.
                </p>

                <div className="space-y-6 mt-12">
                  <h3 className="font-display font-bold uppercase tracking-widest text-stone-900 text-lg md:text-xl">
                    Nuestro Compromiso:
                  </h3>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 flex-shrink-0"></span>
                      <span className="font-sans text-stone-600"><strong className="font-bold text-stone-900">Presupuesto Blindado:</strong> Sin desviaciones ni costes ocultos al finalizar.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 flex-shrink-0"></span>
                      <span className="font-sans text-stone-600"><strong className="font-bold text-stone-900">Cronograma Estricto:</strong> Cumplimiento riguroso de los plazos de entrega pactados.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 flex-shrink-0"></span>
                      <span className="font-sans text-stone-600"><strong className="font-bold text-stone-900">Equipo en Exclusiva:</strong> Profesionales propios enfocados al 100% en la excelencia de su obra.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 flex-shrink-0"></span>
                      <span className="font-sans text-stone-600"><strong className="font-bold text-stone-900">Gestión Directa:</strong> Comunicación constante y transparencia total sobre el avance del proyecto.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Image Column (First on Mobile, Second on Desktop) */}
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-stone-200">
                <img
                  src="/assets/images/office-chair-still-life.jpg"
                  alt="Oficina de diseño minimalista"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </FadeIn>
        </Container>
      </section>


      {/* FINAL CTA SECTION - LEFT ALIGNED STYLE */}
      <section className="py-24 md:py-32 bg-white px-6">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl flex flex-col items-start text-left gap-8"
          >
            <h2 className="font-display font-bold text-stone-900 text-2xl md:text-3xl lg:text-4xl tracking-tight leading-tight uppercase">
              ¿Hablamos de tu reforma?
            </h2>

            <p className="font-sans font-medium text-stone-600 text-base md:text-lg lg:text-xl leading-relaxed tracking-wide">
              Nos gusta involucrarnos de verdad en cada obra que aceptamos. Por eso, preferimos la comunicación directa y sin filtros. Si buscas un equipo que responda rápido, cuide los detalles y te acompañe en cada decisión, estamos a un solo mensaje de distancia.
            </p>

            <Button
              href="https://wa.me/34685620822?text=Hola,%20vengo%20de%20la%20web.%20Quiero%20un%20hablar%20sobre%20mi%20proyecto!"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 md:px-10 md:py-5 md:text-base w-full md:w-auto py-4 bg-[#2D3949] border-[#2D3949] hover:bg-[#1a232d]"
            >
              Escríbenos por WhatsApp
            </Button>
          </motion.div>
        </Container>
      </section>

    </main >
  );
};