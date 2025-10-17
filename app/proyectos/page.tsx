import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Biblioteca Comunitaria",
    description:
      "Construcción de una biblioteca con más de 2,000 libros para fomentar la lectura y el aprendizaje en la comunidad.",
    location: "Bogotá, Colombia",
    beneficiaries: 350,
    status: "En Progreso",
    progress: 75,
    image: "/community-library-with-children-reading.jpg",
    category: "Educación",
  },
  {
    id: 2,
    title: "Programa de Nutrición Infantil",
    description:
      "Suministro de alimentos nutritivos y educación sobre hábitos alimenticios saludables para niños en situación de vulnerabilidad.",
    location: "Medellín, Colombia",
    beneficiaries: 500,
    status: "Activo",
    progress: 100,
    image: "/children-eating-healthy-meals-together.jpg",
    category: "Nutrición",
  },
  {
    id: 3,
    title: "Centro de Salud Móvil",
    description:
      "Unidad médica móvil que brinda atención primaria, vacunación y chequeos médicos en comunidades rurales.",
    location: "Cali, Colombia",
    beneficiaries: 800,
    status: "En Progreso",
    progress: 60,
    image: "/mobile-health-clinic-serving-rural-community.jpg",
    category: "Salud",
  },
  {
    id: 4,
    title: "Talleres de Arte y Música",
    description:
      "Espacios creativos donde los niños pueden desarrollar habilidades artísticas y musicales, fortaleciendo su autoestima.",
    location: "Cartagena, Colombia",
    beneficiaries: 200,
    status: "Activo",
    progress: 100,
    image: "/children-in-art-and-music-workshop.jpg",
    category: "Recreación",
  },
  {
    id: 5,
    title: "Becas Educativas",
    description:
      "Programa de becas que cubre matrícula, uniformes y útiles escolares para niños de familias de bajos recursos.",
    location: "Barranquilla, Colombia",
    beneficiaries: 150,
    status: "En Progreso",
    progress: 85,
    image: "/students-receiving-school-supplies-and-uniforms.jpg",
    category: "Educación",
  },
  {
    id: 6,
    title: "Huerta Comunitaria",
    description:
      "Creación de huertos urbanos donde las familias aprenden a cultivar sus propios alimentos de forma sostenible.",
    location: "Bucaramanga, Colombia",
    beneficiaries: 120,
    status: "Planificado",
    progress: 30,
    image: "/community-garden-with-families-growing-vegetables.jpg",
    category: "Nutrición",
  },
]

const statusColors = {
  Activo: "bg-chart-2 text-white",
  "En Progreso": "bg-primary text-primary-foreground",
  Planificado: "bg-muted text-muted-foreground",
}

export default function ProyectosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-background to-secondary/10 py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center space-y-6">
              <Badge className="rounded-full bg-primary text-primary-foreground">Nuestros Proyectos</Badge>
              <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl text-balance">
                Transformando Vidas a Través de Proyectos Comunitarios
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Cada proyecto está diseñado para crear un impacto duradero en la vida de los niños y sus comunidades,
                brindando oportunidades de educación, salud y desarrollo integral.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-y border-border bg-muted/30 py-12">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-4">
              <div className="text-center space-y-2">
                <p className="font-serif text-4xl font-bold text-primary md:text-5xl">12</p>
                <p className="text-sm text-muted-foreground">Proyectos Activos</p>
              </div>
              <div className="text-center space-y-2">
                <p className="font-serif text-4xl font-bold text-secondary md:text-5xl">2,120</p>
                <p className="text-sm text-muted-foreground">Beneficiarios Directos</p>
              </div>
              <div className="text-center space-y-2">
                <p className="font-serif text-4xl font-bold text-accent md:text-5xl">6</p>
                <p className="text-sm text-muted-foreground">Ciudades</p>
              </div>
              <div className="text-center space-y-2">
                <p className="font-serif text-4xl font-bold text-chart-4 md:text-5xl">8</p>
                <p className="text-sm text-muted-foreground">Años de Impacto</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <Card
                  key={project.id}
                  className="group overflow-hidden border-none shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="relative aspect-video overflow-hidden bg-muted">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="rounded-full bg-background/90 text-foreground backdrop-blur-sm">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-serif text-xl font-bold text-foreground">{project.title}</h3>
                        <Badge className={`rounded-full ${statusColors[project.status as keyof typeof statusColors]}`}>
                          {project.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{project.beneficiaries} beneficiarios</span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Progreso</span>
                        <span className="font-semibold text-foreground">{project.progress}%</span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                        <div className="h-full bg-primary transition-all" style={{ width: `${project.progress}%` }} />
                      </div>
                    </div>

                    <Button
                      asChild
                      className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <Link href={`/proyectos/${project.id}`}>
                        Ver Detalles
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-primary/20 via-background to-secondary/10 py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center space-y-6">
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
                ¿Quieres Apoyar un Proyecto?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Tu donación puede hacer la diferencia. Cada contribución nos ayuda a expandir nuestros proyectos y
                llegar a más niños que necesitan apoyo.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Link href="/donar">Hacer una Donación</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full bg-transparent">
                  <Link href="/voluntariado">Ser Voluntario</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
