import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Heart, Search, MapPin, Calendar } from "lucide-react"
import Link from "next/link"

// Mock data for children
const children = [
  {
    id: 1,
    name: "María González",
    age: 8,
    location: "Bogotá",
    school: "Escuela Primaria San José",
    interests: ["Dibujo", "Matemáticas", "Fútbol"],
    description: "María es una niña alegre y curiosa que ama aprender. Sueña con ser maestra algún día.",
    image: "/happy-colombian-girl-8-years-old-smiling.jpg",
  },
  {
    id: 2,
    name: "Carlos Ramírez",
    age: 10,
    location: "Medellín",
    school: "Colegio Comunitario La Esperanza",
    interests: ["Ciencias", "Lectura", "Música"],
    description: "Carlos es un estudiante dedicado con gran interés en las ciencias. Le encanta leer sobre el espacio.",
    image: "/happy-colombian-boy-10-years-old-smiling.jpg",
  },
  {
    id: 3,
    name: "Ana Sofía Torres",
    age: 7,
    location: "Cali",
    school: "Escuela Rural El Porvenir",
    interests: ["Danza", "Arte", "Naturaleza"],
    description: "Ana Sofía es creativa y expresiva. Le encanta bailar y crear arte con materiales reciclados.",
    image: "/happy-colombian-girl-7-years-old-smiling.jpg",
  },
  {
    id: 4,
    name: "Diego Martínez",
    age: 9,
    location: "Cartagena",
    school: "Colegio Integrado Simón Bolívar",
    interests: ["Deportes", "Historia", "Computación"],
    description: "Diego es activo y sociable. Le fascina aprender sobre la historia de Colombia y jugar fútbol.",
    image: "/happy-colombian-boy-9-years-old-smiling.jpg",
  },
  {
    id: 5,
    name: "Valentina López",
    age: 11,
    location: "Barranquilla",
    school: "Escuela Comunitaria Nuevo Horizonte",
    interests: ["Escritura", "Teatro", "Idiomas"],
    description:
      "Valentina es una niña expresiva que ama escribir historias. Sueña con ser escritora y viajar por el mundo.",
    image: "/happy-colombian-girl-11-years-old-smiling.jpg",
  },
  {
    id: 6,
    name: "Santiago Pérez",
    age: 8,
    location: "Bucaramanga",
    school: "Colegio San Francisco",
    interests: ["Robótica", "Ajedrez", "Pintura"],
    description: "Santiago es curioso y analítico. Le encanta resolver problemas y crear cosas con sus manos.",
    image: "/happy-colombian-boy-8-years-old-smiling.jpg",
  },
]

export default function ApadrinarPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/20 via-background to-secondary/10 py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2 text-sm font-medium text-primary-foreground">
                <Heart className="h-4 w-4 fill-current" />
                <span>Cambia una vida hoy</span>
              </div>
              <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
                Conoce a los Niños que Esperan tu Apoyo
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Cada niño tiene una historia única y sueños por cumplir. Tu apadrinamiento puede hacer la diferencia en
                su educación, salud y bienestar.
              </p>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="border-b border-border bg-muted/30 py-6">
          <div className="container">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-1 items-center gap-2">
                <Search className="h-5 w-5 text-muted-foreground" />
                <Input placeholder="Buscar por nombre..." className="max-w-sm border-none bg-background" />
              </div>
              <div className="flex flex-wrap gap-3">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[140px] bg-background">
                    <SelectValue placeholder="Edad" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas las edades</SelectItem>
                    <SelectItem value="6-8">6-8 años</SelectItem>
                    <SelectItem value="9-11">9-11 años</SelectItem>
                    <SelectItem value="12-14">12-14 años</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[160px] bg-background">
                    <SelectValue placeholder="Ubicación" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas las ciudades</SelectItem>
                    <SelectItem value="bogota">Bogotá</SelectItem>
                    <SelectItem value="medellin">Medellín</SelectItem>
                    <SelectItem value="cali">Cali</SelectItem>
                    <SelectItem value="cartagena">Cartagena</SelectItem>
                    <SelectItem value="barranquilla">Barranquilla</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Children Grid */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {children.map((child) => (
                <Card
                  key={child.id}
                  className="group overflow-hidden border-none shadow-sm transition-all hover:shadow-lg"
                >
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img
                      src={child.image || "/placeholder.svg"}
                      alt={child.name}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-serif text-xl font-bold text-foreground">{child.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{child.age} años</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{child.location}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{child.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {child.interests.slice(0, 3).map((interest) => (
                        <Badge key={interest} variant="secondary" className="rounded-full">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      asChild
                      className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <Link href={`/apadrinar/${child.id}`}>Ver Perfil Completo</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl space-y-8">
              <div className="text-center space-y-4">
                <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
                  ¿Cómo Funciona el Apadrinamiento?
                </h2>
                <p className="text-lg text-muted-foreground text-pretty">El proceso es simple y transparente</p>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="space-y-3 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
                    1
                  </div>
                  <h3 className="font-semibold text-foreground">Elige un Niño</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Conoce las historias y elige el niño que deseas apadrinar
                  </p>
                </div>
                <div className="space-y-3 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground font-bold text-lg">
                    2
                  </div>
                  <h3 className="font-semibold text-foreground">Completa el Registro</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Llena un formulario simple y elige tu plan de apadrinamiento
                  </p>
                </div>
                <div className="space-y-3 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold text-lg">
                    3
                  </div>
                  <h3 className="font-semibold text-foreground">Mantente Conectado</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Recibe actualizaciones y comunícate de forma segura con la fundación
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
