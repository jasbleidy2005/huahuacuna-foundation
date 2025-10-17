// Importación de componentes y utilidades que se usan en la página
import { Header } from "@/components/header" // Encabezado del sitio (navegación principal)
import { Footer } from "@/components/footer" // Pie de página del sitio
import { Button } from "@/components/ui/button" // Componente de botón reutilizable
import { Card, CardContent } from "@/components/ui/card" // Tarjetas para mostrar información
import { Badge } from "@/components/ui/badge" // Etiquetas decorativas (no se usa en esta versión)
import { Input } from "@/components/ui/input" // Campo de entrada de texto
import { Textarea } from "@/components/ui/textarea" // Campo de texto multilinea
import { Label } from "@/components/ui/label" // Etiquetas de formulario
// Iconos importados desde la librería lucide-react
import { Heart, Users, Clock, BookOpen, Stethoscope, Utensils, Palette, CheckCircle } from "lucide-react"

// -----------------------------
// Arreglo de oportunidades de voluntariado
// -----------------------------
const opportunities = [
  {
    id: 1, // Identificador único
    title: "Tutor Educativo", // Título del rol
    description: "Ayuda a los niños con sus tareas escolares y refuerza conceptos académicos.", // Descripción
    icon: BookOpen, // Icono representativo
    commitment: "4 horas/semana", // Tiempo requerido
    color: "bg-primary/20 text-primary", // Colores aplicados a cada tarjeta
  },
  {
    id: 2,
    title: "Asistente de Salud",
    description: "Apoya en jornadas de salud, vacunación y chequeos médicos.",
    icon: Stethoscope,
    commitment: "6 horas/mes",
    color: "bg-secondary/20 text-secondary",
  },
  {
    id: 3,
    title: "Coordinador de Nutrición",
    description: "Ayuda en la preparación y distribución de alimentos nutritivos.",
    icon: Utensils,
    commitment: "8 horas/semana",
    color: "bg-accent/20 text-accent",
  },
  {
    id: 4,
    title: "Instructor de Arte",
    description: "Enseña arte, música o manualidades a los niños en talleres creativos.",
    icon: Palette,
    commitment: "3 horas/semana",
    color: "bg-chart-4/20 text-chart-4",
  },
]

// -----------------------------
// Lista de beneficios del voluntariado
// -----------------------------
const benefits = [
  "Capacitación continua",
  "Eventos exclusivos para voluntarios",
  "Ayudas a niños",
  "Experiencia significativa",
]

// -----------------------------
// Componente principal de la página
// -----------------------------
export default function VoluntariadoPage() {
  return (
    // Contenedor general de toda la página, estructura vertical (columna)
    <div className="flex min-h-screen flex-col">
      {/* Encabezado (importado del componente global) */}
      <Header />

      {/* Contenido principal */}
      <main className="flex-1">

        {/* ================= HERO SECTION ================= */}
        {/* Sección principal de bienvenida */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-background to-secondary/10 py-16 md:py-24">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              
              {/* Columna de texto del hero */}
              <div className="space-y-6">
                {/* Título principal */}
                <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl text-balance">
                  Sé Parte del Cambio Como Voluntario
                </h1>

                {/* Descripción introductoria */}
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                  Tu tiempo y talento pueden transformar vidas. Únete a nuestro equipo de voluntarios y ayuda a crear un
                  futuro mejor para los niños de nuestra comunidad.
                </p>

                {/* Botones de acción */}
                <div className="flex flex-col gap-4 sm:flex-row">
                  {/* Botón principal */}
                  <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                    <Heart className="mr-2 h-5 w-5" />
                    Inscríbete Ahora
                  </Button>

                  {/* Botón secundario */}
                  <Button size="lg" variant="outline" className="rounded-full bg-transparent">
                    Conoce Más
                  </Button>
                </div>
              </div>

              {/* Imagen del hero */}
              <div className="relative aspect-square overflow-hidden rounded-3xl bg-muted lg:aspect-auto lg:h-[500px]">
                <img
                  src="/volunteers-working-with-happy-children.jpg"
                  alt="Voluntarios con niños"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ================= OPORTUNIDADES SECTION ================= */}
        {/* Muestra tarjetas con las oportunidades de voluntariado */}
        <section className="py-16 md:py-24">
          <div className="container">
            {/* Título y descripción */}
            <div className="mb-12 text-center space-y-4">
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                Oportunidades de Voluntariado
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
                Encuentra la oportunidad perfecta para compartir tus habilidades y hacer la diferencia
              </p>
            </div>

            {/* Grilla de tarjetas */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {/* Se recorre el arreglo de oportunidades */}
              {opportunities.map((opportunity) => {
                const Icon = opportunity.icon // Se asigna el icono correspondiente
                return (
                  <Card key={opportunity.id} className="border-none shadow-sm hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 space-y-4">
                      
                      {/* Icono con fondo de color */}
                      <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${opportunity.color}`}>
                        <Icon className="h-7 w-7" />
                      </div>

                      {/* Título y descripción */}
                      <div className="space-y-2">
                        <h3 className="font-serif text-xl font-bold text-foreground">{opportunity.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{opportunity.description}</p>
                      </div>

                      {/* Compromiso de tiempo */}
                      <div className="space-y-2 pt-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{opportunity.commitment}</span>
                        </div>
                      </div>

                      {/* Botón de aplicar */}
                      <Button className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                        Aplicar
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* ================= BENEFICIOS SECTION ================= */}
        {/* Sección donde se muestran los beneficios de ser voluntario */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              
              {/* Encabezado */}
              <div className="mb-12 text-center space-y-4">
                <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                  Beneficios del Voluntariado
                </h2>
                <p className="text-lg text-muted-foreground text-pretty">
                  Ser voluntario no solo ayuda a otros, también enriquece tu vida
                </p>
              </div>

              {/* Lista de beneficios */}
              <div className="grid gap-4 md:grid-cols-2">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 rounded-2xl bg-background p-4 shadow-sm">
                    {/* Icono de check */}
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/20">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    {/* Texto del beneficio */}
                    <p className="text-foreground font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= FORMULARIO SECTION ================= */}
        {/* Formulario para que el usuario se inscriba como voluntario */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-2xl">

              {/* Encabezado del formulario */}
              <div className="mb-8 text-center space-y-4">
                <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">Formulario de Inscripción</h2>
                <p className="text-lg text-muted-foreground text-pretty">
                  Completa el formulario y nos pondremos en contacto contigo pronto
                </p>
              </div>

              {/* Tarjeta que contiene el formulario */}
              <Card className="border-none shadow-sm">
                <CardContent className="p-8">
                  
                  {/* Estructura del formulario */}
                  <form className="space-y-6">

                    {/* Campos de nombre y apellido */}
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Nombre</Label>
                        <Input id="firstName" placeholder="Tu nombre" className="rounded-xl" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Apellido</Label>
                        <Input id="lastName" placeholder="Tu apellido" className="rounded-xl" />
                      </div>
                    </div>

                    {/* Correo */}
                    <div className="space-y-2">
                      <Label htmlFor="email">Correo Electrónico</Label>
                      <Input id="email" type="email" placeholder="tu@email.com" className="rounded-xl" />
                    </div>

                    {/* Teléfono */}
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input id="phone" type="tel" placeholder="+57 300 123 4567" className="rounded-xl" />
                    </div>

                    {/* Área de interés */}
                    <div className="space-y-2">
                      <Label htmlFor="area">Área de Interés</Label>
                      <Input id="area" placeholder="Ej: Educación, Salud, Nutrición" className="rounded-xl" />
                    </div>

                    {/* Motivación */}
                    <div className="space-y-2">
                      <Label htmlFor="message">¿Por qué quieres ser voluntario?</Label>
                      <Textarea id="message" placeholder="Cuéntanos tu motivación..." className="min-h-32 rounded-xl" />
                    </div>

                    {/* Botón de envío */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <Heart className="mr-2 h-5 w-5" />
                      Enviar Solicitud
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Pie de página */}
      <Footer />
    </div>
  )
}
