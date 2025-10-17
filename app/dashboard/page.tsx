import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Heart, Calendar, MessageCircle, Gift, TrendingUp, Award, Bell, Download, Send } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-background via-muted/20 to-background">
      <Header />

      <main className="flex-1 pt-24 pb-16">
        <div className="container">
          {/* Welcome Section */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl">Bienvenido, María</h1>
              <p className="text-muted-foreground mt-2">Gracias por ser parte del cambio en la vida de Sofía</p>
            </div>
          
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Left Column - Child Profile & Stats */}
            <div className="lg:col-span-2 space-y-6">
              {/* Child Profile Card */}
              <Card className="overflow-hidden border-none shadow-lg">
                <div className="h-32 bg-gradient-to-r from-primary via-secondary to-accent" />
                <CardContent className="relative pt-0 pb-6">
                  <div className="flex flex-col md:flex-row gap-6 items-start md:items-end -mt-16">
                    <div className="relative">
                      <div className="h-32 w-32 rounded-2xl border-4 border-card bg-muted overflow-hidden shadow-xl">
                        <Image
                          src="/happy-colombian-girl-8-years-old-smiling.jpg"
                          alt="Sofía"
                          width={128}
                          height={128}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <Badge className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground">
                        Activo
                      </Badge>
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-3">
                        <h2 className="font-serif text-2xl font-bold text-foreground">Sofía García</h2>
                        <Badge variant="outline" className="text-xs">
                          8 años
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                       Grado 3° • Le encanta dibujar y las matemáticas
                      </p>
                      <div className="flex gap-2 pt-2">
                        <Button size="sm" className="rounded-full bg-primary">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Enviar Mensaje
                        </Button>
                        <Button size="sm" variant="outline" className="rounded-full bg-transparent">
                          <Gift className="h-4 w-4 mr-2" />
                          Enviar Regalo
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Sponsorship Stats */}
              <div className="grid gap-4 md:grid-cols-3">
                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                        <Calendar className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-foreground">2 años</p>
                        <p className="text-sm text-muted-foreground">Apadrinando</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/20">
                        <MessageCircle className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-foreground">24</p>
                        <p className="text-sm text-muted-foreground">Mensajes</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
                        <Award className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-foreground">8</p>
                        <p className="text-sm text-muted-foreground">Logros</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Progress Timeline */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Progreso de Sofía
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-foreground">Rendimiento Académico</span>
                      <span className="text-muted-foreground">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-foreground">Asistencia Escolar</span>
                      <span className="text-muted-foreground">95%</span>
                    </div>
                    <Progress value={95} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-foreground">Participación en Actividades</span>
                      <span className="text-muted-foreground">78%</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-foreground">Salud y Nutrición</span>
                      <span className="text-muted-foreground">92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              {/* Recent Updates */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Actualizaciones Recientes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-4 p-4 rounded-xl bg-muted/50">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 shrink-0">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-foreground">¡Nuevo logro desbloqueado!</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Sofía obtuvo el primer lugar en el concurso de matemáticas de su escuela
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">Hace 2 días</p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 rounded-xl bg-muted/50">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/20 shrink-0">
                      <MessageCircle className="h-5 w-5 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-foreground">Nuevo mensaje de Sofía</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        "Gracias por tu apoyo. Te envío un dibujo que hice en clase de arte"
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">Hace 5 días</p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 rounded-xl bg-muted/50">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 shrink-0">
                      <Calendar className="h-5 w-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-foreground">Próximo cumpleaños</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        El cumpleaños de Sofía es el 15 de marzo. ¡Envíale un mensaje especial!
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">En 12 días</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Quick Actions & Achievements */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Acciones Rápidas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button asChild className="w-full justify-start rounded-full bg-transparent" variant="outline">
                    <Link href="/bitacora/1">
                      <Download className="h-4 w-4 mr-2" />
                      Ver Bitácora Completa
                    </Link>
                  </Button>
                  <Button asChild className="w-full justify-start rounded-full bg-transparent" variant="outline">
                    <Link href="/apadrinar/1/chat">
                      <Send className="h-4 w-4 mr-2" />
                      Enviar Mensaje
                    </Link>
                  </Button>
                  <Button asChild className="w-full justify-start rounded-full bg-transparent" variant="outline">
                    <Link href="/donar">
                      <Gift className="h-4 w-4 mr-2" />
                      Hacer Donación Extra
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Achievements */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Logros de Sofía</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-primary/10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm text-foreground">Excelencia Académica</p>
                      <p className="text-xs text-muted-foreground">Promedio 4.5/5.0</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/20">
                      <Heart className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm text-foreground">Asistencia Perfecta</p>
                      <p className="text-xs text-muted-foreground">6 meses consecutivos</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-accent/10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
                      <TrendingUp className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-sm text-foreground">Mejora Continua</p>
                      <p className="text-xs text-muted-foreground">+15% este semestre</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Impact Summary */}
              <Card className="border-none shadow-lg bg-gradient-to-br from-primary/10 to-secondary/10">
                <CardHeader>
                  <CardTitle className="text-lg">Tu Impacto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center p-4">
                    <p className="text-4xl font-bold text-foreground">$2,400</p>
                    <p className="text-sm text-muted-foreground mt-1">Contribución total</p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                    
                    </div>
                    <div className="flex justify-between">
                    
                    </div>
                    <div className="flex justify-between">
                      
                    </div>
                    <div className="flex justify-between">
                      
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
