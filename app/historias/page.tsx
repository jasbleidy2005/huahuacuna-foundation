import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, ArrowRight, Quote } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HistoriasPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 pt-24 pb-16">
        <div className="container">
          {/* Hero Section */}
          <div className="mb-12 text-center space-y-4">
            <Badge className="bg-primary text-primary-foreground">Historias de Transformación</Badge>
            <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
              Vidas Transformadas
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Cada historia es un testimonio del poder del amor y la solidaridad. Conoce cómo el apadrinamiento ha
              cambiado vidas para siempre.
            </p>
          </div>

          {/* Featured Story */}
          <Card className="border-none shadow-2xl mb-12 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-[400px] md:h-auto">
                <Image
                  src="/happy-colombian-girl-8-years-old-smiling.jpg"
                  alt="Historia destacada"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                <Badge className="w-fit mb-4 bg-primary text-primary-foreground">Historia Destacada</Badge>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-4">De Soñadora a Ingeniera</h2>
                <div className="flex items-start gap-3 mb-6">
                  <Quote className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <p className="text-lg text-muted-foreground italic">
                    "Gracias al programa de apadrinamiento, pude terminar mis estudios y hoy soy ingeniera civil. Ahora
                    construyo puentes, no solo de concreto, sino de oportunidades para otros niños."
                  </p>
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Camila Rodríguez</p>
                    <p className="text-sm text-muted-foreground">Apadrinada 2008-2018</p>
                  </div>
                </div>
                <Button asChild className="w-fit rounded-full">
                  <Link href="#camila">
                    Leer historia completa
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </div>
          </Card>

          {/* Stories Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Story 1 */}
            <Card className="border-none shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/happy-colombian-boy-10-years-old-smiling.jpg"
                  alt="Historia de Juan"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <CardContent className="p-6 space-y-3">
                <Badge variant="outline" className="text-xs">
                  Educación
                </Badge>
                <h3 className="font-serif text-xl font-bold text-foreground">El Camino de Juan al Éxito</h3>
                <p className="text-sm text-muted-foreground">
                  Juan pasó de tener dificultades en matemáticas a ganar el concurso nacional de ciencias. Su padrino lo
                  apoyó en cada paso del camino.
                </p>
                <Button asChild variant="link" className="p-0 h-auto text-primary">
                  <Link href="#juan">
                    Leer más
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Story 2 */}
            <Card className="border-none shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/happy-colombian-girl-7-years-old-smiling.jpg"
                  alt="Historia de Ana"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <CardContent className="p-6 space-y-3">
                <Badge variant="outline" className="text-xs">
                  Salud
                </Badge>
                <h3 className="font-serif text-xl font-bold text-foreground">Ana Recupera su Sonrisa</h3>
                <p className="text-sm text-muted-foreground">
                  Gracias al programa de salud, Ana recibió el tratamiento que necesitaba y hoy es una niña llena de
                  energía y alegría.
                </p>
                <Button asChild variant="link" className="p-0 h-auto text-primary">
                  <Link href="#ana">
                    Leer más
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Story 3 */}
            <Card className="border-none shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/happy-colombian-boy-9-years-old-smiling.jpg"
                  alt="Historia de Carlos"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <CardContent className="p-6 space-y-3">
                <Badge variant="outline" className="text-xs">
                  Arte y Cultura
                </Badge>
                <h3 className="font-serif text-xl font-bold text-foreground">Carlos Descubre su Talento</h3>
                <p className="text-sm text-muted-foreground">
                  A través de los talleres de arte, Carlos encontró su pasión por la pintura y hoy expone sus obras en
                  galerías locales.
                </p>
                <Button asChild variant="link" className="p-0 h-auto text-primary">
                  <Link href="#carlos">
                    Leer más
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Story 4 */}
            <Card className="border-none shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/happy-colombian-girl-11-years-old-smiling.jpg"
                  alt="Historia de María"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <CardContent className="p-6 space-y-3">
                <Badge variant="outline" className="text-xs">
                  Liderazgo
                </Badge>
                <h3 className="font-serif text-xl font-bold text-foreground">María Lidera el Cambio</h3>
                <p className="text-sm text-muted-foreground">
                  María se convirtió en líder estudiantil y ahora inspira a otros niños a perseguir sus sueños sin
                  importar las dificultades.
                </p>
                <Button asChild variant="link" className="p-0 h-auto text-primary">
                  <Link href="#maria">
                    Leer más
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Story 5 */}
            <Card className="border-none shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/happy-colombian-boy-8-years-old-smiling.jpg"
                  alt="Historia de Diego"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <CardContent className="p-6 space-y-3">
                <Badge variant="outline" className="text-xs">
                  Deportes
                </Badge>
                <h3 className="font-serif text-xl font-bold text-foreground">Diego y el Fútbol</h3>
                <p className="text-sm text-muted-foreground">
                  El programa deportivo le dio a Diego la oportunidad de desarrollar su talento y hoy juega en las
                  divisiones menores de un equipo profesional.
                </p>
                <Button asChild variant="link" className="p-0 h-auto text-primary">
                  <Link href="#diego">
                    Leer más
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Story 6 */}
            <Card className="border-none shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/volunteers-playing-with-children-outdoors--communi.jpg"
                  alt="Historia de comunidad"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <CardContent className="p-6 space-y-3">
                <Badge variant="outline" className="text-xs">
                  Comunidad
                </Badge>
                <h3 className="font-serif text-xl font-bold text-foreground">Una Comunidad Unida</h3>
                <p className="text-sm text-muted-foreground">
                  La historia de cómo una comunidad entera se transformó gracias al trabajo conjunto de padrinos,
                  voluntarios y familias.
                </p>
                <Button asChild variant="link" className="p-0 h-auto text-primary">
                  <Link href="#comunidad">
                    Leer más
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <Card className="border-none shadow-2xl mt-16 bg-gradient-to-br from-primary via-secondary to-accent overflow-hidden">
            <CardContent className="p-12 text-center">
              <Heart className="h-16 w-16 text-white mx-auto mb-6" />
              <h2 className="font-serif text-3xl font-bold text-white mb-4">Sé Parte de la Próxima Historia</h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Cada niño tiene una historia esperando ser escrita. Tu apoyo puede ser el capítulo que cambie su vida
                para siempre.
              </p>
              <Button asChild size="lg" variant="secondary" className="rounded-full">
                <Link href="/apadrinar">
                  Apadrinar un Niño Ahora
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
