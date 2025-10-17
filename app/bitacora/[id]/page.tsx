import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, Download, Calendar, Heart, BookOpen, Stethoscope, Utensils, Smile, Video } from "lucide-react"
import Link from "next/link"

// Mock journal entries
const journalEntries = [
  {
    id: 1,
    date: "2024-03-15",
    category: "education",
    title: "Excelente Desempeño en Matemáticas",
    description:
      "María ha mostrado un progreso excepcional en matemáticas este mes. Obtuvo la calificación más alta en su examen de fracciones y ayuda a sus compañeros durante las clases.",
    images: ["/maria-studying-math.jpg", "/maria-math-test.jpg"],
    author: "Prof. Carmen López",
    authorRole: "Maestra de Matemáticas",
  },
  {
    id: 2,
    date: "2024-03-08",
    category: "health",
    title: "Chequeo Médico Mensual",
    description:
      "María asistió a su chequeo médico mensual. Su peso y talla están dentro de los parámetros normales para su edad. Se le administraron las vitaminas correspondientes.",
    images: ["/maria-health-checkup.jpg"],
    author: "Dra. Ana Martínez",
    authorRole: "Médica de la Fundación",
  },
  {
    id: 3,
    date: "2024-03-01",
    category: "nutrition",
    title: "Programa de Alimentación Saludable",
    description:
      "María participa activamente en nuestro programa de nutrición. Disfruta especialmente de las frutas y verduras frescas que recibe diariamente en la escuela.",
    images: ["/maria-healthy-meal.jpg"],
    author: "Nutricionista Laura Gómez",
    authorRole: "Coordinadora de Nutrición",
  },
  {
    id: 4,
    date: "2024-02-20",
    category: "recreation",
    title: "Taller de Arte y Creatividad",
    description:
      "María participó en el taller de arte donde creó hermosas pinturas. Mostró gran creatividad y entusiasmo. Sus obras fueron exhibidas en la galería de la escuela.",
    images: ["/maria-art-workshop.jpg", "/maria-painting.jpg"],
    video: "/maria-art-video.mp4",
    author: "Prof. Diego Ruiz",
    authorRole: "Instructor de Arte",
  },
  {
    id: 5,
    date: "2024-02-10",
    category: "education",
    title: "Entrega de Útiles Escolares",
    description:
      "María recibió su kit de útiles escolares para el nuevo semestre. Incluye cuadernos, lápices, colores y libros de texto. Estaba muy emocionada y agradecida.",
    images: ["/maria-school-supplies.jpg"],
    author: "Coordinadora Ana Silva",
    authorRole: "Coordinadora de Apadrinamiento",
  },
]

const categoryConfig = {
  education: {
    label: "Educación",
    icon: BookOpen,
    color: "bg-primary text-primary-foreground",
  },
  health: {
    label: "Salud",
    icon: Stethoscope,
    color: "bg-secondary text-secondary-foreground",
  },
  nutrition: {
    label: "Nutrición",
    icon: Utensils,
    color: "bg-accent text-accent-foreground",
  },
  recreation: {
    label: "Recreación",
    icon: Smile,
    color: "bg-chart-4 text-white",
  },
}

export default function BitacoraPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Header Section */}
        <section className="border-b border-border bg-gradient-to-br from-primary/10 via-background to-secondary/5">
          <div className="container py-8">
            <Button asChild variant="ghost" size="sm" className="mb-4">
              <Link href={`/apadrinar/${params.id}`}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al perfil
              </Link>
            </Button>

            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="/happy-colombian-girl-8-years-old-smiling-portrait.jpg" />
                    <AvatarFallback>MG</AvatarFallback>
                  </Avatar>
                  <div>
                    <h1 className="font-serif text-3xl font-bold text-foreground">Bitácora de María González</h1>
                    <p className="text-muted-foreground">Seguimiento de progreso y actividades</p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Download className="mr-2 h-5 w-5" />
                Descargar Bitácora PDF
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-b border-border bg-muted/30 py-6">
          <div className="container">
            <div className="grid gap-4 md:grid-cols-4">
              <Card className="border-none shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">12</p>
                      <p className="text-xs text-muted-foreground">Actualizaciones</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/20">
                      <Stethoscope className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">4</p>
                      <p className="text-xs text-muted-foreground">Chequeos Médicos</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20">
                      <Heart className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">6</p>
                      <p className="text-xs text-muted-foreground">Meses Apadrinado</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-chart-4/20">
                      <Smile className="h-5 w-5 text-chart-4" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">8</p>
                      <p className="text-xs text-muted-foreground">Actividades</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <div className="mb-8 space-y-2">
                <h2 className="font-serif text-2xl font-bold text-foreground">Línea de Tiempo</h2>
                <p className="text-muted-foreground">
                  Actualizaciones cronológicas del progreso y actividades de María
                </p>
              </div>

              {/* Timeline */}
              <div className="relative space-y-8">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2" />

                {journalEntries.map((entry, index) => {
                  const config = categoryConfig[entry.category as keyof typeof categoryConfig]
                  const Icon = config.icon

                  return (
                    <div key={entry.id} className="relative">
                      {/* Timeline dot */}
                      <div className="absolute left-8 -translate-x-1/2 md:left-1/2">
                        <div className={`flex h-16 w-16 items-center justify-center rounded-full ${config.color}`}>
                          <Icon className="h-8 w-8" />
                        </div>
                      </div>

                      {/* Content */}
                      <div
                        className={`ml-24 md:ml-0 ${
                          index % 2 === 0 ? "md:mr-[calc(50%+3rem)]" : "md:ml-[calc(50%+3rem)]"
                        }`}
                      >
                        <Card className="overflow-hidden border-none shadow-sm">
                          <CardContent className="p-6 space-y-4">
                            <div className="flex items-start justify-between gap-4">
                              <div className="space-y-2 flex-1">
                                <div className="flex items-center gap-2">
                                  <Badge className={`rounded-full ${config.color}`}>{config.label}</Badge>
                                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                    <Calendar className="h-4 w-4" />
                                    <span>
                                      {new Date(entry.date).toLocaleDateString("es-ES", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                      })}
                                    </span>
                                  </div>
                                </div>
                                <h3 className="font-serif text-xl font-bold text-foreground">{entry.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{entry.description}</p>
                              </div>
                            </div>

                            {/* Images */}
                            {entry.images && entry.images.length > 0 && (
                              <div className="grid gap-3 md:grid-cols-2">
                                {entry.images.map((image, idx) => (
                                  <div key={idx} className="overflow-hidden rounded-xl bg-muted aspect-video">
                                    <img
                                      src={image || "/placeholder.svg"}
                                      alt={`${entry.title} - imagen ${idx + 1}`}
                                      className="h-full w-full object-cover"
                                    />
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* Video */}
                            {entry.video && (
                              <div className="overflow-hidden rounded-xl bg-muted aspect-video">
                                <div className="flex h-full items-center justify-center">
                                  <Video className="h-12 w-12 text-muted-foreground" />
                                </div>
                              </div>
                            )}

                            {/* Author */}
                            <div className="flex items-center gap-3 pt-4 border-t border-border">
                              <Avatar className="h-8 w-8">
                                <AvatarFallback className="bg-muted text-xs">
                                  {entry.author
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="text-sm font-medium text-foreground">{entry.author}</p>
                                <p className="text-xs text-muted-foreground">{entry.authorRole}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Load More */}
              <div className="mt-12 text-center">
                <Button variant="outline" size="lg" className="rounded-full bg-transparent">
                  Cargar Más Actualizaciones
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Download CTA */}
        <section className="bg-gradient-to-br from-primary/20 via-background to-secondary/10 py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center space-y-6">
              <div className="flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                  <Download className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
                Descarga el Informe Completo
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Obtén un documento PDF con todas las actualizaciones, fotos y reportes del progreso de María. Perfecto
                para compartir con tu familia o guardar como recuerdo.
              </p>
              <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Download className="mr-2 h-5 w-5" />
                Descargar Bitácora Completa
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
