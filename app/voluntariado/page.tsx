import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Heart, Users, Clock, BookOpen, Stethoscope, Utensils, Palette, CheckCircle } from "lucide-react"

const opportunities = [
  {
    id: 1,
    title: "Tutor Educativo",
    description: "Ayuda a los niños con sus tareas escolares y refuerza conceptos académicos.",
    icon: BookOpen,
    commitment: "4 horas/semana",
    spots: 5,
    color: "bg-primary/20 text-primary",
  },
  {
    id: 2,
    title: "Asistente de Salud",
    description: "Apoya en jornadas de salud, vacunación y chequeos médicos.",
    icon: Stethoscope,
    commitment: "6 horas/mes",
    spots: 3,
    color: "bg-secondary/20 text-secondary",
  },
  {
    id: 3,
    title: "Coordinador de Nutrición",
    description: "Ayuda en la preparación y distribución de alimentos nutritivos.",
    icon: Utensils,
    commitment: "8 horas/semana",
    spots: 4,
    color: "bg-accent/20 text-accent",
  },
  {
    id: 4,
    title: "Instructor de Arte",
    description: "Enseña arte, música o manualidades a los niños en talleres creativos.",
    icon: Palette,
    commitment: "3 horas/semana",
    spots: 6,
    color: "bg-chart-4/20 text-chart-4",
  },
]

const benefits = [
  "Certificado de voluntariado",
  "Capacitación continua",
  "Seguro de accidentes",
  "Eventos exclusivos para voluntarios",
  "Networking con profesionales",
  "Experiencia significativa",
]

export default function VoluntariadoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-background to-secondary/10 py-16 md:py-24">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="space-y-6">
                <Badge className="rounded-full bg-primary text-primary-foreground">Únete a Nosotros</Badge>
                <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl text-balance">
                  Sé Parte del Cambio Como Voluntario
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                  Tu tiempo y talento pueden transformar vidas. Únete a nuestro equipo de voluntarios y ayuda a crear un
                  futuro mejor para los niños de nuestra comunidad.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                    <Heart className="mr-2 h-5 w-5" />
                    Inscríbete Ahora
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full bg-transparent">
                    Conoce Más
                  </Button>
                </div>
              </div>
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

        {/* Stats Section */}
        <section className="border-y border-border bg-muted/30 py-12">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center space-y-2">
                <p className="font-serif text-4xl font-bold text-primary md:text-5xl">250+</p>
                <p className="text-sm text-muted-foreground">Voluntarios Activos</p>
              </div>
              <div className="text-center space-y-2">
                <p className="font-serif text-4xl font-bold text-secondary md:text-5xl">15,000</p>
                <p className="text-sm text-muted-foreground">Horas de Servicio</p>
              </div>
              <div className="text-center space-y-2">
                <p className="font-serif text-4xl font-bold text-accent md:text-5xl">98%</p>
                <p className="text-sm text-muted-foreground">Satisfacción</p>
              </div>
            </div>
          </div>
        </section>

        {/* Opportunities Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mb-12 text-center space-y-4">
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                Oportunidades de Voluntariado
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
                Encuentra la oportunidad perfecta para compartir tus habilidades y hacer la diferencia
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {opportunities.map((opportunity) => {
                const Icon = opportunity.icon
                return (
                  <Card key={opportunity.id} className="border-none shadow-sm hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 space-y-4">
                      <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${opportunity.color}`}>
                        <Icon className="h-7 w-7" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-serif text-xl font-bold text-foreground">{opportunity.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{opportunity.description}</p>
                      </div>
                      <div className="space-y-2 pt-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{opportunity.commitment}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Users className="h-4 w-4" />
                          <span>{opportunity.spots} cupos disponibles</span>
                        </div>
                      </div>
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

        {/* Benefits Section */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 text-center space-y-4">
                <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                  Beneficios del Voluntariado
                </h2>
                <p className="text-lg text-muted-foreground text-pretty">
                  Ser voluntario no solo ayuda a otros, también enriquece tu vida
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 rounded-2xl bg-background p-4 shadow-sm">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/20">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-foreground font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-2xl">
              <div className="mb-8 text-center space-y-4">
                <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">Formulario de Inscripción</h2>
                <p className="text-lg text-muted-foreground text-pretty">
                  Completa el formulario y nos pondremos en contacto contigo pronto
                </p>
              </div>

              <Card className="border-none shadow-sm">
                <CardContent className="p-8">
                  <form className="space-y-6">
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

                    <div className="space-y-2">
                      <Label htmlFor="email">Correo Electrónico</Label>
                      <Input id="email" type="email" placeholder="tu@email.com" className="rounded-xl" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input id="phone" type="tel" placeholder="+57 300 123 4567" className="rounded-xl" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="area">Área de Interés</Label>
                      <Input id="area" placeholder="Ej: Educación, Salud, Nutrición" className="rounded-xl" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">¿Por qué quieres ser voluntario?</Label>
                      <Textarea id="message" placeholder="Cuéntanos tu motivación..." className="min-h-32 rounded-xl" />
                    </div>

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

      <Footer />
    </div>
  )
}
