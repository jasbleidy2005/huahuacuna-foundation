import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Heart, Shield, TrendingUp, Users, CheckCircle } from "lucide-react"

const donationAmounts = [
  { amount: 50000, description: "Alimentación para 1 niño por 1 mes" },
  { amount: 100000, description: "Útiles escolares para 2 niños" },
  { amount: 200000, description: "Chequeo médico para 5 niños" },
  { amount: 500000, description: "Beca educativa por 1 semestre" },
]

const impactStats = [
  {
    icon: Users,
    value: "1,200+",
    label: "Niños Beneficiados",
    color: "bg-primary/20 text-primary",
  },
  {
    icon: Heart,
    value: "$850M",
    label: "Donaciones Recibidas",
    color: "bg-secondary/20 text-secondary",
  },
  {
    icon: TrendingUp,
    value: "95%",
    label: "Impacto Directo",
    color: "bg-accent/20 text-accent",
  },
  {
    icon: Shield,
    value: "100%",
    label: "Transparencia",
    color: "bg-chart-4/20 text-chart-4",
  },
]

const benefits = [
  "Certificado de donación para declaración de renta",
  "Reportes trimestrales de impacto",
  "Invitaciones a eventos exclusivos",
  "Reconocimiento en nuestro sitio web",
  "Actualizaciones mensuales por email",
]

export default function DonarPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-background to-secondary/10 py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center space-y-6">
              <Badge className="rounded-full bg-primary text-primary-foreground">Haz la Diferencia</Badge>
              <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl text-balance">
                Tu Donación Transforma Vidas
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Cada contribución, sin importar el monto, tiene un impacto real en la vida de los niños. Juntos podemos
                construir un futuro mejor para nuestra comunidad.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="border-y border-border bg-muted/30 py-12">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-4">
              {impactStats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="text-center space-y-3">
                    <div className="flex justify-center">
                      <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${stat.color}`}>
                        <Icon className="h-7 w-7" />
                      </div>
                    </div>
                    <p className="font-serif text-3xl font-bold text-foreground md:text-4xl">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Donation Form Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              {/* Form */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">Realiza tu Donación</h2>
                  <p className="text-lg text-muted-foreground text-pretty">
                    Elige el monto que deseas donar y completa el formulario seguro
                  </p>
                </div>

                <Card className="border-none shadow-sm">
                  <CardContent className="p-8 space-y-6">
                    <div className="space-y-4">
                      <Label className="text-base font-semibold">Selecciona un monto</Label>
                      <RadioGroup defaultValue="100000" className="grid gap-3">
                        {donationAmounts.map((item) => (
                          <label
                            key={item.amount}
                            className="flex cursor-pointer items-center gap-4 rounded-2xl border-2 border-border p-4 transition-colors hover:border-primary has-[:checked]:border-primary has-[:checked]:bg-primary/5"
                          >
                            <RadioGroupItem value={item.amount.toString()} />
                            <div className="flex-1">
                              <p className="font-semibold text-foreground">
                                ${item.amount.toLocaleString("es-CO")} COP
                              </p>
                              <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                          </label>
                        ))}
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="customAmount">O ingresa otro monto</Label>
                      <Input id="customAmount" type="number" placeholder="Monto personalizado" className="rounded-xl" />
                    </div>

                    <div className="space-y-4 pt-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nombre Completo</Label>
                        <Input id="name" placeholder="Tu nombre" className="rounded-xl" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Correo Electrónico</Label>
                        <Input id="email" type="email" placeholder="tu@email.com" className="rounded-xl" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Teléfono</Label>
                        <Input id="phone" type="tel" placeholder="+57 300 123 4567" className="rounded-xl" />
                      </div>
                    </div>

                    <div className="space-y-3 pt-4">
                      <Label className="text-base font-semibold">Tipo de Donación</Label>
                      <RadioGroup defaultValue="once" className="grid gap-3">
                        <label className="flex cursor-pointer items-center gap-3 rounded-2xl border-2 border-border p-4 transition-colors hover:border-primary has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                          <RadioGroupItem value="once" />
                          <div>
                            <p className="font-semibold text-foreground">Donación Única</p>
                            <p className="text-sm text-muted-foreground">Haz una contribución por única vez</p>
                          </div>
                        </label>
                        <label className="flex cursor-pointer items-center gap-3 rounded-2xl border-2 border-border p-4 transition-colors hover:border-primary has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                          <RadioGroupItem value="monthly" />
                          <div>
                            <p className="font-semibold text-foreground">Donación Mensual</p>
                            <p className="text-sm text-muted-foreground">Apoya de forma recurrente cada mes</p>
                          </div>
                        </label>
                      </RadioGroup>
                    </div>

                    <Button
                      size="lg"
                      className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <Heart className="mr-2 h-5 w-5" />
                      Donar Ahora
                    </Button>

                    <p className="text-center text-xs text-muted-foreground">
                      Transacción segura y encriptada. Tus datos están protegidos.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Benefits & Info */}
              <div className="space-y-8">
                <Card className="border-none bg-gradient-to-br from-primary/10 to-secondary/5 shadow-sm">
                  <CardContent className="p-8 space-y-6">
                    <div className="space-y-3">
                      <h3 className="font-serif text-2xl font-bold text-foreground">¿Por qué donar con nosotros?</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Somos una organización transparente y comprometida. El 95% de tu donación va directamente a
                        programas que benefician a los niños.
                      </p>
                    </div>

                    <div className="space-y-3">
                      {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/20">
                            <CheckCircle className="h-4 w-4 text-primary" />
                          </div>
                          <p className="text-sm text-foreground">{benefit}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-sm">
                  <CardContent className="p-8 space-y-4">
                    <h3 className="font-serif text-xl font-bold text-foreground">Otras Formas de Ayudar</h3>
                    <div className="space-y-3">
                      <Button asChild variant="outline" className="w-full justify-start rounded-xl bg-transparent">
                        <a href="/apadrinar">Apadrina un Niño</a>
                      </Button>
                      <Button asChild variant="outline" className="w-full justify-start rounded-xl bg-transparent">
                        <a href="/voluntariado">Sé Voluntario</a>
                      </Button>
                      <Button asChild variant="outline" className="w-full justify-start rounded-xl bg-transparent">
                        <a href="/proyectos">Apoya un Proyecto</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <div className="rounded-2xl bg-muted p-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold text-foreground">Donación Segura</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Utilizamos tecnología de encriptación de última generación para proteger tu información personal y
                    financiera.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container">
            <div className="mb-12 text-center space-y-4">
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                Lo Que Dicen Nuestros Donantes
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
                Historias de personas que han decidido hacer la diferencia
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  name: "Carolina Pérez",
                  role: "Donante Mensual",
                  quote:
                    "Donar mensualmente me permite ser parte del cambio de forma constante. Ver el impacto en los niños es increíble.",
                },
                {
                  name: "Roberto Gómez",
                  role: "Empresario",
                  quote:
                    "La transparencia de la fundación me da confianza. Sé exactamente cómo se usa mi donación y el impacto que genera.",
                },
                {
                  name: "Sofía Martínez",
                  role: "Donante Anual",
                  quote:
                    "Cada año dono en nombre de mi familia. Es nuestra forma de retribuir y enseñar valores a nuestros hijos.",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="border-none shadow-sm">
                  <CardContent className="p-6 space-y-4">
                    <p className="text-muted-foreground leading-relaxed italic">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
