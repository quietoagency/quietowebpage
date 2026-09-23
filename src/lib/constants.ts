export const referalOptions = [
  { value: "instagram", label: "Instagram" },
  { value: "linkedin", label: "LinkedIn" },
  { value: "google", label: "Google" },
  { value: "recomendation", label: "Recomendación" },
  { value: "other", label: "Otro" },
] as const

export const projects = [
  {
    client: "Orca Custom Homes",
    context: "Real Estate",
    text: "Un ecosistema digital para una empresa de bienes raices con un crecimiento exponencial en Seattle.",
    image: "/media/images/ore.webp"
  },
  {
    client: "OfficeTwo",
    context: "Tech",
    tone: "bg-fog-300",
    text: "Una nueva imagen para la proxima etapa de la contratación de talento en Estados Unidos.",
    image: "/media/images/o2.webp"
  },
];

export const services = [
  {
    title: "diseño de marca digital",
    lead: "Identidad visual completa: símbolo, tipografía, color y las reglas para usarlos bien.",
    items: [
      { t: "Escucha y criterio", d: "Entendemos el negocio y acordamos qué es bien hecho antes de dibujar nada." },
      { t: "Símbolo y wordmark", d: "Una propuesta terminada, no tres a medias. Se muestra cuando está lista." },
      { t: "Sistema", d: "Paleta, tipografía, espaciado y usos. Lo que hace que la marca se sostenga sola." },
      { t: "Manual", d: "Documentación clara para que quede en buenas manos." },
    ],
  },
  {
    title: "diseño y desarrollo web",
    lead: "Sitios diseñados y construidos por el mismo equipo, del primer boceto al deploy.",
    items: [
      { t: "Estructura", d: "Qué tiene que lograr el sitio y en qué orden se cuenta." },
      { t: "Diseño", d: "La diferenciación entre una propuesta rapida y un sistema que te hace salir de la monotonia" },
      { t: "Desarrollo", d: "Fiel al diseño, probado en dispositivos reales." },
      { t: "Publicación", d: "Salida acompañada, con dominio, hosting y métricas en orden." },
    ],
  },
  {
    title: "mantenimiento y evolución",
    lead: "Acompañamos el sitio después del lanzamiento: mejoras, contenido y soporte técnico.",
    items: [
      { t: "Contenido", d: "Cargamos y ajustamos lo nuevo sin romper lo que ya funciona." },
      { t: "Mejoras", d: "Cambios pequeños y frecuentes, decididos con datos y no por apuro." },
      { t: "Soporte", d: "Alertas y protecciones frente a cualquier situacion." },
    ],
  },
];

export const homeServices = [
  {
    num: "01",
    title: "Diseño de marca",
    description:
      "Identidad visual completa: símbolo, tipografía, paleta y reglas de uso que sobreviven al primer entusiasmo.",
  },
  {
    num: "02",
    title: "Diseño y desarrollo web",
    description:
      "Sitios diseñados y construidos por el mismo equipo, del primer wireframe al deploy. Sin traducciones perdidas.",
  },
  {
    num: "03",
    title: "Mantenimiento y evolución",
    description: "El sitio no se abandona al lanzarlo: lo cuidamos, lo medimos y lo hacemos crecer con la marca.",
  },
];