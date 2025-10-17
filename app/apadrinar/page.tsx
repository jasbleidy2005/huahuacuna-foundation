// Importaciones de componentes y librerías necesarias
import { Header } from "@/components/header" // Encabezado del sitio web
import { Footer } from "@/components/footer" // Pie de página del sitio web
import { Button } from "@/components/ui/button" // Botón reutilizable con estilo
import { Card, CardContent } from "@/components/ui/card" // Tarjeta y contenido interno
import { Input } from "@/components/ui/input" // Campo de texto para buscar
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select" // Componente para listas desplegables
import { Badge } from "@/components/ui/badge" // Etiquetas o chips de intereses
import { Heart, Search, MapPin, Calendar } from "lucide-react" // Íconos SVG de la librería lucide-react
import Link from "next/link" // Navegación interna de Next.js sin recargar la página

// Datos simulados (mock data) de los niños que se pueden apadrinar
const children = [
  {
    id: 1,
    name: "María González",
    age: 8,
    school: "Escuela Primaria San José",
    interests: ["Dibujo", "Matemáticas", "Fútbol"],
    description: "María es una niña alegre y curiosa que ama aprender. Sueña con ser maestra algún día.",
    image: "/happy-colombian-girl-8-years-old-smiling.jpg",
  },
  {
    id: 2,
    name: "Carlos Ramírez",
    age: 10,
    school: "Colegio Comunitario La Esperanza",
    interests: ["Ciencias", "Lectura", "Música"],
    description: "Carlos es un estudiante dedicado con gran interés en las ciencias. Le encanta leer sobre el espacio.",
    image: "/happy-colombian-boy-10-years-old-smiling.jpg",
  },
  {
    id: 3,
    name: "Ana Sofía Torres",
    age: 7,
    school: "Escuela Rural El Porvenir",
    interests: ["Danza", "Arte", "Naturaleza"],
    description: "Ana Sofía es creativa y expresiva. Le encanta bailar y crear arte con materiales reciclados.",
    image: "/happy-colombian-girl-7-years-old-smiling.jpg",
  },
  {
    id: 4,
    name: "Diego Martínez",
    age: 9,
    school: "Colegio Integrado Simón Bolívar",
    interests: ["Deportes", "Historia", "Computación"],
    description: "Diego es activo y sociable. Le fascina aprender sobre la historia de Colombia y jugar fútbol.",
    image: "/happy-colombian-boy-9-years-old-smiling.jpg",
  },
  {
    id: 5,
    name: "Valentina López",
    age: 11,
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
    school: "Colegio San Francisco",
    interests: ["Robótica", "Ajedrez", "Pintura"],
    description: "Santiago es curioso y analítico. Le encanta resolver problemas y crear cosas con sus manos.",
    image: "/happy-colombian-boy-8-years-old-smiling.jpg",
  },
]

// Componente principal de la página "Apadrinar"
export default function ApadrinarPage() {
  return (
    // Contenedor principal de la página
    <div className="flex min-h-screen flex-col">
      {/* Encabezado del sitio */}
      <Header />

      <main className="flex-1">
        {/* Sección Hero (parte superior con título y descripción) */}
        <section className="bg-gradient-to-br from-primary/20 via-background to-secondary/10 pt-34 pb-16 md:pt-40 pb-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center space-y-6">
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


        {/* Sección de tarjetas con los niños */}
        <section className="py-12 md:py-16">
          <div className="container">
            {/* Grid de 3 columnas en pantallas grandes */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Se recorre el arreglo children y se genera una tarjeta por cada niño */}
              {children.map((child) => (
                <Card
                  key={child.id}
                  className="group overflow-hidden border-none shadow-sm transition-all hover:shadow-lg"
                >
                  {/* Imagen del niño */}
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img
                      src={child.image || "/placeholder.svg"}
                      alt={child.name}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>

                  {/* Contenido de la tarjeta */}
                  <CardContent className="p-6 space-y-4">
                    <div className="space-y-2">
                      {/* Nombre del niño */}
                      <h3 className="font-serif text-xl font-bold text-foreground">{child.name}</h3>

                      {/* Edad y ubicación (sin texto de ubicación aún) */}
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <span>{child.age} años</span>
                        </div>
                      </div>
                    </div>

                    {/* Descripción breve del niño */}
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{child.description}</p>

                    {/* Intereses del niño (máximo 3 badges) */}
                    <div className="flex flex-wrap gap-2">
                      {child.interests.slice(0, 3).map((interest) => (
                        <Badge key={interest} variant="secondary" className="rounded-full">
                          {interest}
                        </Badge>
                      ))}
                    </div>

                    {/* Botón para ver el perfil completo del niño */}
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

        {/* Sección informativa sobre cómo funciona el apadrinamiento */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl space-y-8">
              {/* Título y subtítulo */}
              <div className="text-center space-y-4">
                <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
                  ¿Cómo Funciona el Apadrinamiento?
                </h2>
                <p className="text-lg text-muted-foreground text-pretty">
                  El proceso es simple y transparente
                </p>
              </div>

              {/* Tres pasos explicativos */}
              <div className="grid gap-6 md:grid-cols-3">
                {/* Paso 1 */}
                <div className="space-y-3 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
                    1
                  </div>
                  <h3 className="font-semibold text-foreground">Elige un Niño</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Conoce las historias y elige el niño que deseas apadrinar
                  </p>
                </div>

                {/* Paso 2 */}
                <div className="space-y-3 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground font-bold text-lg">
                    2
                  </div>
                  <h3 className="font-semibold text-foreground">Completa el Registro</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Llena un formulario simple y elige tu plan de apadrinamiento
                  </p>
                </div>

                {/* Paso 3 */}
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

      {/* Pie de página del sitio */}
      <Footer />
    </div>
  )
}
