import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight, Clock } from "lucide-react"
import Link from "next/link"

const featuredNews = {
  id: 1,
  title: "Inauguramos Nueva Biblioteca Comunitaria en Bogotá",
  excerpt:
    "Con más de 2,000 libros y espacios de lectura, la nueva biblioteca beneficiará a más de 350 niños de la comunidad.",
  content:
    "Hoy celebramos la inauguración de nuestra nueva biblioteca comunitaria, un espacio diseñado para fomentar el amor por la lectura y el aprendizaje en los niños de nuestra comunidad...",
  date: "2024-03-25",
  author: "María Rodríguez",
  category: "Proyectos",
  readTime: "5 min",
  image: "/new-community-library-opening-with-children.jpg",
}

const recentNews = [
  {
    id: 2,
    title: "100 Nuevos Niños Reciben Apadrinamiento",
    excerpt: "Gracias a la generosidad de nuestros padrinos, 100 niños más tendrán acceso a educación y salud.",
    date: "2024-03-20",
    author: "Carlos Méndez",
    category: "Apadrinamiento",
    readTime: "3 min",
    image: "/children-receiving-sponsorship-certificates.jpg",
  },
  {
    id: 3,
    title: "Éxito Total en la Maratón por los Niños",
    excerpt: "Más de 500 corredores participaron y recaudamos fondos para becas educativas.",
    date: "2024-03-18",
    author: "Ana Silva",
    category: "Eventos",
    readTime: "4 min",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    title: "Nuevo Programa de Nutrición Infantil",
    excerpt: "Lanzamos un programa integral que beneficiará a 500 niños con alimentación balanceada.",
    date: "2024-03-15",
    author: "Laura Gómez",
    category: "Salud",
    readTime: "6 min",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 5,
    title: "Alianza con Universidad para Becas Universitarias",
    excerpt: "Firmamos convenio que permitirá a nuestros jóvenes acceder a educación superior.",
    date: "2024-03-10",
    author: "Diego Ruiz",
    category: "Educación",
    readTime: "5 min",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 6,
    title: "Taller de Emprendimiento para Madres",
    excerpt: "Capacitamos a 50 madres en habilidades empresariales para generar ingresos.",
    date: "2024-03-05",
    author: "Patricia López",
    category: "Comunidad",
    readTime: "4 min",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 7,
    title: "Jornada de Vacunación Beneficia a 300 Niños",
    excerpt: "En alianza con el sector salud, realizamos jornada de vacunación gratuita.",
    date: "2024-03-01",
    author: "Dr. Andrés Martínez",
    category: "Salud",
    readTime: "3 min",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function NoticiasPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-background to-secondary/10 py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center space-y-6">
              <Badge className="rounded-full bg-primary text-primary-foreground">Noticias</Badge>
              <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl text-balance">
                Últimas Noticias y Actualizaciones
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Mantente informado sobre nuestros proyectos, eventos y el impacto que estamos creando juntos en la
                comunidad.
              </p>
            </div>
          </div>
        </section>

        {/* Featured News Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <Card className="overflow-hidden border-none shadow-lg">
              <div className="grid gap-0 lg:grid-cols-2">
                <div className="relative aspect-video lg:aspect-auto">
                  <img
                    src={featuredNews.image || "/placeholder.svg"}
                    alt={featuredNews.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute top-6 left-6">
                    <Badge className="rounded-full bg-primary text-primary-foreground">Destacado</Badge>
                  </div>
                </div>
                <CardContent className="flex flex-col justify-center p-8 md:p-12 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Badge className="rounded-full bg-muted text-muted-foreground">{featuredNews.category}</Badge>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {new Date(featuredNews.date).toLocaleDateString("es-ES", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{featuredNews.readTime}</span>
                      </div>
                    </div>
                    <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
                      {featuredNews.title}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">{featuredNews.excerpt}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Button
                      asChild
                      size="lg"
                      className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <Link href={`/noticias/${featuredNews.id}`}>
                        Leer Más
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <p className="text-sm text-muted-foreground">Por {featuredNews.author}</p>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>

        {/* Recent News Grid */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container">
            <div className="mb-12 space-y-4">
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">Noticias Recientes</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Descubre las últimas actualizaciones de nuestra fundación
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {recentNews.map((news) => (
                <Card
                  key={news.id}
                  className="group overflow-hidden border-none shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="relative aspect-video overflow-hidden bg-muted">
                    <img
                      src={news.image || "/placeholder.svg"}
                      alt={news.title}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="rounded-full bg-background/90 text-foreground backdrop-blur-sm">
                        {news.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-serif text-xl font-bold text-foreground line-clamp-2">{news.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{news.excerpt}</p>
                    </div>

                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {new Date(news.date).toLocaleDateString("es-ES", {
                            day: "numeric",
                            month: "short",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{news.readTime}</span>
                      </div>
                    </div>

                    <Button asChild variant="ghost" className="w-full rounded-full">
                      <Link href={`/noticias/${news.id}`}>
                        Leer Más
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline" size="lg" className="rounded-full bg-transparent">
                Cargar Más Noticias
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 md:py-24">
          <div className="container">
            <Card className="overflow-hidden border-none bg-gradient-to-br from-primary/20 via-background to-secondary/10 shadow-sm">
              <CardContent className="p-8 md:p-12">
                <div className="mx-auto max-w-2xl text-center space-y-6">
                  <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
                    Suscríbete a Nuestro Boletín
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                    Recibe las últimas noticias, historias de impacto y actualizaciones directamente en tu correo.
                  </p>
                  <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <input
                      type="email"
                      placeholder="tu@email.com"
                      className="flex h-12 w-full rounded-full border border-input bg-background px-6 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:max-w-sm"
                    />
                    <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Suscribirse
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
