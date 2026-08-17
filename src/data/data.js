import about_section from '../assets/about_section.webp';

const CLINIC_NAME = 'Kiné';
const SECOND_NAME = 'Kinesiología & Rehabilitación';
const PHONE_NUMBER = '5491112345678';

const buildWaLink = (message) =>
  `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;

// profesionales

const teamNames = {
  vr: 'Valentina Ríos',
  mh: 'Martin Herrera',
  ds: 'Diego Sosa',
};

const whatsappMessages = {
  hero: `Hola ${CLINIC_NAME}!, quisiera consultar por un turno.`,

  // team
  valentinaRios: `Hola! Quisiera reservar un turno con Valentina Rios`,
  martinHerrera: `Hola! Quisiera reservar un turno con Martin Herrera`,
  diegoSosa: `Hola! Quisiera reservar un turno con Diego Sosa`,

  // obra social
  coverage: `Hola! Quería consultar si atienden con mi obra social.`,
};

export const dataKine = {
  branding: {
    clinicName: CLINIC_NAME,
    secondName: SECOND_NAME,

    logo: {
      // src:'imagen',
      // alt:''
      href: '/',
    },
  },

  header: {
    navLinks: [
      { id: 'services', label: 'Servicios', href: '#services' },
      { id: 'coverage', label: 'Obras sociales', href: '#coverage' },
      { id: 'location', label: 'Ubicación', href: '#location' },
      { id: 'reviews', label: 'Opiniones', href: '#reviews' },
    ],
    cta: {
      label: 'Turno',
      href: buildWaLink(whatsappMessages.hero),
      variant: 'primary',
      icon: 'whatsapp',
    },
  },

  hero: {
    badge: 'Kinesiólogos matriculados',
    title: 'Recuperá tu movimiento, sin dolor.',
    subtitle:
      'Rehabilitación, terapia manual y kinesiología deportiva con un equipo que te acompaña en cada sesión. Atendemos con las principales obras sociales.',
    ctas: [
      {
        label: 'Reservar por Whatsapp',
        href: buildWaLink(whatsappMessages.hero),
        variant: 'primary',
        icon: 'whatsapp',
      },
      {
        label: 'Conocer los servicios',
        href: '#services',
        variant: 'secondary',
      },
    ],

    info: [
      { icon: 'location', label: 'Av. Corrientes 1234, CABA' },
      { icon: 'clock', label: 'Lun a Vie · 8:00 – 20:00' },
    ],
  },

  about: {
    media: about_section,
    badge: 'Sobre nosotros',
    title: 'Un espacio pensado para tu recuperación',
    text: `Somos un equipo de kinesiólogos matriculados apasionados por el movimiento. Combinamos evidencia clínica, trato cercano y un ambiente cálido para acompañarte en cada etapa, desde el dolor hasta que volvés a hacer lo que te gusta.
    
    Cada tratamiento parte de una evaluación integral y un plan personalizado, con seguimiento real de tus avances. Sin apuros y con objetivos claros.`,

    info: [
      { exp: '+12', span: 'Años de experiencia' },
      { exp: '+3.000', span: 'Sesiones realizadas' },
      { exp: '4.9', span: 'Puntaje en Google' },
    ],
  },

  services: {
    badge: 'Qué hacemos',
    title: 'Tratamientos para cada etapa de tu recuperación',
    text: 'Abordamos tu caso de forma integral, combinando técnicas y un plan personalizado para que recuperes tu movimiento sin apuros.',
    info: [
      {
        title: 'Terapia manual',
        desc: 'Técnicas manuales para aliviar el dolor, mejorar la movilidad y corregir la postura.',
      },
      {
        title: 'Rehabilitación traumatológica',
        desc: 'Recuperación post-operatoria y de lesiones para volver a tu actividad con seguridad.',
      },
      {
        title: 'Kinesiología deportiva',
        desc: 'Prevención, tratamiento de lesiones y readaptación al deporte con planes a medida.',
      },
      {
        title: 'Neurorehabilitación',
        desc: 'Trabajo sobre equilibrio, coordinación y movilidad funcional para recuperar autonomía.',
      },
      {
        title: 'Reeducación postural',
        desc: 'Corrección de patrones de movimiento y postura para reducir molestias crónicas.',
      },
      {
        title: 'Rehabilitación cardiorrespiratoria',
        desc: 'Ejercicios y seguimiento para mejorar la capacidad respiratoria y cardiovascular.',
      },
    ],
  },

  team: {
    badge: 'Nuestro equipo',
    title: 'Profesionales que te escuchan',
    subtitle:
      'Cada kinesiólogo del equipo está matriculado y se especializa en un área para darte un tratamiento a tu medida.',
    info: [
      {
        avatar: 'VR',
        name: 'Lic. Valentina Ríos',
        speciality: 'Kinesióloga · Terapia manual',
        service: 'Dolor lumbar, cervical y postura',
        mn: '12.483',
        cta: {
          label: 'Reservar',
          href: buildWaLink(whatsappMessages.valentinaRios),
        },
      },
      {
        avatar: 'MH',
        name: 'Lic. Martín Herrera',
        speciality: 'Kinesiólogo · Rehabilitación',
        service: 'Post-operatorio y traumatología',
        mn: '9.271',
        cta: {
          label: 'Reservar',
          href: buildWaLink(whatsappMessages.martinHerrera),
        },
      },
      {
        avatar: 'DS',
        name: 'Lic. Diego Sosa',
        speciality: 'Kinesiólogo deportivo',
        service: 'Lesiones deportivas y RTP',
        mn: '15.902',
        cta: {
          label: 'Reservar',
          href: buildWaLink(whatsappMessages.diegoSosa),
        },
      },
      // CAMBIAR NOMBRES 2-3 ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    ],
  },

  coverage: {
    badge: 'Cobertura',
    title: 'Trabajamos con tu obra social',
    subtitle:
      'Atendemos a través de las principales obras sociales y prepagas. Escribinos y te confirmamos tu cobertura al instante.',
    cta: {
      label: 'Consultar mi cobertura',
      href: buildWaLink(whatsappMessages.coverage),
    },
    items: [
      'OSDE',
      'Swiss Medical',
      'Galeno',
      'Medifé',
      'OSECAC',
      'IOMA',
      'PAMI',
      'Omint',
      'Sancor Salud',
      'Prevención Salud',
    ],
  },

  location: {
    badge: 'Dónde estamos',
    title: 'Un espacio pensado para tu recuperación',
    info: [
      {
        icon: 'location',
        label: 'Dirección',
        span: 'Av. Corrientes 1234, CABA',
      },
      { icon: 'clock', label: 'Horarios', span: 'Lun a Vie · 8:00 – 20:00' },
    ],
    cta: {
      icon: 'send',
      label: 'Cómo llegar',
      href: 'https://www.google.com/maps/search/?api=1&query=-34.6037,-58.3816', //link al google maps
      size: 'sm',
    },
    coordenates: `34°36'13.3"S 58°22'53.8"W`,
  },

  reviews: {
    badge: 'Opiniones',
    title: 'Lo que dicen nuestros pacientes',

    rating_card: {
      average: '4,9',
      stars: 5,
    },

    reviews_cards: [
      {
        avatar: 'L',
        name: 'Lucía Medina',
        stars: 5,
        review:
          'Llegué con una lumbalgia que no me dejaba trabajar y en pocas sesiones volví a mi rutina. Trato humano y muy profesional.',
      },
      {
        avatar: 'F',
        name: 'Federico Álvarez',
        stars: 5,
        review:
          'Me operaron de la rodilla y toda la rehabilitación la hice acá. El seguimiento fue impecable, siempre atentos a cada avance.',
      },
      {
        avatar: 'S',
        name: 'Sofía Núñez',
        stars: 5,
        review:
          'Excelente atención desde la recepción hasta el tratamiento. Aceptaron mi obra social sin ningún problema. Muy recomendable.',
      },
      {
        avatar: 'G',
        name: 'Gonzalo Peralta',
        stars: 5,
        review:
          'Soy corredor y venía arrastrando una molestia hace meses. El enfoque deportivo me devolvió la confianza para volver a competir.',
      },
      {
        avatar: 'M',
        name: 'María José Torres',
        stars: 5,
        review:
          'Ambiente cálido y tranquilo, todo muy prolijo. Se nota que cada profesional se toma el tiempo de escucharte.',
      },
      {
        avatar: 'R',
        name: 'Ramiro Vega',
        stars: 5,
        review:
          'Muy buena experiencia, los turnos son puntuales y las instalaciones impecables. Volvería sin dudarlo.',
      },
    ],
  },

  cta_section: {
    title: 'Dá el primer paso hacia tu recuperación',
    subtitle:
      'Escribinos por WhatsApp y coordinamos tu primer turno. Te respondemos en el día.',
    cta: {
      icon: 'whatsapp',
      label: 'Escribinos por WhatsApp',
      variant: 'secondary',
      href: buildWaLink(whatsappMessages.hero),
    },
  },

  footer: {
    text: 'Kinesiología y rehabilitación con atención personalizada y las principales obras sociales.',
    visit_us: {
      label: 'Visitanos',
      items: [
        { icon: 'location', label: 'Av. Corrientes 1234, CABA' },
        { icon: 'clock', label: 'Lun a Vie · 8:00 – 20:00' },
      ],
    },

    rrss: {
      label: 'Redes sociales',
      items: [
        { icon: 'instagram', label: '@kine.arg', href: '' },
        { icon: 'email', label: 'kine@gmail.com', href: '' },
      ],
    },

    copyright: {
      label: `© 2026 ${CLINIC_NAME}. Todos los derechos reservados.`,
      by_codefex: 'Desarrollado por Codefex', // href
    },
  },

  // fin
};
