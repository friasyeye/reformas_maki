import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { FadeIn } from '../components/ui/FadeIn';
import { Counter } from '../components/ui/Counter';
import { TESTIMONIALS } from '../constants';
import { Calendar, Building2 } from 'lucide-react';

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
    <main className="w-full overflow-hidden">

      {/* HERO SECTION - Updated to min-h-[100vh] to allow expansion on zoom */}
      <section className="relative min-h-[100vh] w-full flex flex-col pb-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/home.webp"
            alt="Reforma integral de salón moderno con diseño de lujo en Barcelona"
            className="w-full h-full object-cover object-[55%_center] md:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/40 to-transparent"></div>
        </div>

        {/* Content Layer */}
        <div className="relative z-10 w-full flex-grow flex flex-col justify-start">
          <Container className="w-full h-full flex flex-col md:block">
            <FadeIn className="
              /* MOBILE (Base): Original spacing */
              pt-28 w-full
              flex flex-col items-start
              
              /* TABLET (MD): Compact layout to prevent button cutoff */
              md:pt-32
              md:w-full md:max-w-2xl
              md:mr-auto md:ml-0
              md:translate-x-0
              
              /* DESKTOP (LG/XL): Restore original spacing but reduced */
              lg:pt-40 
              lg:max-w-none
            ">

              {/* 1. Main Title - ADAPTIVE TYPOGRAPHY */}
              <h1 className="
                  font-sans 
                  font-medium md:font-semibold   
                  uppercase 
                  tracking-[0.15em] 
                  text-white 
                  leading-tight
                  
                  /* Spacing: Compact on MD, restore on LG */
                  mb-6 md:mb-6 lg:mb-8
                  
                  text-3xl md:text-[3.25rem] lg:text-5xl xl:text-6xl
              ">
                <span className="hidden md:block md:whitespace-normal xl:whitespace-nowrap">
                  Reformas Integrales <br className="hidden xl:block" />
                  e Interiorismo
                </span>

                <span className="md:hidden flex flex-col items-start">
                  <span>REFORMAS</span>
                  <span>INTEGRALES E</span>
                  <span>INTERIORISMO</span>
                </span>
              </h1>

              {/* 2. Subtext - FIXED DESKTOP WRAPPING */}
              <p className="
                font-sans 
                font-light 
                text-stone-300 
                leading-relaxed 
                
                /* Spacing: Compact on MD, restore on LG */
                mb-2 md:mb-8 lg:mb-10 
                
                text-sm md:text-xl lg:text-xl
                md:max-w-2xl lg:max-w-4xl
              ">
                Transformamos tu visión en realidad a través de proyectos de interiorismo y reformas integrales de alta calidad en Barcelona.
                <span className="md:hidden lg:inline"> Creamos el escenario ideal para tu nuevo hogar.</span>
              </p>

              {/* 3. TRUST SIGNALS (INDICADORES) */}
              <div className="
                  flex items-center gap-6 md:gap-12 text-stone-300
                  
                  /* Spacing: Compact on MD, restore on LG */
                  mt-16 md:mt-8 lg:mt-8
                  mb-0 md:mb-8 lg:mb-8
              ">
                {/* Block 1 */}
                <div className="flex items-center gap-3 md:gap-5 group">
                  <div className="p-2 md:p-4 border border-white/20 rounded-full">
                    <Calendar className="w-4 h-4 md:w-8 md:h-8 stroke-[1] text-brand-accent" />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-lg md:text-4xl font-display font-bold text-white leading-none min-w-[3ch]">
                      <Counter value="+35" duration={4000} className="tabular-nums" />
                    </div>
                    <span className="text-[10px] md:text-sm uppercase tracking-widest text-stone-400">Años</span>
                  </div>
                </div>

                <div className="w-px h-8 md:h-12 bg-white/20"></div>

                {/* Block 2 */}
                <div className="flex items-center gap-3 md:gap-5 group">
                  <div className="p-2 md:p-4 border border-white/20 rounded-full">
                    <Building2 className="w-4 h-4 md:w-8 md:h-8 stroke-[1] text-brand-accent" />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-lg md:text-4xl font-display font-bold text-white leading-none min-w-[4ch]">
                      <Counter value="+314" duration={4500} className="tabular-nums" />
                    </div>
                    <span className="text-[10px] md:text-sm uppercase tracking-widest text-stone-400">Hogares</span>
                  </div>
                </div>
              </div>

              {/* 4. CTA Button - Redirects to WhatsApp instead of Contact Page */}
              <Button
                href="https://wa.me/34667804973?text=Hola,%20vengo%20de%20la%20web.%20Quiero%20un%20presupuesto%20personalizado!"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  !bg-brand-accent 
                  !text-stone-900 
                  !border-brand-accent
                  hover:!bg-white 
                  hover:!text-stone-900 
                  hover:!border-white
                  
                  /* MOBILE */
                  !px-6 !py-3 !text-[10px]
                  
                  /* TABLET (MD): Smaller, compact button to fit screen */
                  md:!px-10 md:!py-5 md:!text-sm
                  
                  /* DESKTOP (LG): Restore large button but controlled */
                  lg:!px-10 lg:!py-5 lg:!text-sm
                  
                  !font-bold
                  !uppercase
                  !tracking-[0.2em]
                  !rounded-none
                  shadow-lg
                  transition-all duration-300
                  
                  /* Spacing: Lift up on tablet */
                  mt-20 md:mt-10 lg:mt-12
                "
              >
                Calcular Presupuesto
              </Button>

            </FadeIn>
          </Container>
        </div>
      </section>

      {/* NEW SECTION: Value Proposition */}
      <section className="py-24 md:py-32 bg-white">
        <Container>
          <FadeIn className="flex flex-col items-center max-w-5xl mx-auto text-center">
            {/* Overline */}
            <span className="font-sans font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs text-stone-400 mb-6 md:mb-8">
              PERFECCIÓN
            </span>

            {/* Main Text */}
            <h2 className="font-display font-normal text-xl md:text-3xl lg:text-4xl leading-relaxed text-stone-900 mb-12">
              Servicio integral de reformas e interiorismo para quienes valoran la <strong className="font-bold">excelencia</strong>, el <strong className="font-bold">tiempo</strong> y la <strong className="font-bold">tranquilidad</strong>. Especialistas en la transformación de espacios con rigor técnico y diseño personalizado en Barcelona.
            </h2>

            {/* Button */}
            <Button
              href="https://wa.me/34667804973?text=Hola,%20quisiera%20solicitar%20una%20consulta%20privada."
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              className="px-8 py-4 text-xs md:text-sm tracking-[0.2em]"
            >
              SOLICITAR CONSULTA PRIVADA
            </Button>
          </FadeIn>
        </Container>
      </section>

      {/* NEW SECTION: Philosophy (Two Column) */}
      <section className="py-24 md:py-32 bg-stone-50">
        <Container>
          <FadeIn className="flex flex-col md:flex-row items-center gap-12 md:gap-20 lg:gap-24">

            {/* Image Column (First on Mobile, First on Desktop) */}
            <div className="w-full md:w-1/2 order-1 md:order-1">
              <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-stone-200">
                <img
                  src="/assets/images/baño_moderno.webp"
                  alt="Cocina de diseño moderna y elegante en Barcelona"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Column (Second on Mobile, Second on Desktop) */}
            <div className="w-full md:w-1/2 order-2 md:order-2 flex flex-col justify-center">
              <div className="font-sans font-light text-stone-600 text-base md:text-lg lg:text-xl leading-loose space-y-8 md:space-y-10">
                <p>
                  Tu hogar es mucho más que una obra; es el reflejo de tu historia y el lugar donde sucede lo que de verdad importa. El escenario de tus desayunos con calma, cenas con amigos y momentos de desconexión.
                </p>
                <p>
                  Entendemos la responsabilidad de entrar en tu casa para transformarla. Nuestra meta es que ese escenario sea tan sólido y acogedor como siempre imaginaste para tus próximos recuerdos.
                </p>
                <p>
                  Nos centramos en lo esencial: crear un espacio donde la armonía te reciba al llegar y sientas, al cerrar la puerta, que estás por fin en tu propio refugio.
                </p>
              </div>
            </div>

          </FadeIn>
        </Container>
      </section>

      {/* GARANTÍA Y EJECUCIÓN - Mirror of Philosophy Section */}
      <section className="py-24 md:py-32 bg-white">
        <Container>
          <FadeIn className="flex flex-col md:flex-row items-center gap-12 md:gap-20 lg:gap-24">

            {/* Text Column (Second on Mobile, First on Desktop - MIRROR LAYOUT) */}
            <div className="w-full md:w-1/2 order-2 md:order-1 flex flex-col justify-center">
              <div className="font-sans font-light text-stone-600 text-base md:text-lg lg:text-xl leading-loose space-y-8 md:space-y-10">
                <p>
                  Contamos con nuestro propio equipo de ejecución, lo que nos permite garantizar que lo que diseñamos sobre el papel se traslada con precisión milimétrica a la realidad de tu casa. Al gestionar nosotros mismos cada fase de la obra, eliminamos los conflictos habituales entre diseñador y constructor, asegurando que el rigor técnico que nos define desde hace 35 años esté presente en cada detalle del proyecto.
                </p>

                <div className="space-y-6">
                  <h3 className="font-display font-bold uppercase tracking-widest text-stone-900 text-lg md:text-xl">
                    GARANTÍA DE CONFIANZA RENOVAMARIN
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 flex-shrink-0"></span>
                      <span>Presupuesto cerrado sin sorpresas de última hora.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 flex-shrink-0"></span>
                      <span>Materiales premium certificados para durar.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 flex-shrink-0"></span>
                      <span>Cumplimiento riguroso de los plazos acordados.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 flex-shrink-0"></span>
                      <span>Equipo propio dedicado al 100% a tu proyecto.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 flex-shrink-0"></span>
                      <span>Seguimiento directo y transparente de la obra.</span>
                    </li>
                  </ul>


                </div>
              </div>
            </div>

            {/* Image Column (First on Mobile, Second on Desktop) */}
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-stone-200">
                <img
                  src="/assets/images/baño_garantia.webp"
                  alt="reforma baño con garantía de calidad en Barcelona"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </FadeIn>
        </Container>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-28 lg:py-32 bg-stone-50 overflow-hidden">
        <Container>
          <div className="max-w-5xl mx-auto flex flex-col items-center justify-center">
            <FadeIn>
              {/* UPDATED TITLE TYPOGRAPHY: Hybrid Style */}
              <h2 className="font-display font-bold uppercase tracking-[0.15em] text-2xl md:text-6xl lg:text-7xl text-stone-900 mb-16 md:mb-24 text-center leading-none">
                Opiniones
              </h2>
            </FadeIn>
            <div className="relative w-full grid grid-cols-1">
              {TESTIMONIALS.map((t, idx) => (
                <div
                  key={t.id}
                  className={`
                    col-start-1 row-start-1 w-full flex flex-col items-center justify-center text-center px-4 md:px-12
                    transition-opacity duration-1000 ease-in-out
                    ${activeTestimonial === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}
                  `}
                >
                  <blockquote className="font-sans md:font-display font-normal md:font-medium text-lg md:text-3xl lg:text-4xl leading-relaxed md:leading-tight text-stone-500 md:text-stone-900 max-w-2xl md:max-w-5xl mx-auto mb-10 md:mb-14">
                    "{t.text}"
                  </blockquote>
                  <cite className="not-italic flex flex-col items-center gap-2">
                    <span className="font-display font-bold uppercase tracking-widest text-stone-900 text-sm md:text-2xl">
                      {t.author}
                    </span>
                    <span className="font-sans font-light text-stone-500 text-xs md:text-lg tracking-wide">
                      {t.role}
                    </span>
                  </cite>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 lg:py-28 bg-white text-center">
        <Container>
          <FadeIn>
            {/* UPDATED TITLE TYPOGRAPHY: Hybrid Style */}
            <h2 className="font-display font-bold uppercase tracking-[0.15em] text-2xl md:text-6xl lg:text-7xl mb-8 text-stone-900 leading-none">
              Hablemos
            </h2>
            <p className="text-stone-500 font-light text-lg md:text-2xl mb-12 max-w-xl mx-auto">
              Cada proyecto comienza con una conversación. Cuéntanos tu idea y nosotros diseñaremos el camino.
            </p>
            <Button
              href="https://wa.me/34667804973?text=Hola,%20vengo%20de%20la%20web.%20Quiero%20un%20presupuesto%20personalizado!"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              className="md:px-10 md:py-5 md:text-base w-full md:w-auto py-4"
            >
              Iniciar Proyecto
            </Button>
          </FadeIn>
        </Container>
      </section>

    </main>
  );
};