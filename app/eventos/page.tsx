import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

const upcomingEvents = [
  {
    id: 1,
    title: "Feria de la Solidaridad 2024",
    description:
      "Un día lleno de actividades, música, comida y diversión para toda la familia. Todos los fondos recaudados apoyan nuestros programas.",
    date: "2024-04-20",
    time: "10:00 AM - 6:00 PM",
    location: "Parque Simón Bolívar, Bogotá",
    attendees: 500,
    image: "/charity-fair-with-families-and-children.jpg",
    category: "Recaudación de Fondos",
    status: "Próximo",
  },
  {
    id: 2,
    title: "Maratón por los Niños",
    description:
      "Corre 5K o 10K y apoya la educación de niños en situación de vulnerabilidad. Incluye camiseta y medalla.",
    date: "2024-05-15",
    time: "7:00 AM",
    location: "Malecón de Cali",
    attendees: 300,
    image: "/charity-marathon-runners-with-children.jpg",
    category: "Deportivo",
    status: "Inscripciones Abiertas",
  },
  {
    id: 3,
    title: "Concierto Benéfico",
    description:
      "Una noche de música en vivo con artistas locales. Disfruta de buena música mientras apoyas una gran causa.",
    date: "2024-06-10",
    time: "7:00 PM",
    location: "Teatro Colón, Bogotá",
    attendees: 400,
    image: "/benefit-concert-with-audience.jpg",
    category: "Cultural",
    status: "Próximo",
  },
]

const pastEvents = [
  {
    id: 4,
    title: "Día del Niño 2024",
    description: "Celebración especial con juegos, regalos y actividades para todos los niños apadrinados.",
    date: "2024-03-01",
    attendees: 450,
    image: "/children-celebrating-with-gifts-and-games.jpg",
  },
  {
    id: 5,
    title: "Taller de Padres y Madres",
    description: "Capacitación sobre crianza positiva y desarrollo infantil para familias de la fundación.",
    date: "2024-02-15",
    attendees: 80,
    image: "/parents-workshop-learning-together.jpg",
  },
  {
    id: 6,
    title: "Jornada de Salud Comunitaria",
    description: "Chequeos médicos gratuitos, vacunación y orientación en salud para la comunidad.",
    date: "2024-01-20",
    attendees: 350,
    image: "/community-health-fair-with-doctors.jpg",
  },
]

export default function EventosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-background to-secondary/10 py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center space-y-6">
              <Badge className="rounded-full bg-primary text-primary-foreground">Eventos</Badge>
              <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl text-balance">
                Únete a Nuestros Eventos y Actividades
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Participa en nuestras actividades comunitarias, eventos de recaudación y celebraciones especiales. Cada
                evento es una oportunidad para conectar y hacer la diferencia.
              </p>
            </div>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mb-12 space-y-4">
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">Próximos Eventos</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                No te pierdas nuestras próximas actividades y eventos especiales
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {upcomingEvents.map((event) => (
                <Card
                  key={event.id}
                  className="group overflow-hidden border-none shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="relative aspect-video overflow-hidden bg-muted">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <Badge className="rounded-full bg-background/90 text-foreground backdrop-blur-sm">
                        {event.category}
                      </Badge>
                      <Badge className="rounded-full bg-primary text-primary-foreground">{event.status}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-serif text-xl font-bold text-foreground">{event.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {new Date(event.date).toLocaleDateString("es-ES", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{event.attendees} asistentes esperados</span>
                      </div>
                    </div>

                    <Button
                      asChild
                      className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <Link href={`/eventos/${event.id}`}>
                        Más Información
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Past Events Section */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container">
            <div className="mb-12 space-y-4">
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">Eventos Pasados</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Revive los momentos especiales de nuestros eventos anteriores
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {pastEvents.map((event) => (
                <Card key={event.id} className="overflow-hidden border-none shadow-sm">
                  <div className="relative aspect-video overflow-hidden bg-muted">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6 space-y-3">
                    <h3 className="font-serif text-lg font-bold text-foreground">{event.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                    <div className="flex items-center justify-between pt-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {new Date(event.date).toLocaleDateString("es-ES", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{event.attendees} asistentes</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center space-y-6">
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
                ¿Quieres Organizar un Evento?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Si tienes una idea para un evento benéfico o quieres colaborar con nosotros, nos encantaría escucharte.
              </p>
              <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                Contáctanos
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
