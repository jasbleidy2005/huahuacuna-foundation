import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, BookOpen, Smile, ArrowRight, HandHeart, Quote, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Main Section with proper centering */}
      <main className="flex-1 pt-24 w-full">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-background to-secondary/10">
          <div className="container mx-auto px-4 py-20 md:py-32">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2 text-sm font-medium text-primary-foreground">
                  <Heart className="h-4 w-4 fill-current" />
                  <span>Transformando vidas desde 2010</span>
                </div>
                <h1 className="font-serif text-4xl font-bold leading-tight text-balance text-foreground md:text-5xl lg:text-6xl">
                  Conectando Corazones, Transformando Vidas
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                  Apadrina un niño y sé parte del cambio. Brindamos apoyo integral en educación, salud, nutrición y
                  bienestar a niños en edad escolar.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <Link href="/apadrinar">
                      Apadrinar un Niño
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full bg-transparent">
                    <Link href="/nosotros">Conoce Más</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square overflow-hidden rounded-3xl bg-muted">
                  <img
                    src="/happy-children-smiling-at-school-in-colombia--warm.jpg"
                    alt="Niños felices en la escuela"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 rounded-2xl bg-card p-6 shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                      <Users className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">500+</p>
                      <p className="text-sm text-muted-foreground">Niños Apadrinados</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center space-y-4">
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
                Sobre Fundación Huahuacuna
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Somos una organización sin fines de lucro dedicada a mejorar la calidad de vida de niños en edad
                escolar. A través de programas de apadrinamiento, brindamos apoyo integral en educación, salud,
                vestimenta, nutrición, recreación y educación informal.
              </p>
              <Button asChild variant="link" className="text-primary">
                <Link href="/nosotros">
                  Conoce nuestra historia
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Highlight Blocks */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="group overflow-hidden border-none shadow-sm transition-all hover:shadow-md">
                <CardContent className="p-6 space-y-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20 transition-colors group-hover:bg-primary">
                    <Heart className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground">Apadrinamiento</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Conecta con un niño y acompaña su crecimiento. Recibe actualizaciones y comunícate de forma segura.
                  </p>
                  <Button asChild variant="link" className="p-0 h-auto text-primary">
                    <Link href="/apadrinar">
                      Apadrinar ahora
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="group overflow-hidden border-none shadow-sm transition-all hover:shadow-md">
                <CardContent className="p-6 space-y-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/20 transition-colors group-hover:bg-secondary">
                    <HandHeart className="h-7 w-7 text-secondary transition-colors group-hover:text-secondary-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground">Voluntariado</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Únete a nuestro equipo de voluntarios y marca la diferencia en la vida de los niños.
                  </p>
                  <Button asChild variant="link" className="p-0 h-auto text-secondary">
                    <Link href="/voluntariado">
                      Ser voluntario
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="group overflow-hidden border-none shadow-sm transition-all hover:shadow-md">
                <CardContent className="p-6 space-y-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/20 transition-colors group-hover:bg-accent">
                    <BookOpen className="h-7 w-7 text-accent transition-colors group-hover:text-accent-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground">Proyectos</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Conoce nuestros programas educativos, de salud y recreación para el desarrollo integral.
                  </p>
                  <Button asChild variant="link" className="p-0 h-auto text-accent">
                    <Link href="/proyectos">
                      Ver proyectos
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="group overflow-hidden border-none shadow-sm transition-all hover:shadow-md">
                <CardContent className="p-6 space-y-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-chart-4/20 transition-colors group-hover:bg-chart-4">
                    <Smile className="h-7 w-7 text-chart-4 transition-colors group-hover:text-white" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground">Donaciones</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Tu aporte hace la diferencia. Apoya nuestros programas con una donación única o recurrente.
                  </p>
                  <Button asChild variant="link" className="p-0 h-auto text-chart-4">
                    <Link href="/donar">
                      Donar ahora
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Storytelling Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center space-y-4">
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
                Historias que Inspiran
              </h2>
              <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
                Conoce las historias reales de niños cuyas vidas han sido transformadas gracias al amor y apoyo de sus
                padrinos
              </p>
            </div>

            {/* Horizontal Scroll Cards */}
            <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
              {/* Story Card 1 */}
              <Card className="min-w-[350px] md:min-w-[400px] border-none shadow-xl snap-start">
                <CardContent className="p-0">
                  <div className="relative h-64 overflow-hidden rounded-t-xl">
                    <img
                      src="/happy-colombian-girl-8-years-old-smiling.jpg"
                      alt="Historia de Sofía"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                        Historia Destacada
                      </div>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-start gap-2">
                      <Quote className="h-5 w-5 text-primary shrink-0 mt-1" />
                      <p className="text-sm text-muted-foreground italic">
                        "Gracias a mi padrino, ahora puedo ir a la escuela y perseguir mi sueño de ser doctora"
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Heart className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Sofía García, 8 años</p>
                        <p className="text-xs text-muted-foreground">Bogotá, Colombia</p>
                      </div>
                    </div>
                    <Button asChild variant="link" className="p-0 h-auto text-primary">
                      <Link href="/historias">
                        Leer historia completa
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Story Card 2 */}
              <Card className="min-w-[350px] md:min-w-[400px] border-none shadow-xl snap-start">
                <CardContent className="p-0">
                  <div className="relative h-64 overflow-hidden rounded-t-xl">
                    <img
                      src="/happy-colombian-boy-10-years-old-smiling.jpg"
                      alt="Historia de Juan"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-start gap-2">
                      <Quote className="h-5 w-5 text-secondary shrink-0 mt-1" />
                      <p className="text-sm text-muted-foreground italic">
                        "El apoyo que recibí me ayudó a descubrir mi pasión por las matemáticas y la ciencia"
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center">
                        <BookOpen className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Juan Martínez, 10 años</p>
                        <p className="text-xs text-muted-foreground">Medellín, Colombia</p>
                      </div>
                    </div>
                    <Button asChild variant="link" className="p-0 h-auto text-secondary">
                      <Link href="/historias">
                        Leer historia completa
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Story Card 3 */}
              <Card className="min-w-[350px] md:min-w-[400px] border-none shadow-xl snap-start">
                <CardContent className="p-0">
                  <div className="relative h-64 overflow-hidden rounded-t-xl">
                    <img
                      src="/happy-colombian-girl-7-years-old-smiling.jpg"
                      alt="Historia de Ana"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-start gap-2">
                      <Quote className="h-5 w-5 text-accent shrink-0 mt-1" />
                      <p className="text-sm text-muted-foreground italic">
                        "Ahora tengo amigos, voy a la escuela y soy muy feliz. Todo cambió cuando conocí a mi madrina"
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center">
                        <Smile className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Ana López, 7 años</p>
                        <p className="text-xs text-muted-foreground">Cali, Colombia</p>
                      </div>
                    </div>
                    <Button asChild variant="link" className="p-0 h-auto text-accent">
                      <Link href="/historias">
                        Leer historia completa
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Button asChild variant="outline" size="lg" className="rounded-full bg-transparent">
                <Link href="/historias">
                  Ver Todas las Historias
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Impact Transparency Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
                  Transparencia en Cada Paso
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Creemos en la transparencia total. Cada contribución es rastreada y reportada para que sepas
                  exactamente cómo tu apoyo está transformando vidas.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 shrink-0">
                      <TrendingUp className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Reportes Mensuales</p>
                      <p className="text-sm text-muted-foreground">
                        Recibe actualizaciones detalladas sobre el progreso de tu ahijado
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/20 shrink-0">
                      <Users className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Impacto Medible</p>
                      <p className="text-sm text-muted-foreground">
                        Visualiza el impacto real en educación, salud y bienestar
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 shrink-0">
                      <Heart className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Conexión Directa</p>
                      <p className="text-sm text-muted-foreground">
                        Comunícate de forma segura y construye una relación significativa
                      </p>
                    </div>
                  </div>
                </div>
                <Button asChild size="lg" className="rounded-full">
                  <Link href="/impacto">
                    Ver Mapa de Impacto
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
                  <div className="h-full w-full bg-card rounded-2xl shadow-2xl flex items-center justify-center">
                    <div className="text-center space-y-4 p-8">
                      <TrendingUp className="h-16 w-16 text-primary mx-auto" />
                      <p className="text-4xl font-bold text-foreground">523</p>
                      <p className="text-muted-foreground">Niños Apadrinados</p>
                      <div className="grid grid-cols-2 gap-4 pt-4">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-secondary">98%</p>
                          <p className="text-xs text-muted-foreground">Graduación</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-accent">1,247</p>
                          <p className="text-xs text-muted-foreground">Padrinos</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center space-y-4">
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
                Nuestro Impacto en la Comunidad
              </h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Momentos que reflejan el amor, la alegría y el crecimiento de nuestros niños
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="overflow-hidden rounded-2xl bg-muted aspect-[4/3]">
                <img
                  src="/children-studying-together-in-classroom--happy-lea.jpg"
                  alt="Niños estudiando"
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-2xl bg-muted aspect-[4/3]">
                <img
                  src="/volunteers-playing-with-children-outdoors--communi.jpg"
                  alt="Actividades comunitarias"
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-2xl bg-muted aspect-[4/3]">
                <img
                  src="/children-eating-healthy-meal-together--nutrition-p.jpg"
                  alt="Programa de nutrición"
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-primary via-primary/90 to-secondary py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center space-y-6">
              <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl text-balance">
                Sé Parte del Cambio Hoy
              </h2>
              <p className="text-lg text-primary-foreground/90 leading-relaxed text-pretty">
                Cada niño merece una oportunidad de crecer con amor, educación y esperanza. Tu apoyo puede transformar
                una vida para siempre.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Button asChild size="lg" variant="secondary" className="rounded-full">
                  <Link href="/apadrinar">
                    Apadrinar un Niño
                    <Heart className="ml-2 h-4 w-4 fill-current" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Link href="/donar">Hacer una Donación</Link>
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
