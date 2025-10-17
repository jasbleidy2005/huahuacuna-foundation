// Importación de componentes personalizados y librerías
import { Header } from "@/components/header"                // Encabezado de la página
import { Footer } from "@/components/footer"                // Pie de página
import { Button } from "@/components/ui/button"             // Botón reutilizable
import { Card, CardContent } from "@/components/ui/card"    // Componente de tarjeta
import { Badge } from "@/components/ui/badge"               // Etiqueta decorativa
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs" // Sistema de pestañas
import { Heart, MapPin, Calendar, School, Sparkles, ArrowLeft, MessageCircle } from "lucide-react" // Iconos
import Link from "next/link"                                // Enlace interno de Next.js
import { notFound } from "next/navigation"                  // Función para manejar páginas no encontradas

// Datos simulados (mock data). En una aplicación real, estos datos vendrían desde una base de datos o API.
const childrenData: Record<string, any> = {
  "1": {
    id: 1,
    name: "María González",
    age: 8,
    school: "Escuela Primaria San José",
    grade: "3er Grado",
    interests: ["Dibujo", "Matemáticas", "Fútbol"],
    description:
      "María es una niña alegre y curiosa que ama aprender. Sueña con ser maestra algún día para ayudar a otros niños a descubrir el amor por el conocimiento.",
    story:
      "María vive con su abuela en un barrio humilde de Bogotá. A pesar de las dificultades económicas, siempre mantiene una sonrisa y una actitud positiva...",
    needs: ["Útiles escolares", "Uniformes", "Apoyo nutricional", "Material educativo"],
    image: "/happy-colombian-girl-8-years-old-smiling-portrait.jpg",
  },
  "2": {
    id: 2,
    name: "Carlos Ramírez",
    age: 10,
    location: "Medellín",
    school: "Colegio Comunitario La Esperanza",
    grade: "5to Grado",
    interests: ["Ciencias", "Lectura", "Música"],
    description:
      "Carlos es un estudiante dedicado con gran interés en las ciencias...",
    story:
      "Carlos es el mayor de tres hermanos y un ejemplo para ellos. Su padre trabaja como vendedor ambulante...",
    needs: ["Libros de ciencias", "Acceso a internet", "Apoyo en salud", "Actividades extracurriculares"],
    image: "/happy-colombian-boy-10-years-old-smiling-portrait.jpg",
  },
}

// Componente principal de la página del perfil del niño
export default function ChildProfilePage({ params }: { params: { id: string } }) {
  // Se obtiene el niño según el ID de la URL
  const child = childrenData[params.id]

  // Si el ID no existe, se muestra una página 404
  if (!child) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Encabezado general del sitio */}
      <Header />

      <main className="flex-1">
        

        {/* Sección del perfil del niño */}
        <section className="py-12 md:py-16">
          
          {/* Botón para volver a la lista de niños */}
        <div className="border-b border-border bg-muted/30 mt-8">
          <div className="container py-4">
            <Button asChild variant="ghost" size="sm">
              <Link href="/apadrinar">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver a la lista
              </Link>
            </Button>
          </div>
        </div>

          <div className="container">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">

              {/* Imagen del niño y detalles de apadrinamiento */}
              <div className="space-y-4">
                <div className="overflow-hidden rounded-3xl bg-muted aspect-square">
                  <img
                    src={child.image || "/placeholder.svg"}
                    alt={child.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Tarjeta con información sobre lo que incluye el apadrinamiento */}
                <Card className="border-none shadow-sm bg-primary/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Heart className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div className="space-y-1">
                        <p className="font-semibold text-foreground">Tu apadrinamiento incluye:</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Apoyo educativo completo</li>
                          <li>• Atención médica y nutricional</li>
                          <li>• Uniformes y útiles escolares</li>
                          <li>• Actividades recreativas</li>
                          <li>• Actualizaciones mensuales</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Información general del niño */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl">{child.name}</h1>

                  {/* Etiquetas de información (edad y grado) */}
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="secondary" className="rounded-full px-3 py-1">
                      {child.age} años
                    </Badge>
                    <Badge variant="secondary" className="rounded-full px-3 py-1">

                      {child.grade}
                    </Badge>
                  </div>
                </div>

                {/* Pestañas (Descripción, Intereses, Necesidades) */}
                <Tabs defaultValue="about" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="about">Sobre {child.name.split(" ")[0]}</TabsTrigger>
                    <TabsTrigger value="interests">Intereses</TabsTrigger>
                    <TabsTrigger value="needs">Necesidades</TabsTrigger>
                  </TabsList>

                  {/* Contenido de cada pestaña */}
                  <TabsContent value="about" className="space-y-4 mt-6">
                    <div className="space-y-3">
                      <h3 className="font-semibold text-foreground">Descripción</h3>
                      <p className="text-muted-foreground leading-relaxed">{child.description}</p>
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-semibold text-foreground">Su Historia</h3>
                      <p className="text-muted-foreground leading-relaxed">{child.story}</p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-foreground">Educación</h3>
                      <p className="text-muted-foreground">
                        <span className="font-medium">Escuela:</span> {child.school}
                      </p>
                      <p className="text-muted-foreground">
                        <span className="font-medium">Grado:</span> {child.grade}
                      </p>
                    </div>
                  </TabsContent>

                  {/* Intereses */}
                  <TabsContent value="interests" className="space-y-4 mt-6">
                    <div className="space-y-3">
                      <h3 className="font-semibold text-foreground">Le Apasiona</h3>
                      <div className="flex flex-wrap gap-2">
                        {child.interests.map((interest: string) => (
                          <Badge key={interest} className="rounded-full bg-secondary text-secondary-foreground">
                            <Sparkles className="mr-1 h-3 w-3" />
                            {interest}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {child.name.split(" ")[0]} tiene múltiples talentos e intereses que queremos ayudar a desarrollar...
                    </p>
                  </TabsContent>

                  {/* Necesidades */}
                  <TabsContent value="needs" className="space-y-4 mt-6">
                    <div className="space-y-3">
                      <h3 className="font-semibold text-foreground">Áreas de Apoyo</h3>
                      <ul className="space-y-2">
                        {child.needs.map((need: string) => (
                          <li key={need} className="flex items-center gap-2 text-muted-foreground">
                            <div className="h-2 w-2 rounded-full bg-primary" />
                            {need}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Tu apadrinamiento ayudará a cubrir estas necesidades esenciales...
                    </p>
                  </TabsContent>
                </Tabs>

                {/* Botones de acción */}
                <div className="flex flex-col gap-3 pt-4">
                  <Button
                    size="lg"
                    className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <Heart className="mr-2 h-5 w-5 fill-current" />
                    Apadrinar a {child.name.split(" ")[0]}
                  </Button>

                  {/* Botón para abrir chat de consulta */}
                  <Button asChild variant="outline" size="lg" className="w-full rounded-full bg-transparent">
                    <Link href={`/apadrinar/${child.id}/chat`}>
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Consultar sobre {child.name.split(" ")[0]}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de recomendación de otros niños */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container">
            <div className="mb-8 space-y-2">
              <h2 className="font-serif text-3xl font-bold text-foreground">Otros Niños que Necesitan tu Apoyo</h2>
              <p className="text-muted-foreground">Conoce más historias que pueden tocar tu corazón</p>
            </div>

            {/* Tarjetas de otros niños (simuladas) */}
            <div className="grid gap-6 md:grid-cols-3">
              {[3, 4, 5].map((id) => (
                <Card key={id} className="overflow-hidden border-none shadow-sm">
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img
                      src={`/happy-colombian-child-.jpg?height=400&width=400&query=happy-colombian-child-${id}`}
                      alt="Niño"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <Button asChild variant="link" className="p-0 h-auto text-primary">
                      <Link href={`/apadrinar/${id}`}>Ver perfil completo →</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Pie de página */}
      <Footer />
    </div>
  )
}
