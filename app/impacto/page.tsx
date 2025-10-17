import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Heart, GraduationCap, Stethoscope, MapPin, TrendingUp } from "lucide-react"

export default function ImpactoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 pt-24 pb-16">
        <div className="container">
          {/* Hero Section */}
          <div className="mb-12 text-center space-y-4">
            <Badge className="bg-primary text-primary-foreground">Transparencia e Impacto</Badge>
            <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
              Nuestro Impacto en la Comunidad
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Cada contribución transforma vidas. Conoce el alcance de nuestro trabajo y cómo juntos estamos
              construyendo un futuro mejor para los niños de Colombia.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
            <Card className="border-none shadow-lg bg-gradient-to-br from-primary/10 to-primary/5">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20">
                    <Users className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-foreground">523</p>
                    <p className="text-sm text-muted-foreground">Niños Apadrinados</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-gradient-to-br from-secondary/10 to-secondary/5">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/20">
                    <Heart className="h-7 w-7 text-secondary" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-foreground">1,247</p>
                    <p className="text-sm text-muted-foreground">Padrinos Activos</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-gradient-to-br from-accent/10 to-accent/5">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/20">
                    <GraduationCap className="h-7 w-7 text-accent" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-foreground">98%</p>
                    <p className="text-sm text-muted-foreground">Tasa de Graduación</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-gradient-to-br from-chart-4/10 to-chart-4/5">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-chart-4/20">
                    <Stethoscope className="h-7 w-7 text-chart-4" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-foreground">2,150</p>
                    <p className="text-sm text-muted-foreground">Consultas Médicas</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Interactive Map */}
          <Card className="border-none shadow-xl mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Mapa de Impacto - Regiones Atendidas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-[500px] bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl overflow-hidden">
                {/* Simplified Colombia Map Visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full max-w-2xl h-full p-8">
                    {/* Map placeholder with regions */}
                    <div className="relative w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl border-2 border-dashed border-primary/20 flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <MapPin className="h-16 w-16 text-primary mx-auto" />
                        <p className="text-lg font-semibold text-foreground">Mapa Interactivo de Colombia</p>
                        <p className="text-sm text-muted-foreground max-w-md">
                          Presencia en 8 departamentos: Bogotá, Cundinamarca, Antioquia, Valle del Cauca, Santander,
                          Atlántico, Bolívar y Nariño
                        </p>
                      </div>
                    </div>

                    {/* Region Markers */}
                    <div className="absolute top-1/4 left-1/3 flex items-center gap-2 bg-card p-3 rounded-full shadow-lg animate-pulse">
                      <div className="h-3 w-3 rounded-full bg-primary" />
                      <span className="text-xs font-medium">Bogotá: 156 niños</span>
                    </div>

                    <div className="absolute top-1/3 left-1/4 flex items-center gap-2 bg-card p-3 rounded-full shadow-lg animate-pulse delay-100">
                      <div className="h-3 w-3 rounded-full bg-secondary" />
                      <span className="text-xs font-medium">Antioquia: 98 niños</span>
                    </div>

                    <div className="absolute bottom-1/3 right-1/3 flex items-center gap-2 bg-card p-3 rounded-full shadow-lg animate-pulse delay-200">
                      <div className="h-3 w-3 rounded-full bg-accent" />
                      <span className="text-xs font-medium">Valle: 87 niños</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="mt-6 flex flex-wrap gap-4 justify-center">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-primary" />
                  <span className="text-sm text-muted-foreground">Región Central</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-secondary" />
                  <span className="text-sm text-muted-foreground">Región Andina</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-accent" />
                  <span className="text-sm text-muted-foreground">Región Pacífica</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-chart-4" />
                  <span className="text-sm text-muted-foreground">Región Caribe</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Program Impact */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  Educación
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Útiles escolares entregados</span>
                    <span className="font-semibold text-foreground">523</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Uniformes donados</span>
                    <span className="font-semibold text-foreground">523</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Becas otorgadas</span>
                    <span className="font-semibold text-foreground">89</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Stethoscope className="h-5 w-5 text-secondary" />
                  Salud
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Consultas médicas</span>
                    <span className="font-semibold text-foreground">2,150</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Vacunas aplicadas</span>
                    <span className="font-semibold text-foreground">1,876</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tratamientos dentales</span>
                    <span className="font-semibold text-foreground">654</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Heart className="h-5 w-5 text-accent" />
                  Nutrición
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Comidas servidas/mes</span>
                    <span className="font-semibold text-foreground">15,690</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Niños con mejora nutricional</span>
                    <span className="font-semibold text-foreground">487</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Talleres de nutrición</span>
                    <span className="font-semibold text-foreground">24</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Growth Trend */}
          <Card className="border-none shadow-xl mt-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Crecimiento del Programa
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-2">
                  <TrendingUp className="h-12 w-12 text-primary mx-auto" />
                  <p className="text-lg font-semibold text-foreground">Gráfico de Crecimiento</p>
                  <p className="text-sm text-muted-foreground">+35% de niños apadrinados en el último año</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
