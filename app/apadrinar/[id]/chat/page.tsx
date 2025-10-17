import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Send, Shield, Clock } from "lucide-react"
import Link from "next/link"

// Mock chat messages
const messages = [
  {
    id: 1,
    sender: "admin",
    senderName: "Coordinadora Ana",
    message: "¡Hola! Gracias por tu interés en apadrinar a María. ¿Tienes alguna pregunta sobre el proceso?",
    timestamp: "10:30 AM",
    date: "Hoy",
  },
  {
    id: 2,
    sender: "user",
    senderName: "Tú",
    message: "Sí, me gustaría saber más sobre cómo funciona la comunicación con el niño apadrinado.",
    timestamp: "10:35 AM",
    date: "Hoy",
  },
  {
    id: 3,
    sender: "admin",
    senderName: "Coordinadora Ana",
    message:
      "Excelente pregunta. Una vez completes el apadrinamiento, recibirás actualizaciones mensuales con fotos y reportes del progreso de María. También podrás enviar cartas y mensajes a través de nuestra plataforma segura.",
    timestamp: "10:37 AM",
    date: "Hoy",
  },
]

export default function ChatPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 bg-muted/30">
        {/* Back Button */}
        <div className="border-b border-border bg-background">
          <div className="container py-4">
            <Button asChild variant="ghost" size="sm">
              <Link href={`/apadrinar/${params.id}`}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al perfil
              </Link>
            </Button>
          </div>
        </div>

        <div className="container py-8">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Chat Area */}
              <Card className="lg:col-span-2 border-none shadow-sm">
                <CardHeader className="border-b border-border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" />
                        <AvatarFallback>CA</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">Chat con Fundación</CardTitle>
                        <p className="text-sm text-muted-foreground">Coordinadora Ana</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="rounded-full">
                      <Shield className="mr-1 h-3 w-3" />
                      Seguro
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  {/* Messages */}
                  <div className="h-[400px] overflow-y-auto p-6 space-y-4">
                    {messages.map((msg) => (
                      <div key={msg.id} className={`flex gap-3 ${msg.sender === "user" ? "flex-row-reverse" : ""}`}>
                        <Avatar className="h-8 w-8">
                          <AvatarFallback
                            className={
                              msg.sender === "user"
                                ? "bg-primary text-primary-foreground"
                                : "bg-secondary text-secondary-foreground"
                            }
                          >
                            {msg.sender === "user" ? "TÚ" : "CA"}
                          </AvatarFallback>
                        </Avatar>
                        <div className={`flex-1 space-y-1 ${msg.sender === "user" ? "items-end" : ""}`}>
                          <div
                            className={`rounded-2xl px-4 py-3 max-w-[80%] ${
                              msg.sender === "user" ? "bg-primary text-primary-foreground ml-auto" : "bg-muted"
                            }`}
                          >
                            <p className="text-sm leading-relaxed">{msg.message}</p>
                          </div>
                          <div className="flex items-center gap-2 px-2">
                            <Clock className="h-3 w-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">{msg.timestamp}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Input */}
                  <div className="border-t border-border p-4">
                    <form className="flex gap-2">
                      <Input placeholder="Escribe tu mensaje..." className="flex-1" />
                      <Button
                        type="submit"
                        size="icon"
                        className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        <Send className="h-4 w-4" />
                      </Button>
                    </form>
                  </div>
                </CardContent>
              </Card>

              {/* Info Sidebar */}
              <div className="space-y-6">
                <Card className="border-none shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg">Información del Chat</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <Shield className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <div className="space-y-1">
                          <p className="text-sm font-medium text-foreground">Chat Seguro</p>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            Todas las conversaciones son monitoreadas para garantizar la seguridad de los niños.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div className="space-y-1">
                          <p className="text-sm font-medium text-foreground">Tiempo de Respuesta</p>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            Nuestro equipo responde en un plazo de 24-48 horas.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-sm bg-primary/10">
                  <CardContent className="p-6 space-y-3">
                    <h3 className="font-semibold text-foreground">¿Listo para apadrinar?</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Si ya tienes toda la información que necesitas, puedes proceder con el apadrinamiento.
                    </p>
                    <Button
                      asChild
                      className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <Link href={`/apadrinar/${params.id}`}>Apadrinar Ahora</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
