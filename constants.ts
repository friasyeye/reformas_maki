import { NavItem, Project, Testimonial, FaqItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Galeria de trabajos', path: '/galeria-de-trabajos' },
  { label: 'Servicios', path: '/servicios' },
  { label: 'Nosotros', path: '/nosotros' },
  { label: 'Pide presupuesto', path: '/contacto' },
];


export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    text: "Ha sido un acierto elegir a Reformas Maki. Después de pedir varios presupuestos, nos decidimos por ellos por la garantía que nos daban. Reformamos el terrado y el baño, y el resultado ha sido impecable.",
    author: "Sandra P.",
    role: "Piso céntrico"
  },
  {
    id: 2,
    text: "Profesionales con mayúsculas. Tanto en el trabajo como en el trato, Joel y sus chicos son unos cracks! Contacté con ellos para una reforma integral y desde la planificación te das cuenta de la experiencia que tienen.",
    author: "Toni R.",
    role: "Reforma integral"
  },
  {
    id: 3,
    text: "Hemos reformado el baño y estamos muy contentos. Muy buen trato, puntualidad absoluta y cumplimiento de los plazos. Los chicos trabajan muy rápido y son muy limpios. Recomendables 100%.",
    author: "Carmen y Alberto",
    role: "Vivienda familiar"
  },
  {
    id: 4,
    text: "Teníamos un problema serio de filtraciones en el chalet. Nos quedamos con Reformas Maki por la seguridad técnica que nos transmitieron. Se nota que llevan toda la vida en esto.",
    author: "Roberto y Lucía",
    role: "Vivienda Unifamiliar"
  },
  {
    id: 5,
    text: "Cambiaron toda la instalación eléctrica y fontanería sin dar un solo problema a los vecinos. Calidad de materiales de primera y muy atentos a nuestras peticiones. Muy profesionales.",
    author: "Ignacio H.",
    role: "Edificio antiguo"
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "¿Trabajáis únicamente en Barcelona?",
    answer: "Realizamos proyectos en toda Barcelona y alrededores, desplazando a nuestro equipo para asegurar el mismo nivel de control y acabado en cada obra."
  },
  {
    question: "¿Cuánto nos costará la reforma?",
    answer: "Cada vivienda es única. Preparamos un presupuesto detallado y transparente basándonos en mediciones reales, para que conozcas el coste exacto desde el inicio y sin sorpresas."
  },
  {
    question: "¿Tenéis opciones de financiación?",
    answer: "Sí. Facilitamos el pago a plazos durante el periodo de la obra, adaptando los pagos al avance del proyecto para tu mayor comodidad."
  },
  {
    question: "¿Qué opciones de materiales ofrecéis?",
    answer: "Trabajamos con distintas gamas de materiales (suelos, grifería, sanitarios, etc.) que se adaptan a cada estilo y presupuesto, asegurando calidad y durabilidad."
  },
  {
    question: "¿Cómo gestionáis la limpieza y los escombros?",
    answer: "Gestionamos la retirada diaria de escombros mediante contenedores autorizados y mantenemos el orden durante toda la obra para minimizar las molestias."
  }
];

export const METRICS = [
  { label: "Años de Experiencia", value: "+35" },
  { label: "Proyectos Realizados", value: "+ 314" },
  { label: "Clientes Satisfechos", value: "+ 314" },
];